import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsappButton.css';

export default function WhatsappButton() {
  const handleWhatsappClick = () => {
    const phoneNumber = '919876543210'; 
    const message = 'Hi, I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      className="whatsapp-button"
      onClick={handleWhatsappClick}
      aria-label="Open WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}
