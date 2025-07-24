
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useResponsive } from '@/hooks/use-responsive';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useResponsive();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getButtonSize = () => {
    return isMobile ? 'w-12 h-12' : 'w-14 h-14';
  };

  const getIconSize = () => {
    return isMobile ? 'w-5 h-5' : 'w-6 h-6';
  };

  const getPopupWidth = () => {
    return isMobile ? 'w-64' : 'w-72';
  };

  const getBottomPosition = () => {
    return isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6';
  };

  return (
    <div className={`fixed z-50 ${getBottomPosition()}`}>
      {isOpen && (
        <div className={`bg-white rounded-lg shadow-lg p-4 mb-4 animate-fadeIn ${getPopupWidth()}`}>
          <div className="flex flex-col space-y-3">
            <a 
              href="https://wa.me/5519999300066?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Acqua%20Ambiental" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center text-gray-700 hover:text-acqua-600 transition-colors ${isMobile ? 'text-sm' : 'text-base'}`}
            >
              <span className={`rounded-full bg-green-500 flex items-center justify-center mr-2 ${isMobile ? 'w-7 h-7' : 'w-8 h-8'}`}>
                <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
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
              className={`flex items-center text-gray-700 hover:text-acqua-600 transition-colors ${isMobile ? 'text-sm' : 'text-base'}`}
            >
              <span className={`rounded-full bg-acqua-600 flex items-center justify-center mr-2 ${isMobile ? 'w-7 h-7' : 'w-8 h-8'}`}>
                <MessageCircle className={`text-white ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
              </span>
              Enviar mensagem
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`${getButtonSize()} rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
          isOpen ? 'bg-gray-700 rotate-45' : 'bg-green-500 hover:bg-green-600'
        }`}
        style={{
          boxShadow: isOpen ? 'none' : '0 0 0 rgba(34, 197, 94, 0.4)',
          animation: isOpen ? 'none' : 'pulse 2s infinite'
        }}
      >
        {isOpen ? (
          <X className={getIconSize()} />
        ) : (
          <img 
            src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" 
            alt="Contact" 
            className={getIconSize()}
          />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
