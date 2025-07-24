
import { useEffect, useRef } from 'react';
import { Droplets, Shield, Filter, Thermometer, Zap, Wrench } from 'lucide-react';
import { useResponsive, useContainer } from '@/hooks/use-responsive';

const services = [
  {
    title: "Sistemas de Drenagem",
    description: "Soluções completas para drenagem urbana, predial e industrial com materiais de alta qualidade.",
    icon: Droplets,
    delay: 0
  },
  {
    title: "Impermeabilização",
    description: "Materiais e sistemas para impermeabilização de lajes, fundações e estruturas diversas.",
    icon: Shield,
    delay: 100
  },
  {
    title: "Filtragem de Água",
    description: "Sistemas avançados de filtragem para tratamento e purificação de água potável e industrial.",
    icon: Filter,
    delay: 200
  },
  {
    title: "Aquecimento de Água",
    description: "Equipamentos e sistemas para aquecimento eficiente de água em residências e empresas.",
    icon: Thermometer,
    delay: 300
  },
  {
    title: "Circulação de Água",
    description: "Bombas e sistemas de circulação para piscinas, reservatórios e sistemas hidráulicos.",
    icon: Zap,
    delay: 400
  },
  {
    title: "Consultoria Técnica",
    description: "Orientação especializada para escolha e instalação dos melhores materiais para seu projeto.",
    icon: Wrench,
    delay: 500
  }
];

const AcquaServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet, getGridCols } = useContainer();
  const { containerClass, spacing } = useContainer();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          const cards = document.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fadeIn');
              card.classList.remove('opacity-0');
            }, index * 100);
          });
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCardClasses = () => {
    const cols = getGridCols(3);
    const gridClass = `grid-cols-1 ${cols >= 2 ? 'md:grid-cols-2' : ''} ${cols >= 3 ? 'lg:grid-cols-3' : ''}`;
    return gridClass;
  };

  const getTextSizes = () => {
    if (isMobile) {
      return {
        badge: 'text-xs px-3 py-1',
        title: 'text-2xl sm:text-3xl',
        subtitle: 'text-base',
        cardTitle: 'text-lg',
        cardText: 'text-sm'
      };
    }
    if (isTablet) {
      return {
        badge: 'text-sm px-4 py-2',
        title: 'text-3xl md:text-4xl',
        subtitle: 'text-lg',
        cardTitle: 'text-xl',
        cardText: 'text-base'
      };
    }
    return {
      badge: 'text-sm px-4 py-2',
      title: 'text-4xl lg:text-5xl xl:text-6xl',
      subtitle: 'text-lg lg:text-xl xl:text-2xl',
      cardTitle: 'text-xl',
      cardText: 'text-base'
    };
  };

  const textSizes = getTextSizes();

  return (
    <section className={`acqua-gradient w-full ${spacing.section}`} id="services">
      <div className={`${containerClass} mx-auto`} ref={sectionRef}>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className={`inline-block rounded-full font-medium bg-acqua-500 text-white mb-4 ${textSizes.badge}`}>
            Nossos Serviços
          </span>
          <h2 className={`font-bold mb-4 ${textSizes.title}`}>
            Soluções completas em <span className="text-gradient">sistemas de água</span>
          </h2>
          <p className={`text-acqua-700 max-w-3xl mx-auto ${textSizes.subtitle}`}>
            Oferecemos uma ampla gama de materiais técnicos e serviços especializados 
            para atender todas as necessidades da sua obra.
          </p>
        </div>

        <div className={`grid ${getCardClasses()} ${spacing.gap} mb-10`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card transition-all duration-300 opacity-0 bg-white border border-acqua-200 hover:border-acqua-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-start rounded-xl ${
                isMobile ? 'p-4' : 'p-6'
              }`}
            >
              <div className={`rounded-xl bg-gradient-to-br from-acqua-100 to-acqua-200 flex items-center justify-center mb-5 ${
                isMobile ? 'w-12 h-12' : 'w-14 h-14'
              }`}>
                <service.icon className={`text-acqua-700 ${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
              </div>
              <h3 className={`font-bold text-acqua-900 mb-3 ${textSizes.cardTitle}`}>{service.title}</h3>
              <p className={`text-acqua-600 mb-4 flex-grow ${textSizes.cardText}`}>{service.description}</p>
              <button 
                onClick={scrollToContact}
                className={`text-acqua-700 hover:text-acqua-800 font-medium transition-colors ${isMobile ? 'text-sm' : 'text-base'}`}
              >
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={scrollToContact}
            className={`bg-acqua-600 text-white hover:bg-acqua-700 transition-colors rounded-full font-medium ${
              isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'
            }`}
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcquaServicesSection;
