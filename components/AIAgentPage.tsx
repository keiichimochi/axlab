import React from 'react';
import { RobotIcon, MenuIcon, AnalyticsIcon, LightningIcon } from './icons';

interface AIAgentPageProps {
  onBack?: () => void;
}

const AIAgentPage: React.FC<AIAgentPageProps> = ({ onBack }) => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen">
      <div className="w-full max-w-4xl mx-auto bg-[#F0F2F5] overflow-hidden font-sans">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              {onBack && (
                <button 
                  onClick={onBack}
                  className="mr-4 p-2 rounded-full shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] active:shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] hover:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-all duration-200"
                >
                  <svg className="h-5 w-5 text-[#2d5a53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <div>
                <h1 className="text-2xl font-bold text-[#2d5a53]">AX LAB</h1>
                <p className="text-sm text-gray-500">AI SOLUTIONS</p>
              </div>
            </div>
            <button className="p-3 rounded-full shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] active:shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff]">
              <MenuIcon className="h-6 w-6 text-[#2d5a53]" />
            </button>
          </header>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#2d5a53] mb-6 bg-gradient-to-r from-[#2d5a53] to-[#4a7c59] bg-clip-text text-transparent">
              AI Agent
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              次世代のAIエージェントで、あなたのビジネスを自動化し、効率を最大化します。
            </p>
            <button className="bg-gradient-to-r from-[#2d5a53] to-[#4a7c59] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              今すぐ始める
            </button>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d9dde3,_-8px_-8px_20px_#ffffff] transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <RobotIcon className="h-12 w-12 text-[#2d5a53]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2d5a53] mb-4">自動応答</h3>
                <p className="text-gray-600 mb-4">24時間365日、お客様からの問い合わせに自動で対応します。</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    即座な応答
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    多言語対応
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    学習機能
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d9dde3,_-8px_-8px_20px_#ffffff] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <AnalyticsIcon className="h-12 w-12 text-[#2d5a53]" />
                  </div>
                <h3 className="text-xl font-semibold text-[#2d5a53] mb-4">データ分析</h3>
                <p className="text-gray-600 mb-4">顧客データを分析し、ビジネスインサイトを提供します。</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    リアルタイム分析
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    予測分析
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    カスタムレポート
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d9dde3,_-8px_-8px_20px_#ffffff] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <LightningIcon className="h-12 w-12 text-[#2d5a53]" />
                  </div>
                <h3 className="text-xl font-semibold text-[#2d5a53] mb-4">自動化</h3>
                <p className="text-gray-600 mb-4">繰り返し作業を自動化し、生産性を向上させます。</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    ワークフロー自動化
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    スケジュール管理
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    タスク最適化
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl mb-16 shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff]">
            <h2 className="text-3xl font-bold text-[#2d5a53] text-center mb-10">活用事例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#2d5a53] to-[#4a7c59] text-white p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold mb-2">カスタマーサポート</h3>
                <p className="text-sm opacity-90">問い合わせ対応の自動化</p>
              </div>
              <div className="bg-gradient-to-br from-[#2d5a53] to-[#4a7c59] text-white p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold mb-2">営業支援</h3>
                <p className="text-sm opacity-90">リード管理と追跡</p>
              </div>
              <div className="bg-gradient-to-br from-[#2d5a53] to-[#4a7c59] text-white p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold mb-2">人事管理</h3>
                <p className="text-sm opacity-90">採用プロセスの最適化</p>
              </div>
              <div className="bg-gradient-to-br from-[#2d5a53] to-[#4a7c59] text-white p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold mb-2">マーケティング</h3>
                <p className="text-sm opacity-90">キャンペーン自動化</p>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2d5a53] mb-10">導入プロセス</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl relative shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff]">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2d5a53] to-[#4a7c59] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#2d5a53] mb-4 mt-4">要件定義</h3>
                <p className="text-gray-600">お客様のニーズを詳しくヒアリングし、最適なソリューションを設計します。</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl relative shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff]">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2d5a53] to-[#4a7c59] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#2d5a53] mb-4 mt-4">開発・設定</h3>
                <p className="text-gray-600">AIエージェントの開発と設定を行い、お客様の環境に合わせてカスタマイズします。</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl relative shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff]">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2d5a53] to-[#4a7c59] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#2d5a53] mb-4 mt-4">運用開始</h3>
                <p className="text-gray-600">本格運用を開始し、継続的なサポートとメンテナンスを提供します。</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#2d5a53] to-[#4a7c59] text-white p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">今すぐAI Agentを始めませんか？</h2>
              <p className="text-xl mb-8 opacity-90">無料相談で、あなたのビジネスに最適なソリューションをご提案します。</p>
              <button className="bg-white text-[#2d5a53] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                無料相談を申し込む
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIAgentPage;