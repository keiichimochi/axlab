import React, { useState, useRef, useEffect } from 'react';
import { HomeIcon, RobotIcon, SendIcon } from './icons';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface AskOurAIPageProps {
  onBack: () => void;
}

const AskOurAIPage: React.FC<AskOurAIPageProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'こんにちは！私はAXLABのAIアシスタントです。何でもお気軽にお聞きください。',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (message: string): Promise<string> => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('APIキーが設定されていません');
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{
              text: `あなたはAXLABのAIアシスタントです。AXLABは以下のサービスを提供しています：

1. AI Agent - AIエージェントサービス
AI エージェントサービスは、ユーザーのタスク管理、仕事上の質問に対してAIを活用して回答を生成するサービスです。次に何をすべきか、次のタスクをスケジューラーに登録するなど秘書のような役割を持つAIです。
2. LINE Bot - LINEボット開発
Line Botは社内の規定やマニュアル、Q＆A 、定期タスクの実施をユーザーに促したり、ユーザーからの質問に対して回答を生成するボットです。
3. Dashboard & Workflow - ダッシュボードとワークフロー管理
社内のさまざまな指標、数値目標などを可視化し、ワークフローを効率化するダッシュボードとワークフロー管理サービスです。

4. Web Production - AI案内による次世代Web制作
AIチャットボットなどをWebに配置してユーザーの質問にAIが解凍するWebサービスを構築します。従来のWeb制作も対応可能です。

ユーザーからの質問に対して、親切で丁寧な日本語で回答してください。AXLABのサービスに関する質問の場合は、上記の情報を参考にして回答してください。

ユーザーの質問: ${message}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
            candidateCount: 1
          },
          safetySettings: [
            {
              category: 'HARM_CATEGORY_HARASSMENT',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
              category: 'HARM_CATEGORY_HATE_SPEECH',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
              category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
              category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(`API request failed: ${response.status} ${response.statusText}${errorData ? ` - ${JSON.stringify(errorData)}` : ''}`);
      }

      const data = await response.json();
      
      if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No candidates returned from API');
      }
      
      const candidate = data.candidates[0];
      if (candidate.finishReason === 'SAFETY') {
        return 'すみません、安全性の理由により回答を生成できませんでした。別の質問をお試しください。';
      }
      
      return candidate.content?.parts?.[0]?.text || 'すみません、回答を生成できませんでした。';
    } catch (error) {
      console.error('Gemini API Error:', error);
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          return 'APIキーの設定に問題があります。管理者にお問い合わせください。';
        }
        if (error.message.includes('quota')) {
          return 'APIの利用制限に達しました。しばらく時間をおいてから再度お試しください。';
        }
      }
      return '申し訳ございません。現在AIサービスに接続できません。しばらく時間をおいてから再度お試しください。';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await callGeminiAPI(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-3 rounded-full shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-shadow duration-200 hover:bg-gray-50"
          >
            <HomeIcon className="h-5 w-5 text-[#2d5a53]" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#2d5a53] shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff]">
              <RobotIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2d5a53]">Ask Our AI</h1>
              <p className="text-[#5a7a72] text-sm">AIアシスタントに何でも聞いてみてください</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] ${
                message.isUser
                  ? 'bg-[#2d5a53] text-white ml-4'
                  : 'bg-white text-gray-800 mr-4'
              }`}
            >
              <p className="whitespace-pre-wrap break-words">{message.content}</p>
              <p className={`text-xs mt-2 opacity-70 ${
                message.isUser ? 'text-gray-200' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString('ja-JP', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] bg-white text-gray-800 mr-4">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#2d5a53] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#2d5a53] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-[#2d5a53] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-gray-500">AIが回答を生成中...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-end gap-3 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="メッセージを入力してください..."
              className="w-full p-4 pr-12 rounded-2xl border-none outline-none resize-none shadow-[inset_5px_5px_10px_#d9dde3,_inset_-5px_-5px_10px_#ffffff] bg-[#F0F2F5] text-gray-800 placeholder-gray-500 min-h-[60px] max-h-[120px]"
              rows={1}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className={`p-4 rounded-2xl transition-all duration-200 ${
              !inputMessage.trim() || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#2d5a53] text-white shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] hover:shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff]'
            }`}
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskOurAIPage;