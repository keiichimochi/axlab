import React, { useState } from 'react';
import { WebsiteIcon, HomeIcon, RobotIcon } from './icons';

interface WebCreationPageProps {
  onBack: () => void;
}

const WebCreationPage: React.FC<WebCreationPageProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'features' | 'process'>('overview');

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="p-3 rounded-full shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-shadow duration-200 hover:bg-gray-50"
          >
            <HomeIcon className="h-5 w-5 text-[#2d5a53]" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-[#2d5a53]">Web制作</h1>
          </div>
        </div>
        <p className="text-[#5a7a72] text-lg ml-16">AIを活用したAibotが案内する次世代のWebサイト制作</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex mb-8 bg-white rounded-2xl p-2 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
        <button
          onClick={() => setActiveSection('overview')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300 ${
            activeSection === 'overview'
              ? 'bg-[#2d5a53] text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]'
              : 'text-[#2d5a53] hover:bg-gray-50'
          }`}
        >
          <WebsiteIcon className="h-5 w-5" />
          <span className="font-medium">概要</span>
        </button>
        <button
          onClick={() => setActiveSection('features')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300 ${
            activeSection === 'features'
              ? 'bg-[#2d5a53] text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]'
              : 'text-[#2d5a53] hover:bg-gray-50'
          }`}
        >
          <RobotIcon className="h-5 w-5" />
          <span className="font-medium">AI機能</span>
        </button>
        <button
          onClick={() => setActiveSection('process')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300 ${
            activeSection === 'process'
              ? 'bg-[#2d5a53] text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]'
              : 'text-[#2d5a53] hover:bg-gray-50'
          }`}
        >
          <span className="font-medium">制作フロー</span>
        </button>
      </div>

      {/* Content */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl p-8 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff] text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#2d5a53] to-[#3d6b63] p-6 rounded-full">
                <RobotIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#2d5a53] mb-4">Aibotがあなたの理想のWebサイトを実現</h2>
            <p className="text-[#5a7a72] text-lg mb-6">
              従来の制作会社とは一線を画す、AI技術を駆使した次世代のWeb制作サービス
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">高速制作</h3>
                </div>
                <p className="text-[#5a7a72]">従来の1/3の期間でWebサイトを完成</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">パーソナライズ</h3>
                </div>
                <p className="text-[#5a7a72]">AIがユーザーに最適化されたデザインを提案</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">インテリジェント</h3>
                </div>
                <p className="text-[#5a7a72]">24/7 AIサポートで継続的な改善</p>
              </div>
            </div>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-xl font-bold text-[#2d5a53] mb-4">コーポレートサイト</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 企業ブランディング強化</li>
                <li>• SEO最適化済み</li>
                <li>• レスポンシブデザイン</li>
                <li>• CMS導入サポート</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-xl font-bold text-[#2d5a53] mb-4">ECサイト</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 決済システム連携</li>
                <li>• 在庫管理機能</li>
                <li>• 顧客管理システム</li>
                <li>• マーケティング自動化</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-xl font-bold text-[#2d5a53] mb-4">ランディングページ</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• コンバージョン最適化</li>
                <li>• A/Bテスト機能</li>
                <li>• アナリティクス連携</li>
                <li>• 高速ローディング</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-xl font-bold text-[#2d5a53] mb-4">ポートフォリオサイト</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 作品ギャラリー機能</li>
                <li>• お問い合わせフォーム</li>
                <li>• SNS連携</li>
                <li>• モバイル最適化</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'features' && (
        <div className="space-y-6">
          {/* AI Features */}
          <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
            <h2 className="text-xl font-bold text-[#2d5a53] mb-6">Aibotの革新的なAI機能</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-bold text-[#2d5a53]">インテリジェントデザイン生成</h3>
                  </div>
                  <p className="text-[#5a7a72] mb-3">
                    業界・ターゲット・目的を分析し、最適なデザインを自動生成
                  </p>
                  <ul className="text-sm text-[#5a7a72] space-y-1">
                    <li>• 色彩心理学に基づいたカラーパレット</li>
                    <li>• ユーザビリティを考慮したレイアウト</li>
                    <li>• ブランドイメージに合致したフォント選択</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <h3 className="font-bold text-[#2d5a53]">コンテンツ自動生成</h3>
                  </div>
                  <p className="text-[#5a7a72] mb-3">
                    SEOに最適化された高品質なコンテンツを自動作成
                  </p>
                  <ul className="text-sm text-[#5a7a72] space-y-1">
                    <li>• キーワード分析に基づいた文章作成</li>
                    <li>• 業界専門用語の適切な使用</li>
                    <li>• 読みやすさを重視した構成</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="font-bold text-[#2d5a53]">パフォーマンス最適化</h3>
                  </div>
                  <p className="text-[#5a7a72] mb-3">
                    リアルタイムでサイトパフォーマンスを監視・改善
                  </p>
                  <ul className="text-sm text-[#5a7a72] space-y-1">
                    <li>• ページ読み込み速度の自動最適化</li>
                    <li>• 画像圧縮とフォーマット最適化</li>
                    <li>• CDN配信の自動設定</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="h-6 w-6 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="font-bold text-[#2d5a53]">データ分析・改善提案</h3>
                  </div>
                  <p className="text-[#5a7a72] mb-3">
                    ユーザー行動を分析し、継続的な改善案を提示
                  </p>
                  <ul className="text-sm text-[#5a7a72] space-y-1">
                    <li>• ヒートマップ分析</li>
                    <li>• コンバージョン率改善提案</li>
                    <li>• A/Bテストの自動実行</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-bold text-[#2d5a53] mb-4">Aibotとの対話例</h3>
            <div className="bg-gray-50 rounded-xl p-4 space-y-4">
              <div className="flex gap-3">
                <div className="bg-blue-500 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  You
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                  <p className="text-gray-800">美容院のWebサイトを作りたいです</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#2d5a53] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  AI
                </div>
                <div className="bg-[#2d5a53] text-white p-3 rounded-lg flex-1">
                  <p>美容院のWebサイト制作ですね！ターゲット層（年齢・性別）、提供サービス、店舗の雰囲気について教えてください。それに基づいて最適なデザインとコンテンツを提案いたします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'process' && (
        <div className="space-y-6">
          {/* Process Steps */}
          <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
            <h2 className="text-xl font-bold text-[#2d5a53] mb-6">AI制作フロー</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-8 w-8 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">1. ヒアリング・要件定義</h3>
                </div>
                <p className="text-[#5a7a72] text-sm mb-3">
                  Aibotとの対話を通じて、ビジネス目標、ターゲット、デザイン要望を詳細にヒアリング
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">所要時間: 30分〜1時間</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-8 w-8 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">2. AI設計・デザイン生成</h3>
                </div>
                <p className="text-[#5a7a72] text-sm mb-3">
                  収集した情報を基に、AIが最適なサイト構成とデザインを自動生成
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">所要時間: 2〜3日</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-8 w-8 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">3. プロトタイプ確認・調整</h3>
                </div>
                <p className="text-[#5a7a72] text-sm mb-3">
                  生成されたプロトタイプを確認し、Aibotとの対話で細かな調整を実施
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">所要時間: 1〜2日</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-8 w-8 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">4. 開発・実装</h3>
                </div>
                <p className="text-[#5a7a72] text-sm mb-3">
                  確定したデザインを基に、高品質なコードで実装。SEO対策も同時に実施
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">所要時間: 3〜5日</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-8 w-8 text-[#2d5a53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <h3 className="font-bold text-[#2d5a53]">5. テスト・公開</h3>
                </div>
                <p className="text-[#5a7a72] text-sm mb-3">
                  各種デバイスでの動作確認、パフォーマンステストを実施後、本番環境に公開
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">所要時間: 1〜2日</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-lg font-bold text-[#2d5a53] mb-4">ベーシック</h3>
              <div className="text-3xl font-bold text-[#2d5a53] mb-4">¥98,000</div>
              <ul className="space-y-2 text-[#5a7a72] mb-6">
                <li>• 5ページまで</li>
                <li>• レスポンシブデザイン</li>
                <li>• 基本SEO対策</li>
                <li>• 1ヶ月サポート</li>
              </ul>
              <button className="w-full bg-[#2d5a53] text-white py-3 rounded-xl font-semibold hover:bg-[#3d6b63] transition-colors">
                詳細を見る
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff] border-2 border-[#2d5a53] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2d5a53] text-white px-4 py-1 rounded-full text-sm font-bold">
                人気
              </div>
              <h3 className="text-lg font-bold text-[#2d5a53] mb-4">スタンダード</h3>
              <div className="text-3xl font-bold text-[#2d5a53] mb-4">¥198,000</div>
              <ul className="space-y-2 text-[#5a7a72] mb-6">
                <li>• 10ページまで</li>
                <li>• CMS導入</li>
                <li>• 高度なSEO対策</li>
                <li>• 3ヶ月サポート</li>
                <li>• アナリティクス設定</li>
              </ul>
              <button className="w-full bg-[#2d5a53] text-white py-3 rounded-xl font-semibold hover:bg-[#3d6b63] transition-colors">
                詳細を見る
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-lg font-bold text-[#2d5a53] mb-4">プレミアム</h3>
              <div className="text-3xl font-bold text-[#2d5a53] mb-4">¥398,000</div>
              <ul className="space-y-2 text-[#5a7a72] mb-6">
                <li>• ページ数無制限</li>
                <li>• ECサイト機能</li>
                <li>• マーケティング自動化</li>
                <li>• 6ヶ月サポート</li>
                <li>• 専任コンサルタント</li>
              </ul>
              <button className="w-full bg-[#2d5a53] text-white py-3 rounded-xl font-semibold hover:bg-[#3d6b63] transition-colors">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-[#2d5a53] to-[#3d6b63] rounded-2xl p-8 text-white text-center">
        <div className="flex justify-center mb-4">
          <RobotIcon className="h-16 w-16 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Aibotと一緒に始めましょう</h2>
        <p className="mb-6 text-lg opacity-90">
          無料相談で、あなたのビジネスに最適なWebサイトをAIが提案します
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#2d5a53] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            無料相談を始める
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2d5a53] transition-colors">
            制作事例を見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebCreationPage;