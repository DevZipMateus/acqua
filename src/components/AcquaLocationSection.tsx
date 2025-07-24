
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AcquaLocationSection = () => {
  return (
    <section className="py-16 bg-white w-full" id="location">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-100 text-acqua-700 mb-4">
            Nossa Localização
          </span>
          <h2 className="heading-lg mb-4">
            Visite nossa <span className="text-gradient">loja física</span>
          </h2>
          <p className="subtitle">
            Estamos localizados em Vinhedo-SP, prontos para atender você com o melhor em materiais técnicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-acqua-50 rounded-2xl p-8">
            <h3 className="heading-md mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-acqua-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-acqua-900 mb-1">Endereço</h4>
                  <p className="text-acqua-700">
                    Rua Galcio Sanches Ribeiro, 80<br />
                    Vinhedo - SP<br />
                    CEP: 13286-404
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-acqua-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-acqua-900 mb-1">Telefone</h4>
                  <a 
                    href="tel:+5519999300066" 
                    className="text-acqua-700 hover:text-acqua-600 transition-colors"
                  >
                    (19) 99930-0066
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-acqua-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-acqua-900 mb-1">E-mail</h4>
                  <a 
                    href="mailto:comercial@acquaambiental.com.br" 
                    className="text-acqua-700 hover:text-acqua-600 transition-colors"
                  >
                    comercial@acquaambiental.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-acqua-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-acqua-900 mb-1">Horário de Funcionamento</h4>
                  <p className="text-acqua-700">
                    Segunda a Sexta: 08:00 às 18:00<br />
                    Sábados: 08:00 às 12:00<br />
                    Domingos: Fechado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://maps.app.goo.gl/FZr6ji3MA3YnrF4i9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary w-full text-center"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className="bg-acqua-50 rounded-2xl overflow-hidden">
            <div className="w-full h-96">
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
