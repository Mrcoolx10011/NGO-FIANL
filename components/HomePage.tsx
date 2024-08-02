import React from 'react';
import ProgramCard from './ProgramCardProps';
import icon from '../public/Book3.png'

const programs = [
  {
    title: 'EDUCATION',
    description: 'Education, nutrition and holistic development of children',
    icon: '/Book3.png', // Replace with your icon paths
    bgColor: 'bg-yellow-200',
    textColor: 'text-yellow-600',
  },
  {
    title: 'HEALTHCARE',
    description: 'Taking healthcare services to doorsteps of hard to reach communities',
    icon: '/wow.png',
    bgColor: 'bg-purple-200',
    textColor: 'text-purple-600',
  },
  {
    title: 'WOMEN EMPOWERMENT',
    description: 'Empowering adolescent girls & women through community engagement',
    icon: '/punch.png',
    bgColor: 'bg-teal-200',
    textColor: 'text-teal-600',
  },
  {
    title: 'LIVELIHOOD',
    description: 'Skill training and placement support for underprivileged youth',
    icon: '/form.png',
    bgColor: 'bg-orange-200',
    textColor: 'text-orange-600',
  },
  {
    title: 'EMPOWERING GRASSROOTS',
    description: 'Helping community-based organizations become locally sustainable',
    icon: '/parachute.png',
    bgColor: 'bg-green-200',
    textColor: 'text-green-600',
  },
  {
    title: 'DISASTER RESPONSE',
    description: 'Reach out and respond to the needs of disaster-affected people',
    icon: '/prey.png',
    bgColor: 'bg-red-200',
    textColor: 'text-red-600',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 ml-10">
      <h1 className="text-3xl font-bold text-center mb-8">OUR PROGRAMMES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            icon={program.icon}
            bgColor={program.bgColor}
            textColor={program.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
