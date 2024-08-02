
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const WhatsAppButton = ({ product }) => {
    const message = `https://wa.me/7984604116?text=I'm interested in buying ${product.title} (Product ID: ${product.id}).`;
  
    return (
      <a
        href={message}
        className="btn w-auto text-lg border border-green-500 hover:border-green-500 border-1 font-normal bg-green-500 text-white hover:bg-white hover:scale-110 hover:text-green-500 transition-all uppercase ease-in max-[500px]:w-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 w-8 h-8" />
        Buy Now
      </a>
    );
  };
  
  export default WhatsAppButton;