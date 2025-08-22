
import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import { BottomNavItem } from './components/BottomNavItem';
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
} from './components/icons';

const App: React.FC = () => {
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
              icon={<BrainCircuitIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="Data"
              subtitle="Analysis"
            />
            <ServiceCard
              icon={<ChartBarIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="Predictive"
              subtitle="Analytics"
            />
            <ServiceCard
              icon={<PersonalizationIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="Personalization"
              subtitle="AI"
            />
            <ServiceCard
              icon={<CartAiIcon className="h-8 w-8 text-[#2d5a53]" />}
              title="E-Commerce"
              subtitle="AI"
            />
          </main>

          {/* Search Bar */}
          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Ask our AI........"
              className="w-full bg-[#F0F2F5] text-gray-700 placeholder-gray-400 rounded-full py-3 pl-11 pr-4 focus:outline-none shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] focus:ring-2 focus:ring-[#2d5a53]/50 transition-shadow duration-200"
            />
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
