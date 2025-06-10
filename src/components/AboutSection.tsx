
import { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const advantages = [
  "Mais de 15 anos de experiência",
  "Equipe técnica qualificada", 
  "Materiais de primeira qualidade",
  "Cumprimento de prazos",
  "Projetos personalizados",
  "Suporte pós-obra"
];

const stats = [
  { icon: Award, number: "200+", label: "Projetos Concluídos" },
  { icon: Users, number: "50+", label: "Profissionais" },
  { icon: Clock, number: "15+", label: "Anos de Experiência" }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.animate-element');
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fadeIn');
          }, i * 200);
        });
      }
    }, {
      threshold: 0.1
    });

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
    <section className="section-padding construction-gradient" id="about">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="opacity-0 animate-element">
              <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-yellow-500 text-construction-900 mb-4">
                Sobre Nós
              </span>
              <h2 className="heading-lg mb-4">
                Construindo o futuro com <span className="text-gradient">qualidade e confiança</span>
              </h2>
              <p className="text-construction-600 mb-6 text-lg">
                A Construtora ForteBase é uma empresa especializada em construção civil com mais de 15 anos
                de experiência no mercado. Realizamos projetos residenciais, comerciais e industriais
                com excelência e comprometimento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start opacity-0 animate-element">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="ml-3 text-construction-700">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 opacity-0 animate-element">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-construction-800">{stat.number}</div>
                  <div className="text-sm text-construction-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-element order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-200 rounded-lg opacity-50"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-100 rounded-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe de construção" 
                  className="w-full h-auto object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
