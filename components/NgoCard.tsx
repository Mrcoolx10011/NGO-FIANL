import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

interface Contact {
  type: string;
  details: string;
  phoneNumber: string;

}

interface Ngo {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
  contact: Contact;
}

interface NgoCardProps {
  ngo: Ngo;
}

const NgoCard: React.FC<NgoCardProps> = ({ ngo }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative flex flex-col sm:flex-row justify-center p-6 border rounded-lg shadow-lg w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 transform transition-transform duration-300 ${hover ? 'scale-105' : ''
        }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <img
          src={ngo.logoUrl}
          alt={`${ngo.name} Logo`}
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <div className={`flex flex-col justify-center items-center sm:items-start w-full text-center sm:text-left transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-100'
        }`}>
        <h2 className="font-bold text-4xl text-cyan-700 hover:text-indigo-800">{ngo.name}</h2>
        <p className="mt-2 text-lg text-gray-800 font-light hover:text-gray-600">{ngo.description}</p>
        <p className="text-gray-700 mt-2 text-lg font-medium hover:text-gray-500">
          <MdOutlineMailOutline className="inline-block mr-2" />
          {ngo.contact.type}: {ngo.contact.details}
        </p>
        <div className="flex items-center text-gray-700 text-lg font-medium mt-2 hover:text-gray-500">
          <FaPhoneAlt className="mr-2" />
          <span>Phone: {ngo.contact.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
