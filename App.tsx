
import React, { useState } from 'react';
import { ServiceCard } from './components/ServiceCard';
import { BottomNavItem } from './components/BottomNavItem';
import AIAgentPage from './components/AIAgentPage';
import LineBotPage from './components/LineBotPage';
import DashboardPage from './components/DashboardPage';
import WebCreationPage from './components/WebCreationPage';
import AskOurAIPage from './components/AskOurAIPage';
import {
  BrainCircuitIcon,
  ChartBarIcon,
  PersonalizationIcon,
  CartAiIcon,
  HomeIcon,
  HeartIcon,
  ShuffleIcon,
  UserIcon,
  MenuIcon,
  SearchIcon,
  LineBotIcon,
  RadioIcon,
  WorkflowIcon,
  InstagramIcon,
  XIcon,
  LineIcon,
  RobotIcon,
  WebsiteIcon,
} from './components/icons';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'ai-agent' | 'line-bot' | 'dashboard' | 'web-creation' | 'ask-our-ai'>('home');

  if (currentPage === 'ai-agent') {
    return <AIAgentPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'line-bot') {
    return <LineBotPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'dashboard') {
    return <DashboardPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'web-creation') {
    return <WebCreationPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'ask-our-ai') {
    return <AskOurAIPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="bg-[#F0F2F5] min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-[#F0F2F5] rounded-3xl shadow-lg overflow-hidden font-sans">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-2xl font-bold text-[#2d5a53]">AX LAB</h1>
              <p className="text-sm text-gray-500">AI SOLUTIONS</p>
            </div>
            <button className="p-3 rounded-full shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] active:shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff]">
              <MenuIcon className="h-6 w-6 text-[#2d5a53]" />
            </button>
          </header>

          {/* Service Grid */}
          <main className="grid grid-cols-2 gap-6 mb-10">
            <ServiceCard
              icon={<RobotIcon className="h-10 w-10 text-[#2d5a53]" />}
              title="AI Agent"
              subtitle=""
              onClick={() => setCurrentPage('ai-agent')}
            />
            <ServiceCard
              icon={<LineIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="LINE Bot"
              subtitle=""
              onClick={() => setCurrentPage('line-bot')}
            />
            <ServiceCard
              icon={<ChartBarIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="Dashboard & Workflow"
              subtitle=""
              onClick={() => setCurrentPage('dashboard')}
            />
            <ServiceCard
              icon={<WebsiteIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="Web制作"
              description="次世代のWebサイト制作"
              onClick={() => setCurrentPage('web-creation')}
            />
          </main>

          {/* Search Bar */}
          <div className="relative mb-12 cursor-pointer" onClick={() => setCurrentPage('ask-our-ai')}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none gap-2">
              <RobotIcon className="h-7 w-7 text-gray-400" />
              <span className="text-gray-400 text-sm">Ask Our AI</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="w-full bg-[#F0F2F5] text-gray-700 placeholder-gray-400 rounded-full py-3 pl-24 pr-4 focus:outline-none shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] focus:ring-2 focus:ring-[#2d5a53]/50 transition-shadow duration-200 cursor-pointer"
              readOnly
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <button className="p-3 rounded-full shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-shadow duration-200">
              <InstagramIcon className="h-5 w-5 text-[#2d5a53]" />
            </button>
            <button className="p-3 rounded-full shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-shadow duration-200">
              <XIcon className="h-5 w-5 text-[#2d5a53]" />
            </button>
            {/* TikTok button temporarily hidden */}
            {/* <button className="p-3 rounded-full shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-shadow duration-200">
              <TikTokIcon className="h-5 w-5 text-[#2d5a53]" />
            </button> */}
            <button className="p-3 rounded-full shadow-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] active:shadow-inner-[3px_3px_6px_#d9dde3,_-3px_-3px_6px_#ffffff] transition-shadow duration-200">
              <LineIcon className="h-6 w-6 text-[#2d5a53]" />
            </button>
          </div>

          {/* Bottom Navigation */}
          <footer className="flex justify-around items-center">
            <BottomNavItem icon={<HomeIcon className="h-6 w-6" />} active />
            <BottomNavItem icon={<HeartIcon className="h-6 w-6" />} />
            <BottomNavItem icon={<ShuffleIcon className="h-6 w-6" />} />
            <BottomNavItem icon={<UserIcon className="h-6 w-6" />} />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
