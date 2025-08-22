import React, { useState } from 'react';
import { ChartBarIcon, WorkflowIcon, HomeIcon } from './icons';

interface DashboardPageProps {
  onBack: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'workflow'>('dashboard');

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
            <h1 className="text-3xl font-bold text-[#2d5a53]">Dashboard & Workflow</h1>
          </div>
        </div>
        <p className="text-[#5a7a72] text-lg ml-16">企業のあらゆる数値を可視化し、定型業務を自動化</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-8 bg-white rounded-2xl p-2 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300 ${
            activeTab === 'dashboard'
              ? 'bg-[#2d5a53] text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]'
              : 'text-[#2d5a53] hover:bg-gray-50'
          }`}
        >
          <ChartBarIcon className="h-5 w-5" />
          <span className="font-medium">ダッシュボード</span>
        </button>
        <button
          onClick={() => setActiveTab('workflow')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300 ${
            activeTab === 'workflow'
              ? 'bg-[#2d5a53] text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]'
              : 'text-[#2d5a53] hover:bg-gray-50'
          }`}
        >
          <WorkflowIcon className="h-5 w-5" />
          <span className="font-medium">ワークフロー</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'dashboard' ? (
        <div className="space-y-6">
          {/* Dashboard Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
            <h2 className="text-xl font-bold text-[#2d5a53] mb-4">データ可視化ダッシュボード</h2>
            <p className="text-[#5a7a72] mb-6">企業の重要指標をリアルタイムで監視・分析</p>
            
            {/* Mock Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">売上高</h3>
                <p className="text-2xl font-bold text-blue-900">¥12,450,000</p>
                <p className="text-sm text-blue-600">前月比 +15.2%</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">利益率</h3>
                <p className="text-2xl font-bold text-green-900">23.8%</p>
                <p className="text-sm text-green-600">前月比 +2.1%</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">顧客数</h3>
                <p className="text-2xl font-bold text-purple-900">1,247</p>
                <p className="text-sm text-purple-600">前月比 +8.3%</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-lg font-bold text-[#2d5a53] mb-3">リアルタイム監視</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 売上・利益の即座な把握</li>
                <li>• KPI指標の自動更新</li>
                <li>• アラート機能</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-lg font-bold text-[#2d5a53] mb-3">カスタマイズ可能</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 業界特化のテンプレート</li>
                <li>• ドラッグ&ドロップ編集</li>
                <li>• 多様なグラフ形式</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Workflow Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
            <h2 className="text-xl font-bold text-[#2d5a53] mb-4">業務自動化ワークフロー</h2>
            <p className="text-[#5a7a72] mb-6">経理・総務・人事の定型業務を効率化</p>
            
            {/* Workflow Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">経理業務</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• 請求書自動発行</li>
                  <li>• 経費精算処理</li>
                  <li>• 帳簿記録</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-xl border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-2">総務業務</h3>
                <ul className="text-sm text-teal-700 space-y-1">
                  <li>• 契約書管理</li>
                  <li>• 備品発注</li>
                  <li>• 会議室予約</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">人事業務</h3>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• 勤怠管理</li>
                  <li>• 給与計算</li>
                  <li>• 評価プロセス</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Automation Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-lg font-bold text-[#2d5a53] mb-3">効率化効果</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 作業時間を80%削減</li>
                <li>• ヒューマンエラー防止</li>
                <li>• コスト削減効果</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
              <h3 className="text-lg font-bold text-[#2d5a53] mb-3">導入サポート</h3>
              <ul className="space-y-2 text-[#5a7a72]">
                <li>• 既存システム連携</li>
                <li>• カスタマイズ対応</li>
                <li>• 24時間サポート</li>
              </ul>
            </div>
          </div>

          {/* Workflow Builder Preview */}
          <div className="bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d9dde3,_-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-bold text-[#2d5a53] mb-4">ワークフロービルダー</h3>
            <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium">
                  トリガー
                </div>
                <div className="text-gray-400">→</div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium">
                  条件分岐
                </div>
                <div className="text-gray-400">→</div>
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium">
                  アクション
                </div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-3">
                ドラッグ&ドロップで簡単にワークフローを構築
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-[#2d5a53] to-[#3d6b63] rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">今すぐ始めましょう</h2>
        <p className="mb-6 text-lg opacity-90">
          無料トライアルで Dashboard & Workflow の効果を実感してください
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#2d5a53] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            無料トライアル開始
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2d5a53] transition-colors">
            デモを見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;