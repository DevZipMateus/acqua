import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isMobile = useMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['hero', 'services', 'about', 'plans', 'testimonials', 'location', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const getLinkColor = (section: string) => {
    if (activeSection === section) {
      return 'text-acqua-500';
    }
    return `${isScrolled ? 'text-acqua-700' : 'text-white'} hover:text-acqua-400`;
  };
  
  const getMenuButtonColor = () => {
    return isScrolled ? 'text-acqua-700' : 'text-white';
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3"
          >
            <img 
              src="/lovable-uploads/1efb30e4-9827-4086-8d02-9406b8f1f8b4.png" 
              alt="Acqua Ambiental" 
              className="h-12 w-auto"
            />
          </button>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className={`text-sm font-medium ${getLinkColor('hero')} transition-colors duration-300`}
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className={`text-sm font-medium ${getLinkColor('about')} transition-colors duration-300`}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className={`text-sm font-medium ${getLinkColor('services')} transition-colors duration-300`}
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('plans')} 
                  className={`text-sm font-medium ${getLinkColor('plans')} transition-colors duration-300`}
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className={`text-sm font-medium ${getLinkColor('testimonials')} transition-colors duration-300`}
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')} 
                  className={`text-sm font-medium ${getLinkColor('location')} transition-colors duration-300`}
                >
                  Localização
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className={`text-sm font-medium ${getLinkColor('contact')} transition-colors duration-300`}
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
          
          <button 
            className={`block md:hidden ${getMenuButtonColor()} hover:text-acqua-400 transition-colors`} 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white z-50 pt-20">
          <div className="container mx-auto px-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('plans')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Planos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('location')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Localização
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-lg font-medium text-acqua-700 hover:text-acqua-500 block py-2 transition-colors w-full text-left"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </nav>
            
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-semibold text-acqua-600 mb-4">Contato</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:comercial@acquaambiental.com.br" className="flex items-center text-acqua-700 hover:text-acqua-500 transition-colors">
                  <Mail className="w-4 h-4 mr-2 text-acqua-500" />
                  comercial@acquaambiental.com.br
                </a>
                <a href="tel:+5519999300066" className="flex items-center text-acqua-700 hover:text-acqua-500 transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-acqua-500" />
                  (19) 99930-0066
                </a>
              </div>
            </div>
            
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 p-2 rounded-full bg-acqua-100 text-acqua-600 hover:bg-acqua-200 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
