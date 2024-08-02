import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, bgColor, textColor }) => {
  return (
    <div className="flex items-center  space-x-4 p-4">
      <div className={`p-3 rounded-full ${bgColor}`}>
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <div>
        <h3 className={`text-lg font-bold ${textColor}`}>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
