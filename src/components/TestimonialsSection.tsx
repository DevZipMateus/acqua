
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "João Mendes",
    position: "Proprietário - Casa Residencial",
    quote: "A ForteBase construiu nossa casa dos sonhos! A qualidade dos materiais e o profissionalismo da equipe superaram nossas expectativas. Recomendo sem hesitar!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Maria Santos",
    position: "Empresária - Reforma Comercial",
    quote: "Reforma do nosso escritório foi feita com muito cuidado e dentro do prazo. A equipe é pontual, organizada e sempre mantém o cliente informado sobre o progresso.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    position: "Diretor - Galpão Industrial",
    quote: "Construíram nosso galpão industrial com excelência técnica. O projeto foi executado conforme especificado e a obra entregue no prazo combinado. Parceria de confiança!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding construction-gradient" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 opacity-0 animate-fadeIn">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
            Depoimentos
          </span>
          <h2 className="heading-lg mb-4 sm:mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="subtitle">
            A satisfação dos nossos clientes é nosso maior patrimônio.
            Veja o que eles falam sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-auto min-h-[300px] sm:min-h-[350px] lg:h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col lg:flex-row gap-6 sm:gap-8 items-center justify-center transition-all duration-700 ease-in-out p-4 sm:p-6 lg:p-8 glass-card rounded-2xl ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: '400ms' }}
              >
                <div className="flex-shrink-0 order-1 lg:order-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left order-2 lg:order-none">
                  <Quote className="text-blue-300 mb-2 w-8 h-8 sm:w-10 sm:h-10 mx-auto lg:mx-0" />
                  <p className="text-base sm:text-lg text-construction-700 italic mb-3 sm:mb-4 leading-relaxed">{testimonial.quote}</p>
                  <h4 className="text-lg sm:text-xl font-bold text-construction-900">{testimonial.name}</h4>
                  <p className="text-sm sm:text-base text-blue-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-500 w-6 sm:w-8' : 'bg-construction-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
