
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-12 sm:py-16 bg-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-yellow-500 text-construction-900 mb-4">
            Contato
          </span>
          <h2 className="heading-lg mb-4">
            Vamos construir seu projeto juntos
          </h2>
          <p className="subtitle">
            Entre em contato conosco para solicitar um orçamento gratuito ou tirar suas dúvidas.
            Nossa equipe está pronta para atender você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-4 sm:p-6 lg:p-8 animate-slideInRight">
            <h3 className="text-xl sm:text-2xl font-bold text-construction-900 mb-6 text-center">Nossos Canais de Atendimento</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-construction-900 mb-2">Telefone</h4>
                <p className="text-sm sm:text-base text-construction-600">(11) 99999-9999</p>
                <p className="text-sm sm:text-base text-construction-600">(11) 3456-7890</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-construction-900 mb-2">E-mail</h4>
                <p className="text-sm sm:text-base text-construction-600 break-all">contato@construtorafortebase.com.br</p>
                <p className="text-sm sm:text-base text-construction-600 break-all">orcamento@construtorafortebase.com.br</p>
              </div>

              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-construction-900 mb-2">Endereço</h4>
                <p className="text-sm sm:text-base text-construction-600">Av. Construção, 1000</p>
                <p className="text-sm sm:text-base text-construction-600">São Paulo - SP</p>
              </div>
            </div>
            
            <div className="text-center border-t border-construction-200 pt-6 sm:pt-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-construction-900 mb-2">WhatsApp</h4>
              <p className="text-sm sm:text-base text-construction-600 mb-2">(11) 99999-9999</p>
              <p className="text-sm sm:text-base text-construction-600 mb-4">Atendimento rápido para orçamentos e dúvidas</p>
              <a 
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-accent inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <img src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Solicitar Orçamento pelo WhatsApp
              </a>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-construction-50 rounded-lg border border-construction-200">
              <h4 className="text-lg sm:text-xl font-semibold text-construction-900 mb-3 text-center">Horário de Atendimento</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center">
                <div>
                  <p className="font-medium text-construction-800 text-sm sm:text-base">Segunda a Sexta</p>
                  <p className="text-construction-600 text-sm sm:text-base">08:00 às 18:00</p>
                </div>
                <div>
                  <p className="font-medium text-construction-800 text-sm sm:text-base">Sábados</p>
                  <p className="text-construction-600 text-sm sm:text-base">08:00 às 12:00</p>
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
