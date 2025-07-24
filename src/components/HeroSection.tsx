
import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden acqua-gradient" ref={sectionRef}>
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Sistemas de água e drenagem" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-acqua-900/50 to-acqua-600/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-500 text-white mb-6 opacity-0 animate-fadeIn">
            Materiais Técnicos para Construção Civil
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fadeIn">
            Soluções em <span className="text-gradient">Sistemas de Água</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-acqua-100 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn">
            Especialistas em drenagem, impermeabilização, filtragem, aquecimento e circulação de água. 
            Materiais de alta qualidade para seu projeto.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10 opacity-0 animate-fadeIn">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-acqua-200 text-sm md:text-base">Projetos Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-acqua-200 text-sm md:text-base">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-acqua-200 text-sm md:text-base">Atendimento</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeIn">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-acqua-600 hover:bg-acqua-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-acqua-900 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Play className="mr-2 w-5 h-5" />
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 opacity-0 animate-fadeIn">
            <p className="text-acqua-200 mb-4">Entre em contato agora mesmo:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
              <a 
                href="tel:+5519999300066" 
                className="flex items-center hover:text-acqua-300 transition-colors"
              >
                📞 (19) 99930-0066
              </a>
              <span className="hidden sm:block text-acqua-400">|</span>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeIn">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
