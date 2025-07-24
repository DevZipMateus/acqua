
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcquaAboutSection from "@/components/AcquaAboutSection";
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 acqua-gradient">
          <div className="container mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Sobre a <span className="text-gradient">Acqua Ambiental</span>
            </h1>
            <p className="subtitle max-w-3xl mx-auto">
              Especialistas em materiais técnicos para construção civil, oferecendo soluções completas 
              em sistemas de água, drenagem e impermeabilização.
            </p>
          </div>
        </section>

        <AcquaAboutSection />

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">Nossa História</h2>
                <p className="text-acqua-700 mb-6 leading-relaxed">
                  A Acqua Ambiental nasceu da necessidade do mercado por materiais técnicos 
                  de alta qualidade para projetos de construção civil. Com foco em sistemas 
                  de água, drenagem e impermeabilização, nos tornamos referência no setor.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-acqua-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-acqua-600" />
                    </div>
                    <div className="text-2xl font-bold text-acqua-900">500+</div>
                    <div className="text-sm text-acqua-600">Projetos Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-acqua-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-acqua-600" />
                    </div>
                    <div className="text-2xl font-bold text-acqua-900">98%</div>
                    <div className="text-sm text-acqua-600">Satisfação dos Clientes</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Materiais técnicos" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 acqua-gradient">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Nossos Valores</h2>
              <p className="subtitle">Princípios que norteiam nossa atuação no mercado</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Qualidade",
                  description: "Materiais de primeira linha de fornecedores confiáveis"
                },
                {
                  icon: Users,
                  title: "Atendimento",
                  description: "Consultoria técnica especializada para cada projeto"
                },
                {
                  icon: Clock,
                  title: "Agilidade",
                  description: "Entrega rápida e eficiente para não atrasar sua obra"
                },
                {
                  icon: Award,
                  title: "Confiança",
                  description: "Soluções seguras e duradouras para seus projetos"
                }
              ].map((value, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-14 h-14 bg-acqua-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-acqua-600" />
                  </div>
                  <h3 className="text-xl font-bold text-acqua-900 mb-3">{value.title}</h3>
                  <p className="text-acqua-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
