
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useResponsive, useContainer } from '@/hooks/use-responsive';

const AcquaLocationSection = () => {
  const { isMobile, isTablet } = useResponsive();
  const { containerClass, spacing } = useContainer();

  const getTextSizes = () => {
    if (isMobile) {
      return {
        badge: 'text-xs px-3 py-1',
        title: 'text-xl leading-tight',
        subtitle: 'text-sm leading-relaxed',
        cardTitle: 'text-base',
        cardText: 'text-sm',
        contactTitle: 'text-sm'
      };
    }
    if (isTablet) {
      return {
        badge: 'text-sm px-4 py-2',
        title: 'text-2xl md:text-3xl',
        subtitle: 'text-base',
        cardTitle: 'text-lg',
        cardText: 'text-base',
        contactTitle: 'text-base'
      };
    }
    return {
      badge: 'text-sm px-4 py-2',
      title: 'text-4xl lg:text-5xl',
      subtitle: 'text-lg lg:text-xl',
      cardTitle: 'text-xl',
      cardText: 'text-base',
      contactTitle: 'text-lg'
    };
  };

  const textSizes = getTextSizes();

  return (
    <section className={`bg-white w-full ${spacing.section}`} id="location">
      <div className={`${containerClass} mx-auto`}>
        <div className={`text-center ${isMobile ? 'max-w-sm' : 'max-w-3xl'} mx-auto mb-8`}>
          <span className={`inline-block rounded-full font-medium bg-acqua-100 text-acqua-700 mb-4 ${textSizes.badge}`}>
            Nossa Localização
          </span>
          <h2 className={`font-bold mb-4 ${textSizes.title}`}>
            Visite nossa <span className="text-gradient">loja física</span>
          </h2>
          <p className={`text-acqua-700 ${isMobile ? 'max-w-xs px-2' : 'max-w-3xl'} mx-auto ${textSizes.subtitle}`}>
            Estamos localizados em Vinhedo-SP, prontos para atender você com o melhor em materiais técnicos.
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'lg:grid-cols-2 gap-8'} items-start`}>
          <div className={`bg-acqua-50 rounded-2xl ${isMobile ? 'p-4 mx-2' : 'p-8'}`}>
            <h3 className={`font-bold text-acqua-900 mb-6 ${textSizes.cardTitle}`}>Informações de Contato</h3>
            
            <div className={`space-y-${isMobile ? '4' : '6'}`}>
              <div className="flex items-start">
                <div className={`rounded-xl bg-acqua-600 flex items-center justify-center mr-3 flex-shrink-0 ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  <MapPin className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-acqua-900 mb-1 ${textSizes.contactTitle}`}>Endereço</h4>
                  <p className={`text-acqua-700 ${textSizes.cardText}`}>
                    Rua Galcio Sanches Ribeiro, 80<br />
                    Vinhedo - SP<br />
                    CEP: 13286-404
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`rounded-xl bg-acqua-600 flex items-center justify-center mr-3 flex-shrink-0 ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  <Phone className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-acqua-900 mb-1 ${textSizes.contactTitle}`}>Telefone</h4>
                  <a 
                    href="tel:+5519999300066" 
                    className={`text-acqua-700 hover:text-acqua-600 transition-colors ${textSizes.cardText}`}
                  >
                    (19) 99930-0066
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`rounded-xl bg-acqua-600 flex items-center justify-center mr-3 flex-shrink-0 ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  <Mail className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-acqua-900 mb-1 ${textSizes.contactTitle}`}>E-mail</h4>
                  <a 
                    href="mailto:comercial@acquaambiental.com.br" 
                    className={`text-acqua-700 hover:text-acqua-600 transition-colors ${textSizes.cardText} break-all`}
                  >
                    comercial@acquaambiental.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`rounded-xl bg-acqua-600 flex items-center justify-center mr-3 flex-shrink-0 ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  <Clock className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-acqua-900 mb-1 ${textSizes.contactTitle}`}>Horário</h4>
                  <p className={`text-acqua-700 ${textSizes.cardText}`}>
                    Segunda a Sexta: 08:00 às 18:00<br />
                    Sábados: 08:00 às 12:00<br />
                    Domingos: Fechado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="https://maps.app.goo.gl/FZr6ji3MA3YnrF4i9" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-acqua-600 text-white hover:bg-acqua-700 transition-colors rounded-full font-medium block text-center ${
                  isMobile ? 'px-4 py-3 text-sm' : 'px-6 py-4 text-base'
                }`}
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className={`bg-acqua-50 rounded-2xl overflow-hidden ${isMobile ? 'mx-2' : ''}`}>
            <div className={`w-full ${isMobile ? 'h-64' : 'h-96'}`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2345677!2d-46.975!3d-23.025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzMwLjAiUyA0NsKwNTgnMzAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa da Acqua Ambiental"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquaLocationSection;
