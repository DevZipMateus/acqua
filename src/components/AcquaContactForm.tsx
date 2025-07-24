
import { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AcquaContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <section className="py-16 acqua-gradient w-full" id="contact">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-acqua-500 text-white mb-4">
            Entre em Contato
          </span>
          <h2 className="heading-lg mb-4">
            Vamos conversar sobre <span className="text-gradient">seu projeto</span>
          </h2>
          <p className="subtitle">
            Entre em contato conosco para receber um orçamento personalizado ou esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-acqua-900 mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-acqua-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-acqua-200 rounded-lg focus:ring-2 focus:ring-acqua-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-acqua-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-acqua-200 rounded-lg focus:ring-2 focus:ring-acqua-500 focus:border-transparent transition-all"
                    placeholder="(19) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-acqua-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-acqua-200 rounded-lg focus:ring-2 focus:ring-acqua-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-acqua-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-acqua-200 rounded-lg focus:ring-2 focus:ring-acqua-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="orcamento">Solicitar Orçamento</option>
                  <option value="drenagem">Sistemas de Drenagem</option>
                  <option value="impermeabilizacao">Impermeabilização</option>
                  <option value="filtragem">Filtragem de Água</option>
                  <option value="aquecimento">Aquecimento de Água</option>
                  <option value="consultoria">Consultoria Técnica</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-acqua-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-acqua-200 rounded-lg focus:ring-2 focus:ring-acqua-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-acqua-600 hover:bg-acqua-700 text-white py-4 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-acqua-900 mb-6">Outros meios de contato</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+5519999300066" 
                  className="flex items-center p-4 bg-acqua-50 rounded-xl hover:bg-acqua-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-acqua-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-acqua-700 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-acqua-900">Telefone</h4>
                    <p className="text-acqua-700">(19) 99930-0066</p>
                  </div>
                </a>

                <a 
                  href="mailto:comercial@acquaambiental.com.br" 
                  className="flex items-center p-4 bg-acqua-50 rounded-xl hover:bg-acqua-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-acqua-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-acqua-700 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-acqua-900">E-mail</h4>
                    <p className="text-acqua-700">comercial@acquaambiental.com.br</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5519999300066?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Acqua%20Ambiental" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">WhatsApp</h4>
                    <p className="text-green-700">Atendimento rápido e direto</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-acqua-900 mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-acqua-700">
                <p><span className="font-medium">Segunda a Sexta:</span> 08:00 às 18:00</p>
                <p><span className="font-medium">Sábados:</span> 08:00 às 12:00</p>
                <p><span className="font-medium">Domingos:</span> Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquaContactForm;
