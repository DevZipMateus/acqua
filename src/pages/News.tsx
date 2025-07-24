
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Button } from "@/components/ui/button";

const News = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-20 pb-6 md:pt-28 md:pb-8 bg-gradient-to-b from-scarlet-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-700 mb-3 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Informações
              </span>
              <h1 className={`heading-xl mb-3 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Página em <span className="text-gradient">desenvolvimento</span>
              </h1>
              <p className={`subtitle mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Esta seção está sendo preparada para você. Enquanto isso, conheça nossos serviços e produtos.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-scarlet-600 hover:bg-scarlet-700 text-white"
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default News;
