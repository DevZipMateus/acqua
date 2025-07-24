
import { useEffect, useRef } from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Residencial",
    description: "Ideal para projetos residenciais pequenos e médios",
    price: "Sob consulta",
    features: [
      "Materiais para drenagem residencial",
      "Sistemas de impermeabilização",
      "Filtragem básica de água",
      "Consultoria técnica inclusa",
      "Garantia de 12 meses"
    ],
    popular: false
  },
  {
    name: "Comercial",
    description: "Perfeito para edifícios comerciais e empresas",
    price: "Sob consulta",
    features: [
      "Sistemas completos de drenagem",
      "Impermeabilização profissional",
      "Filtragem e purificação avançada",
      "Sistemas de aquecimento",
      "Consultoria especializada",
      "Garantia de 24 meses",
      "Suporte técnico prioritário"
    ],
    popular: true
  },
  {
    name: "Industrial",
    description: "Soluções robustas para grandes projetos industriais",
    price: "Sob consulta",
    features: [
      "Drenagem industrial de alta capacidade",
      "Impermeabilização especializada",
      "Sistemas de tratamento de água",
      "Equipamentos de grande porte",
      "Projeto técnico personalizado",
      "Garantia estendida",
      "Manutenção preventiva"
    ],
    popular: false
  }
];

const AcquaPlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          const cards = document.querySelectorAll('.plan-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fadeIn');
              card.classList.remove('opacity-0');
            }, index * 200);
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
    <section className="py-16 bg-white w-full" id="plans">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-100 text-acqua-700 mb-4">
            Nossos Planos
          </span>
          <h2 className="heading-lg mb-4">
            Escolha o plano ideal para <span className="text-gradient">seu projeto</span>
          </h2>
          <p className="subtitle">
            Oferecemos soluções personalizadas para diferentes tipos de projetos, 
            desde residenciais até grandes empreendimentos industriais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card p-8 rounded-2xl transition-all duration-300 opacity-0 relative ${
                plan.popular 
                  ? 'bg-acqua-600 text-white border-2 border-acqua-500 transform scale-105' 
                  : 'bg-white border border-acqua-200 hover:border-acqua-300'
              } hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-acqua-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-acqua-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-acqua-100' : 'text-acqua-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-acqua-900'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-acqua-200' : 'text-acqua-500'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-acqua-100' : 'text-acqua-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-white text-acqua-600 hover:bg-acqua-50' 
                    : 'bg-acqua-600 text-white hover:bg-acqua-700'
                }`}
              >
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-acqua-600 mb-4">
            Precisa de uma solução personalizada? Entre em contato conosco!
          </p>
          <button 
            onClick={scrollToContact}
            className="button-secondary px-8 py-3"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcquaPlansSection;
