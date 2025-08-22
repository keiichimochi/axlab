import React from 'react';
import { ArrowLeftIcon, LineIcon, RobotIcon, AnalyticsIcon } from './icons';

interface LineBotPageProps {
  onBack?: () => void;
}

const LineBotPage: React.FC<LineBotPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-100 shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              {onBack && (
                <button
                  onClick={onBack}
                  className="mr-4 p-2 rounded-full bg-gray-100 shadow-[5px_5px_10px_#d1d5db,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d5db,inset_-5px_-5px_10px_#ffffff] transition-all duration-200"
                >
                  <ArrowLeftIcon className="h-6 w-6 text-gray-600" />
                </button>
              )}
              <div className="flex items-center">
                <LineIcon className="h-8 w-8 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">LINE Bot</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-full p-6 shadow-[inset_12px_12px_24px_#d1d5db,inset_-12px_-12px_24px_#ffffff]">
              <LineIcon className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            LINE Bot サービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LINEプラットフォームを活用した自動応答システムで、
            お客様とのコミュニケーションを効率化し、ビジネスの成長をサポートします。
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] hover:shadow-[inset_12px_12px_24px_#d1d5db,inset_-12px_-12px_24px_#ffffff] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <RobotIcon className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">自動応答</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              24時間365日、お客様からのLINEメッセージに自動で対応し、迅速なサポートを提供します。
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] hover:shadow-[inset_12px_12px_24px_#d1d5db,inset_-12px_-12px_24px_#ffffff] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <AnalyticsIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">データ分析</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              ユーザーとの会話データを分析し、顧客ニーズの把握とサービス改善に活用します。
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] hover:shadow-[inset_12px_12px_24px_#d1d5db,inset_-12px_-12px_24px_#ffffff] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <LineIcon className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">LINE連携</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              LINE公式アカウントと完全連携し、リッチメニューやプッシュ通知機能を活用できます。
            </p>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-[8px_8px_20px_#d9dde3,-8px_-8px_20px_#ffffff] mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">主な機能</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d9dde3,_-8px_-8px_20px_#ffffff] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <RobotIcon className="h-12 w-12 text-[#2d5a53]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d5a53] mb-4">チャットボット</h3>
              <p className="text-gray-600 mb-4">よくある質問への自動回答や、商品案内を24時間対応で提供します。</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• FAQ自動応答</li>
                <li>• 商品・サービス案内</li>
                <li>• 予約受付対応</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d9dde3,_-8px_-8px_20px_#ffffff] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <AnalyticsIcon className="h-12 w-12 text-[#2d5a53]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d5a53] mb-4">顧客管理</h3>
              <p className="text-gray-600 mb-4">LINE友だちの行動データを分析し、パーソナライズされたサービスを提供します。</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 友だち情報管理</li>
                <li>• 行動履歴分析</li>
                <li>• セグメント配信</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[5px_5px_15px_#d9dde3,_-5px_-5px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d9dde3,_-8px_-8px_20px_#ffffff] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <LineIcon className="h-12 w-12 text-[#2d5a53]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d5a53] mb-4">マーケティング</h3>
              <p className="text-gray-600 mb-4">プッシュ通知やリッチメニューを活用した効果的なマーケティング施策を実行します。</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• プッシュ通知配信</li>
                <li>• リッチメニュー設計</li>
                <li>• キャンペーン管理</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 shadow-[8px_8px_20px_#d9dde3,-8px_-8px_20px_#ffffff]">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">導入メリット</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 shadow-[inset_4px_4px_8px_#d1fae5,inset_-4px_-4px_8px_#ffffff]">
                  <span className="text-green-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">顧客満足度向上</h4>
                  <p className="text-gray-600">即座の応答により、お客様の待ち時間を削減し、満足度を大幅に向上させます。</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 shadow-[inset_4px_4px_8px_#dbeafe,inset_-4px_-4px_8px_#ffffff]">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">運営コスト削減</h4>
                  <p className="text-gray-600">人的リソースの効率化により、カスタマーサポートのコストを大幅に削減できます。</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4 shadow-[inset_4px_4px_8px_#e9d5ff,inset_-4px_-4px_8px_#ffffff]">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">売上向上</h4>
                  <p className="text-gray-600">パーソナライズされた商品提案により、クロスセルやアップセルの機会を創出します。</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-full p-3 mr-4 shadow-[inset_4px_4px_8px_#fef3c7,inset_-4px_-4px_8px_#ffffff]">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">データ活用</h4>
                  <p className="text-gray-600">顧客との会話データから貴重なインサイトを獲得し、ビジネス戦略に活用できます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LineBotPage;