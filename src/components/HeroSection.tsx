
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScreenSize } from '@/hooks/use-mobile';

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Soluções completas em sistemas de água",
    subtitle: "Especialistas em drenagem, impermeabilização e sistemas de água para construção civil",
    cta: "Solicitar Orçamento"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Materiais técnicos de qualidade",
    subtitle: "Revenda de materiais tecnológicos para construção civil com garantia de qualidade",
    cta: "Ver Produtos"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Filtragem e aquecimento de água",
    subtitle: "Sistemas completos de filtragem, circulação e aquecimento de água para todos os tipos de projeto",
    cta: "Nossos Serviços"
  }
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden h-screen min-h-[600px] max-h-screen w-full" id="hero">
      {/* Carousel */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-acqua-900 bg-opacity-60"></div>
            </div>
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <span className={`inline-block rounded-full font-medium bg-acqua-500 text-white opacity-0 ${
                isVisible ? 'animate-fadeIn' : ''
              } ${
                isMobile 
                  ? 'py-1.5 px-3 text-xs mb-4' 
                  : 'py-2 px-4 text-sm mb-6'
              }`}>
                Acqua Ambiental
              </span>
              <h1 className={`font-bold leading-tight opacity-0 ${
                isVisible ? 'animate-slideDown' : ''
              } ${
                isMobile 
                  ? 'text-2xl mb-4' 
                  : 'text-4xl lg:text-5xl xl:text-6xl mb-6'
              }`}>
                {heroSlides[currentSlide].title}
              </h1>
              <p className={`leading-relaxed mx-auto opacity-0 ${
                isVisible ? 'animate-slideDown delay-200' : ''
              } ${
                isMobile 
                  ? 'text-base mb-6 max-w-lg' 
                  : 'text-xl mb-8 max-w-2xl'
              }`}>
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className={`flex justify-center opacity-0 ${
                isVisible ? 'animate-slideDown delay-300' : ''
              } ${
                isMobile 
                  ? 'flex-col gap-3' 
                  : 'flex-col sm:flex-row gap-4'
              }`}>
                <button onClick={scrollToContact} className="button-accent group px-6 py-3">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button onClick={scrollToServices} className="button-secondary px-6 py-3">
                  Nossos serviços
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all z-20 ${
            isMobile 
              ? 'left-2 w-10 h-10' 
              : 'left-4 w-12 h-12'
          }`}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all z-20 ${
            isMobile 
              ? 'right-2 w-10 h-10' 
              : 'right-4 w-12 h-12'
          }`}
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-acqua-500 w-6 sm:w-8 h-2 sm:h-3'
                  : 'bg-white bg-opacity-50 w-2 h-2 sm:w-3 sm:h-3'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
