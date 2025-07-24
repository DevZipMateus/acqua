import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    company: "Construtora Silva & Associados",
    content: "A Acqua Ambiental forneceu todos os materiais para nosso projeto de drenagem. Excelente qualidade e atendimento impecável.",
    rating: 5
  },
  {
    name: "Maria Santos", 
    company: "Arquiteta Autônoma",
    content: "Materiais de primeira qualidade para impermeabilização. O projeto ficou perfeito e os clientes ficaram muito satisfeitos.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    company: "Engenheiro Civil", 
    content: "Sistemas de filtragem de água excepcionais. A consultoria técnica da equipe foi fundamental para o sucesso do projeto.",
    rating: 5
  },
  {
    name: "Ana Costa",
    company: "Proprietária Residencial",
    content: "Instalação do sistema de aquecimento de água perfeita. Equipe muito profissional e materiais de alta qualidade.",
    rating: 5
  }
];

const AcquaTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 acqua-gradient w-full" id="testimonials">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-500 text-white mb-4">
            Depoimentos
          </span>
          <h2 className="heading-lg mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="subtitle">
            Veja os depoimentos de quem já confia na qualidade dos nossos materiais e serviços.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <Quote className="w-8 h-8 text-acqua-300 mb-4 mx-auto" />
              <p className="text-lg text-acqua-800 mb-6 leading-relaxed">
                "{testimonials[currentSlide].content}"
              </p>
              
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div>
                <h4 className="font-bold text-acqua-900">{testimonials[currentSlide].name}</h4>
                <p className="text-acqua-600">{testimonials[currentSlide].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-acqua-600 text-white rounded-full flex items-center justify-center hover:bg-acqua-700 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-acqua-600 text-white rounded-full flex items-center justify-center hover:bg-acqua-700 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-acqua-600' : 'bg-acqua-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquaTestimonialsSection;
