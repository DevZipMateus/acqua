
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <a 
              href="https://wa.me/5519999300066?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Acqua%20Ambiental" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-acqua-600 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-5 h-5" />
              </span>
              WhatsApp
            </a>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }
              }}
              className="flex items-center text-gray-700 hover:text-acqua-600 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-acqua-600 flex items-center justify-center mr-2">
                <MessageCircle className="w-4 h-4 text-white" />
              </span>
              Enviar mensagem
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all animate-pulse hover:animate-none ${
          isOpen ? 'bg-gray-700 rotate-45' : 'bg-green-500 hover:bg-green-600'
        }`}
        style={{
          boxShadow: isOpen ? 'none' : '0 0 0 rgba(34, 197, 94, 0.4)',
          animation: isOpen ? 'none' : 'pulse 2s infinite'
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <img 
            src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" 
            alt="Contact" 
            className="w-6 h-6"
          />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
