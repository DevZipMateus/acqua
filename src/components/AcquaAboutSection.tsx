
import { useEffect, useRef } from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    title: "Expertise Técnica",
    description: "Equipe especializada em materiais técnicos para construção civil",
    icon: Users,
    delay: 0
  },
  {
    title: "Qualidade Garantida",
    description: "Produtos de alta qualidade de fornecedores confiáveis",
    icon: Award,
    delay: 100
  },
  {
    title: "Atendimento Ágil",
    description: "Rapidez na entrega e no atendimento aos nossos clientes",
    icon: Clock,
    delay: 200
  },
  {
    title: "Confiabilidade",
    description: "Soluções seguras e duradouras para seus projetos",
    icon: Shield,
    delay: 300
  }
];

const AcquaAboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          const cards = document.querySelectorAll('.about-card');
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

  return (
    <section className="py-16 bg-white w-full" id="about">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-100 text-acqua-700 mb-4">
            Sobre Nós
          </span>
          <h2 className="heading-lg mb-4">
            Especialistas em <span className="text-gradient">soluções ambientais</span>
          </h2>
          <p className="subtitle">
            A Acqua Ambiental é especializada na revenda de materiais técnicos para construção civil, 
            oferecendo soluções completas em drenagem, impermeabilização e sistemas de água.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="about-card p-6 rounded-xl transition-all duration-300 opacity-0 bg-acqua-50 border border-acqua-100 hover:border-acqua-300 hover:shadow-lg hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-acqua-500 to-acqua-600 flex items-center justify-center mb-5 mx-auto">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-acqua-900 mb-3">{feature.title}</h3>
              <p className="text-acqua-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-acqua-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">Nossa Missão</h3>
              <p className="text-acqua-700 mb-6 leading-relaxed">
                Fornecer materiais técnicos de alta qualidade para construção civil, 
                especializando-nos em sistemas de drenagem, impermeabilização e soluções 
                completas para filtragem, circulação e aquecimento de água.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-acqua-500 rounded-full mr-3"></div>
                  <span className="text-acqua-800">Materiais de alta qualidade</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-acqua-500 rounded-full mr-3"></div>
                  <span className="text-acqua-800">Atendimento especializado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-acqua-500 rounded-full mr-3"></div>
                  <span className="text-acqua-800">Soluções personalizadas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sistemas de água e drenagem" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-acqua-900 via-transparent to-transparent rounded-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquaAboutSection;
