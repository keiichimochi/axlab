
import React from 'react';

interface BottomNavItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

export const BottomNavItem: React.FC<BottomNavItemProps> = ({ icon, active = false }) => {
  const baseClasses = "p-4 rounded-xl cursor-pointer transition-all duration-200";
  const activeClasses = "bg-[#F0F2F5] text-[#2d5a53] shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff]";
  const inactiveClasses = "text-gray-500 shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] hover:text-[#2d5a53] active:shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff]";

  return (
    <button className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
      {icon}
    </button>
  );
};
