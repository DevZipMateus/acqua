
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcquaContactForm from "@/components/AcquaContactForm";
import AcquaLocationSection from "@/components/AcquaLocationSection";
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 acqua-gradient">
          <div className="container mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="subtitle max-w-3xl mx-auto">
              Estamos prontos para atender você e fornecer a melhor solução para seu projeto. 
              Entre em contato conosco através dos canais abaixo.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <a 
                href="tel:+5519999300066" 
                className="bg-white border border-acqua-200 rounded-xl p-6 text-center hover:border-acqua-400 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-acqua-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-acqua-600 transition-colors">
                  <Phone className="w-7 h-7 text-acqua-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-acqua-900 mb-2">Telefone</h3>
                <p className="text-acqua-700">(19) 99930-0066</p>
                <p className="text-sm text-acqua-600 mt-2">Clique para ligar</p>
              </a>

              <a 
                href="mailto:comercial@acquaambiental.com.br" 
                className="bg-white border border-acqua-200 rounded-xl p-6 text-center hover:border-acqua-400 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-acqua-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-acqua-600 transition-colors">
                  <Mail className="w-7 h-7 text-acqua-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-acqua-900 mb-2">E-mail</h3>
                <p className="text-acqua-700 text-sm">comercial@acquaambiental.com.br</p>
                <p className="text-sm text-acqua-600 mt-2">Clique para enviar e-mail</p>
              </a>

              <a 
                href="https://wa.me/5519999300066?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Acqua%20Ambiental" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-green-200 rounded-xl p-6 text-center hover:border-green-400 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-7 h-7 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">WhatsApp</h3>
                <p className="text-green-700">(19) 99930-0066</p>
                <p className="text-sm text-green-600 mt-2">Atendimento rápido</p>
              </a>

              <div className="bg-white border border-acqua-200 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-acqua-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-acqua-600" />
                </div>
                <h3 className="text-xl font-bold text-acqua-900 mb-2">Horário</h3>
                <p className="text-acqua-700 text-sm">Seg a Sex: 08:00 às 18:00</p>
                <p className="text-acqua-700 text-sm">Sáb: 08:00 às 12:00</p>
              </div>
            </div>
          </div>
        </section>

        <AcquaContactForm />
        <AcquaLocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
