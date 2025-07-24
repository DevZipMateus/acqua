
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcquaServicesSection from "@/components/AcquaServicesSection";
import { Droplets, Shield, Filter, Thermometer, Zap, Wrench } from 'lucide-react';

const services = [
  {
    title: "Sistemas de Drenagem",
    description: "Soluções completas para drenagem urbana, predial e industrial com materiais de alta qualidade.",
    icon: Droplets,
    features: [
      "Tubos e conexões para drenagem",
      "Caixas de passagem e inspeção",
      "Grelhas e tampas",
      "Sistemas de infiltração",
      "Consultoria técnica especializada"
    ]
  },
  {
    title: "Impermeabilização",
    description: "Materiais e sistemas para impermeabilização de lajes, fundações e estruturas diversas.",
    icon: Shield,
    features: [
      "Mantas asfálticas",
      "Membranas líquidas",
      "Sistemas cristalizantes",
      "Impermeabilização de piscinas",
      "Tratamento de infiltrações"
    ]
  },
  {
    title: "Filtragem de Água",
    description: "Sistemas avançados de filtragem para tratamento e purificação de água potável e industrial.",
    icon: Filter,
    features: [
      "Filtros de areia e carvão",
      "Sistemas de osmose reversa",
      "Filtros industriais",
      "Tratamento de efluentes",
      "Análise da qualidade da água"
    ]
  },
  {
    title: "Aquecimento de Água",
    description: "Equipamentos e sistemas para aquecimento eficiente de água em residências e empresas.",
    icon: Thermometer,
    features: [
      "Aquecedores solares",
      "Sistemas a gás",
      "Aquecimento elétrico",
      "Bombas de calor",
      "Sistemas híbridos"
    ]
  },
  {
    title: "Circulação de Água",
    description: "Bombas e sistemas de circulação para piscinas, reservatórios e sistemas hidráulicos.",
    icon: Zap,
    features: [
      "Bombas centrífugas",
      "Sistemas de recalque",
      "Automação hidráulica",
      "Pressurizadores",
      "Sistemas de filtragem para piscinas"
    ]
  },
  {
    title: "Consultoria Técnica",
    description: "Orientação especializada para escolha e instalação dos melhores materiais para seu projeto.",
    icon: Wrench,
    features: [
      "Análise de projetos",
      "Especificação técnica",
      "Dimensionamento de sistemas",
      "Acompanhamento de obra",
      "Treinamento técnico"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 acqua-gradient">
          <div className="container mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="subtitle max-w-3xl mx-auto">
              Oferecemos uma ampla gama de materiais técnicos e serviços especializados 
              para atender todas as necessidades da sua obra.
            </p>
          </div>
        </section>

        <AcquaServicesSection />

        {/* Detailed Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-acqua-100 rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="w-7 h-7 text-acqua-600" />
                      </div>
                      <h2 className="heading-md">{service.title}</h2>
                    </div>
                    <p className="text-acqua-700 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-acqua-500 rounded-full mr-3"></div>
                          <span className="text-acqua-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1513836279014-a89f7a76ae86' : '1558618666-fcd25c85cd64'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                        alt={service.title}
                        className="rounded-xl shadow-lg w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-acqua-900 via-transparent to-transparent rounded-xl opacity-30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 acqua-gradient">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Precisa de uma solução personalizada?</h2>
            <p className="subtitle mb-8">
              Entre em contato conosco para uma consultoria técnica especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="button-primary px-8 py-4"
              >
                Solicitar Orçamento
              </button>
              <a 
                href="https://wa.me/5519999300066?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Acqua%20Ambiental" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-secondary px-8 py-4"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
