
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, FileText, Calculator, BookOpen, Download } from 'lucide-react';

const links = [
  {
    category: "Normas Técnicas",
    icon: FileText,
    items: [
      {
        title: "NBR 10844 - Instalações prediais de águas pluviais",
        description: "Norma que estabelece critérios para dimensionamento de sistemas de drenagem",
        url: "https://www.abnt.org.br/normalizacao/lista-de-publicacoes/abnt/6"
      },
      {
        title: "NBR 9575 - Impermeabilização",
        description: "Seleção e projeto de impermeabilização",
        url: "https://www.abnt.org.br/normalizacao/lista-de-publicacoes/abnt/6"
      },
      {
        title: "NBR 7198 - Projeto e execução de instalações prediais de água quente",
        description: "Norma para sistemas de aquecimento de água",
        url: "https://www.abnt.org.br/normalizacao/lista-de-publicacoes/abnt/6"
      }
    ]
  },
  {
    category: "Calculadoras Técnicas",
    icon: Calculator,
    items: [
      {
        title: "Calculadora de Dimensionamento de Tubulações",
        description: "Calcule o diâmetro ideal para tubulações de drenagem",
        url: "#"
      },
      {
        title: "Calculadora de Vazão",
        description: "Determine a vazão necessária para seu sistema",
        url: "#"
      },
      {
        title: "Calculadora de Perda de Carga",
        description: "Calcule perdas de carga em sistemas hidráulicos",
        url: "#"
      }
    ]
  },
  {
    category: "Manuais Técnicos",
    icon: BookOpen,
    items: [
      {
        title: "Manual de Instalação - Sistemas de Drenagem",
        description: "Guia completo para instalação de sistemas de drenagem",
        url: "#"
      },
      {
        title: "Manual de Impermeabilização",
        description: "Técnicas e procedimentos para impermeabilização",
        url: "#"
      },
      {
        title: "Guia de Manutenção de Sistemas de Água",
        description: "Como manter seus sistemas funcionando perfeitamente",
        url: "#"
      }
    ]
  },
  {
    category: "Downloads",
    icon: Download,
    items: [
      {
        title: "Catálogo de Produtos 2024",
        description: "Catálogo completo com todos os nossos produtos",
        url: "#"
      },
      {
        title: "Especificações Técnicas",
        description: "Fichas técnicas detalhadas dos produtos",
        url: "#"
      },
      {
        title: "Tabela de Preços",
        description: "Lista atualizada de preços (acesso restrito)",
        url: "#"
      }
    ]
  }
];

const UsefulLinks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 acqua-gradient">
          <div className="container mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Links <span className="text-gradient">Úteis</span>
            </h1>
            <p className="subtitle max-w-3xl mx-auto">
              Acesse normas técnicas, calculadoras, manuais e outros recursos importantes 
              para seus projetos de construção civil.
            </p>
          </div>
        </section>

        {/* Links Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="space-y-16">
              {links.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-acqua-100 rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-acqua-600" />
                    </div>
                    <h2 className="heading-md">{category.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.url}
                        target={item.url.startsWith('http') ? '_blank' : '_self'}
                        rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="bg-white border border-acqua-200 rounded-xl p-6 hover:border-acqua-400 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-acqua-900 group-hover:text-acqua-700 transition-colors">
                            {item.title}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-acqua-400 group-hover:text-acqua-600 transition-colors flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-acqua-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 acqua-gradient">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Precisa de ajuda técnica?</h2>
            <p className="subtitle mb-8">
              Nossa equipe técnica está disponível para esclarecer dúvidas e fornecer consultoria especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="button-primary px-8 py-4"
              >
                Falar com Especialista
              </a>
              <a 
                href="https://wa.me/5519999300066?text=Olá,%20preciso%20de%20consultoria%20técnica%20da%20Acqua%20Ambiental" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-secondary px-8 py-4"
              >
                WhatsApp Técnico
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsefulLinks;
