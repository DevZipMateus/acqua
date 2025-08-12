
import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useResponsive, useContainer } from '@/hooks/use-responsive';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet, isUltraWide } = useResponsive();
  const { containerClass, spacing } = useContainer();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTextSizes = () => {
    if (isMobile) {
      return {
        badge: 'text-xs px-3 py-1',
        title: 'text-2xl leading-tight',
        subtitle: 'text-sm leading-relaxed',
        stats: 'text-lg',
        statsLabel: 'text-xs'
      };
    }
    if (isTablet) {
      return {
        badge: 'text-sm px-4 py-2',
        title: 'text-3xl md:text-4xl leading-tight',
        subtitle: 'text-base md:text-lg',
        stats: 'text-xl md:text-2xl',
        statsLabel: 'text-sm'
      };
    }
    return {
      badge: 'text-sm px-4 py-2',
      title: 'text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl',
      subtitle: 'text-xl lg:text-2xl xl:text-3xl',
      stats: 'text-3xl lg:text-4xl xl:text-5xl',
      statsLabel: 'text-base'
    };
  };

  const textSizes = getTextSizes();

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden acqua-gradient ${spacing.section}`} ref={sectionRef}>
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9b77b80c-077b-4126-9e45-17e877157862.png" 
          alt="Warehouse with organized materials" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-acqua-900/50 to-acqua-600/30"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 ${containerClass} mx-auto text-center`}>
        <div className={`${isUltraWide ? 'max-w-6xl' : isMobile ? 'max-w-sm' : 'max-w-4xl'} mx-auto px-2`}>
          <span className={`inline-block rounded-full font-medium bg-acqua-500 text-white mb-4 opacity-0 animate-fadeIn ${textSizes.badge}`}>
            Materiais Técnicos para Construção Civil
          </span>
          
          <h1 className={`font-bold text-white mb-4 leading-tight opacity-0 animate-fadeIn ${textSizes.title}`}>
            Soluções em <span className="text-gradient">Vedações</span>
          </h1>
          
          <p className={`text-acqua-100 mb-6 ${isMobile ? 'max-w-xs' : 'max-w-3xl'} mx-auto leading-relaxed opacity-0 animate-fadeIn ${textSizes.subtitle}`}>
            Especialistas em drenagem, impermeabilização, filtragem, aquecimento e circulação de água. 
            Materiais de alta qualidade para seu projeto.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-6 opacity-0 animate-fadeIn`}>
            <div className="text-center">
              <div className={`font-bold text-white mb-1 ${textSizes.stats}`}>500+</div>
              <div className={`text-acqua-200 ${textSizes.statsLabel}`}>Projetos</div>
            </div>
            <div className="text-center">
              <div className={`font-bold text-white mb-1 ${textSizes.stats}`}>98%</div>
              <div className={`text-acqua-200 ${textSizes.statsLabel}`}>Satisfação</div>
            </div>
            <div className="text-center">
              <div className={`font-bold text-white mb-1 ${textSizes.stats}`}>24h</div>
              <div className={`text-acqua-200 ${textSizes.statsLabel}`}>Atendimento</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col space-y-3 justify-center items-center opacity-0 animate-fadeIn mb-6`}>
            <Button 
              onClick={scrollToContact}
              size={isMobile ? "sm" : "lg"}
              className={`bg-acqua-600 hover:bg-acqua-700 text-white font-semibold rounded-full ${
                isMobile ? 'px-4 py-2 text-sm w-full max-w-xs' : 'px-8 py-4 text-lg'
              }`}
            >
              Solicitar Orçamento
              <ArrowRight className={`ml-2 ${isMobile ? 'w-3 h-3' : 'w-5 h-5'}`} />
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size={isMobile ? "sm" : "lg"}
              className={`border-2 border-white text-white hover:bg-white hover:text-acqua-900 font-semibold rounded-full ${
                isMobile ? 'px-4 py-2 text-sm w-full max-w-xs' : 'px-8 py-4 text-lg'
              }`}
            >
              <Play className={`mr-2 ${isMobile ? 'w-3 h-3' : 'w-5 h-5'}`} />
              {isMobile ? 'Serviços' : 'Conheça Nossos Serviços'}
            </Button>
          </div>

          {/* Contact Info */}
          <div className="opacity-0 animate-fadeIn">
            <p className={`text-acqua-200 mb-3 ${isMobile ? 'text-xs' : 'text-base'}`}>Entre em contato:</p>
            <div className={`flex flex-col space-y-2 justify-center items-center text-white ${isMobile ? 'text-xs' : 'text-base'}`}>
              <a 
                href="tel:+5519999300066" 
                className="flex items-center hover:text-acqua-300 transition-colors"
              >
                📞 (19) 99930-0066
              </a>
              <a 
                href="mailto:comercial@acquaambiental.com.br" 
                className="flex items-center hover:text-acqua-300 transition-colors"
              >
                ✉️ comercial@acquaambiental.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeIn">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
