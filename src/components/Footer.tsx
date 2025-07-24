
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-acqua-800 to-acqua-900 text-white pt-12 md:pt-16 w-full">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div>
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-acqua-400 to-acqua-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-acqua-300">Acqua</span>
                <span className="text-xl font-bold text-white ml-1">Ambiental</span>
              </div>
            </button>
            <p className="text-acqua-200 mb-5 leading-relaxed text-sm md:text-base">
              Especialistas em materiais técnicos para construção civil. 
              Soluções completas em drenagem, impermeabilização e sistemas de água.
            </p>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-acqua-300">Links Rápidos</h3>
            <ul className="space-y-2 grid grid-cols-2 md:grid-cols-1">
              {[
                { label: "Início", section: "hero" },
                { label: "Sobre", section: "about" },
                { label: "Serviços", section: "services" },
                { label: "Planos", section: "plans" },
                { label: "Depoimentos", section: "testimonials" },
                { label: "Localização", section: "location" },
                { label: "Contato", section: "contact" }
              ].map(({ label, section }) => (
                <li key={label}>
                  <button 
                    onClick={() => scrollToSection(section)}
                    className="text-acqua-200 hover:text-acqua-300 transition-colors flex items-center text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-acqua-400 rounded-full mr-2 inline-block"></span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-acqua-300">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-acqua-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+5519999300066" className="text-acqua-200 hover:text-white transition-colors text-sm md:text-base">
                    (19) 99930-0066
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-acqua-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:comercial@acquaambiental.com.br" className="text-acqua-200 hover:text-white transition-colors text-sm md:text-base">
                    comercial@acquaambiental.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-acqua-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-acqua-200 text-sm md:text-base">
                    Rua Galcio Sanches Ribeiro, 80<br />
                    Vinhedo - SP | CEP: 13286-404
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-acqua-700 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-acqua-300 text-xs md:text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Acqua Ambiental Comércio e Serviços Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="bg-acqua-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-acqua-500 transition-colors focus:outline-none focus:ring-2 focus:ring-acqua-400 focus:ring-offset-2 focus:ring-offset-acqua-900"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
