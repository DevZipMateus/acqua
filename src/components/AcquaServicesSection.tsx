
import { useEffect, useRef } from 'react';
import { Droplets, Shield, Filter, Thermometer, Zap, Wrench } from 'lucide-react';

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

  return (
    <section className="py-16 acqua-gradient w-full" id="services">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-500 text-white mb-4">
            Nossos Serviços
          </span>
          <h2 className="heading-lg mb-4">
            Soluções completas em <span className="text-gradient">sistemas de água</span>
          </h2>
          <p className="subtitle">
            Oferecemos uma ampla gama de materiais técnicos e serviços especializados 
            para atender todas as necessidades da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card p-6 rounded-xl transition-all duration-300 opacity-0 bg-white border border-acqua-200 hover:border-acqua-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-acqua-100 to-acqua-200 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-acqua-700" />
              </div>
              <h3 className="text-xl font-bold text-acqua-900 mb-3">{service.title}</h3>
              <p className="text-acqua-600 mb-4 flex-grow">{service.description}</p>
              <button 
                onClick={scrollToContact}
                className="text-acqua-700 hover:text-acqua-800 font-medium transition-colors"
              >
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={scrollToContact}
            className="button-primary px-8 py-4 rounded-full"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcquaServicesSection;
