
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScreenSize } from '@/hooks/use-mobile';

const ContactForm = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white" id="contact">
      <div className="container mx-auto responsive-padding">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <span className="inline-block py-1.5 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium bg-yellow-500 text-construction-900 mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-construction-800 tracking-tight mb-3 sm:mb-4 lg:mb-6">
            Vamos construir seu projeto juntos
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-construction-600 max-w-3xl px-2 sm:px-0">
            Entre em contato conosco para solicitar um orçamento gratuito ou tirar suas dúvidas.
            Nossa equipe está pronta para atender você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 animate-slideInRight">
            <h3 className={`font-bold text-construction-900 mb-4 sm:mb-6 text-center ${
              isMobile ? 'text-lg' : 'text-lg sm:text-xl md:text-2xl'
            }`}>
              Nossos Canais de Atendimento
            </h3>
            
            <div className={`grid gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8 ${
              isMobile 
                ? 'grid-cols-1' 
                : isTablet 
                  ? 'grid-cols-2' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              <div className="text-center">
                <div className={`rounded-full bg-blue-100 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
                }`}>
                  <Phone className={`text-blue-600 ${
                    isMobile ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`} />
                </div>
                <h4 className={`font-semibold text-construction-900 mb-1 sm:mb-2 ${
                  isMobile ? 'text-base' : 'text-base sm:text-lg md:text-xl'
                }`}>
                  Telefone
                </h4>
                <p className={`text-construction-600 ${
                  isMobile ? 'text-sm' : 'text-sm sm:text-base'
                }`}>
                  (11) 99999-9999
                </p>
                <p className={`text-construction-600 ${
                  isMobile ? 'text-sm' : 'text-sm sm:text-base'
                }`}>
                  (11) 3456-7890
                </p>
              </div>
              
              <div className="text-center">
                <div className={`rounded-full bg-blue-100 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
                }`}>
                  <Mail className={`text-blue-600 ${
                    isMobile ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`} />
                </div>
                <h4 className={`font-semibold text-construction-900 mb-1 sm:mb-2 ${
                  isMobile ? 'text-base' : 'text-base sm:text-lg md:text-xl'
                }`}>
                  E-mail
                </h4>
                <p className={`text-construction-600 break-all ${
                  isMobile ? 'text-xs' : 'text-xs sm:text-sm md:text-base'
                }`}>
                  contato@construtorafortebase.com.br
                </p>
                <p className={`text-construction-600 break-all ${
                  isMobile ? 'text-xs' : 'text-xs sm:text-sm md:text-base'
                }`}>
                  orcamento@construtorafortebase.com.br
                </p>
              </div>

              <div className={`text-center ${
                isMobile ? '' : isTablet ? 'col-span-2' : 'sm:col-span-2 lg:col-span-1'
              }`}>
                <div className={`rounded-full bg-blue-100 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
                }`}>
                  <MapPin className={`text-blue-600 ${
                    isMobile ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`} />
                </div>
                <h4 className={`font-semibold text-construction-900 mb-1 sm:mb-2 ${
                  isMobile ? 'text-base' : 'text-base sm:text-lg md:text-xl'
                }`}>
                  Endereço
                </h4>
                <p className={`text-construction-600 ${
                  isMobile ? 'text-sm' : 'text-sm sm:text-base'
                }`}>
                  Av. Construção, 1000
                </p>
                <p className={`text-construction-600 ${
                  isMobile ? 'text-sm' : 'text-sm sm:text-base'
                }`}>
                  São Paulo - SP
                </p>
              </div>
            </div>
            
            <div className="text-center border-t border-construction-200 pt-4 sm:pt-6 lg:pt-8">
              <div className={`rounded-full bg-green-500 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto ${
                isMobile ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
              }`}>
                <img 
                  src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" 
                  alt="WhatsApp" 
                  className={isMobile ? 'w-5 h-5' : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'} 
                />
              </div>
              <h4 className={`font-semibold text-construction-900 mb-1 sm:mb-2 ${
                isMobile ? 'text-base' : 'text-base sm:text-lg md:text-xl'
              }`}>
                WhatsApp
              </h4>
              <p className={`text-construction-600 mb-1 sm:mb-2 ${
                isMobile ? 'text-sm' : 'text-sm sm:text-base'
              }`}>
                (11) 99999-9999
              </p>
              <p className={`text-construction-600 mb-3 sm:mb-4 ${
                isMobile ? 'text-xs' : 'text-xs sm:text-sm md:text-base'
              }`}>
                Atendimento rápido para orçamentos e dúvidas
              </p>
              <a 
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`button-accent inline-flex items-center justify-center ${
                  isMobile 
                    ? 'text-xs px-3 py-2' 
                    : 'text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3'
                }`}
              >
                <img 
                  src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" 
                  alt="WhatsApp" 
                  className={`mr-1 sm:mr-2 ${
                    isMobile ? 'w-3 h-3' : 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5'
                  }`} 
                />
                {isMobile ? 'Orçamento pelo WhatsApp' : 'Solicitar Orçamento pelo WhatsApp'}
              </a>
            </div>
            
            <div className="mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 md:p-6 bg-construction-50 rounded-lg border border-construction-200">
              <h4 className={`font-semibold text-construction-900 mb-2 sm:mb-3 text-center ${
                isMobile ? 'text-base' : 'text-base sm:text-lg md:text-xl'
              }`}>
                Horário de Atendimento
              </h4>
              <div className={`grid gap-2 sm:gap-3 md:gap-4 text-center ${
                isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
              }`}>
                <div>
                  <p className={`font-medium text-construction-800 ${
                    isMobile ? 'text-sm' : 'text-sm sm:text-base'
                  }`}>
                    Segunda a Sexta
                  </p>
                  <p className={`text-construction-600 ${
                    isMobile ? 'text-sm' : 'text-sm sm:text-base'
                  }`}>
                    08:00 às 18:00
                  </p>
                </div>
                <div>
                  <p className={`font-medium text-construction-800 ${
                    isMobile ? 'text-sm' : 'text-sm sm:text-base'
                  }`}>
                    Sábados
                  </p>
                  <p className={`text-construction-600 ${
                    isMobile ? 'text-sm' : 'text-sm sm:text-base'
                  }`}>
                    08:00 às 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
