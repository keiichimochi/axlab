
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle, onClick }) => {
  return (
    <div 
      className="flex flex-col items-start justify-between p-4 bg-[#F0F2F5] rounded-2xl aspect-square shadow-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] transition-shadow duration-200 hover:shadow-inner-[5px_5px_10px_#d9dde3,_-5px_-5px_10px_#ffffff] cursor-pointer group"
      onClick={onClick}
    >
      <div className="mb-4">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-700">{title}</p>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
