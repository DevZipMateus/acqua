import { useState, useEffect } from 'react';
import { useResponsive, useContainer } from '@/hooks/use-responsive';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Search, Filter, X, Eye, MessageCircle } from 'lucide-react';

// Complete product data extracted from all available images in the galeria folder
const products = [
  { id: 1, name: "QBorg Trincas - Mastique acrílico", image: "/lovable-uploads/galeria/Cliente_1_1_QBorg Trincas - Mastique acrli.jpg", category: "selantes" },
  { id: 2, name: "Base D'Água - Selante com acabamento", image: "/lovable-uploads/galeria/Cliente_1_2_Base DAgua - Selante com acaba.jpg", category: "selantes" },
  { id: 3, name: "Sela Trincas - Selante elástico", image: "/lovable-uploads/galeria/Cliente_1_3_Sela Trincas - Selante elstico.jpg", category: "selantes" },
  { id: 4, name: "Pro Carrocerias - Selante Adesivo", image: "/lovable-uploads/galeria/Cliente_1_4_Pro Carrocerias - Selante Ades.jpg", category: "automotivo" },
  { id: 5, name: "Pro Parabrisas - Adesivo de alta performance", image: "/lovable-uploads/galeria/Cliente_1_5_Pro Parabrisas - Adesivo de al.jpg", category: "automotivo" },
  { id: 6, name: "PU Q-25 - Selante Premium", image: "/lovable-uploads/galeria/Cliente_1_6_PU Q-25 - Selante Premium para.png", category: "selantes" },
  { id: 7, name: "PU Q-40 - Alto desempenho", image: "/lovable-uploads/galeria/Cliente_1_7_PU Q-40 - Alto desempenho para.png", category: "selantes" },
  { id: 8, name: "PU Q-20 - Selante Premium", image: "/lovable-uploads/galeria/Cliente_1_8_PU Q-20 - Selante Premium para.png", category: "selantes" },
  { id: 9, name: "MS Q-40 - Selante Premium", image: "/lovable-uploads/galeria/Cliente_1_9_MS Q-40 - Selante Premium para.jpg", category: "selantes" },
  { id: 10, name: "Pro Silicone Neutro - Silicone", image: "/lovable-uploads/galeria/Cliente_1_10_Pro Silicone Neutro - Silicone.jpg", category: "silicones" },
  { id: 11, name: "MS Q-20 - Selante Premium", image: "/lovable-uploads/galeria/Cliente_1_11_MS Q-20 - Selante Premium baix.jpg", category: "selantes" },
  { id: 12, name: "Pro Silicone Acético - Silicone", image: "/lovable-uploads/galeria/Cliente_1_12_Pro Silicone Actico - Silicone.jpg", category: "silicones" },
  { id: 13, name: "PU Q-44 - Selante Adesivo Premium", image: "/lovable-uploads/galeria/Cliente_1_13_PU Q-44 - Selante Adesivo Prem.jpg", category: "selantes" },
  { id: 14, name: "Pro Sacadas - Selante Adesivo", image: "/lovable-uploads/galeria/Cliente_1_14_Pro Sacadas - Selante Adesivo.jpg", category: "construção" },
  { id: 15, name: "SHT - Selante para vedação", image: "/lovable-uploads/galeria/Cliente_1_15_SHT - Selante para vedao de ch.png", category: "vedação" },
  { id: 16, name: "Pro Calhas - Adesivo PU", image: "/lovable-uploads/galeria/Cliente_1_16_Pro Calhas - Adesivo PU para c.png", category: "construção" },
  { id: 17, name: "PU 40 Multiuso - Selante Adesivo", image: "/lovable-uploads/galeria/Cliente_1_17_PU 40 Multiuso - Selante Adesi.png", category: "selantes" },
  { id: 18, name: "PU Flex Cinza - Selante Adesivo", image: "/lovable-uploads/galeria/Cliente_1_18_PU Flex Cinza - Selante Adesiv.png", category: "selantes" },
  { id: 19, name: "Pro Silicone Acético - Silicone", image: "/lovable-uploads/galeria/Cliente_1_19_Pr Silicone Actico - Silicone.png", category: "silicones" },
  { id: 20, name: "Pro Silicone Acético - Silicone", image: "/lovable-uploads/galeria/Cliente_1_20_Pro Silicone Acetico - Silicon.jpg", category: "silicones" },
  { id: 21, name: "Pro Silicone Acético AT - Silicone", image: "/lovable-uploads/galeria/Cliente_1_21_Pro Silicone Acetico AT - Sili.jpg", category: "silicones" },
  { id: 22, name: "Pro Silicone Neutro - Silicone", image: "/lovable-uploads/galeria/Cliente_1_22_Pro Silicone Neutro - Silicone.png", category: "silicones" },
  { id: 23, name: "Pro Laje - Selante PU impermeável", image: "/lovable-uploads/galeria/Cliente_1_23_Pro Laje - Selante PU impermea.jpg", category: "impermeabilização" },
  { id: 24, name: "Pro Laje Alcatrão - Selante PU", image: "/lovable-uploads/galeria/Cliente_1_24_Pro Laje Alcatro - Selante PU.jpg", category: "impermeabilização" },
  { id: 25, name: "Manta Líquida - Membrana impermeável", image: "/lovable-uploads/galeria/Cliente_1_25_Manta Liquida - Membrana imper.jpg", category: "impermeabilização" },
  { id: 26, name: "Manta Asfáltica - Manta asfáltica", image: "/lovable-uploads/galeria/Cliente_1_26_Manta Asfaltica - Manta asflti.jpg", category: "impermeabilização" },
  { id: 27, name: "QVeda - Fita autoadesiva", image: "/lovable-uploads/galeria/Cliente_1_27_QVeda - Fita autoadesiva para.png", category: "vedação" },
  { id: 28, name: "Qveda Azul 1 - Fita Autoadesiva", image: "/lovable-uploads/galeria/Cliente_1_28_Qveda Azul 1 - Fita Autoaderen.jpg", category: "vedação" },
  { id: 29, name: "300 Chumbador Estrutural - Fixador", image: "/lovable-uploads/galeria/Cliente_1_29_300 Chumbador Estrutural - Fix.jpg", category: "fixação" },
  { id: 30, name: "Adesivo Epóxi Tixotrópico - Adesivo", image: "/lovable-uploads/galeria/Cliente_1_30_Adesivo Epxi Tixotrpico - Ades.png", category: "adesivos" },
  { id: 31, name: "Adesivo Epóxi - Adesivo estrutural", image: "/lovable-uploads/galeria/Cliente_1_31_Adesivo Epxi - Adesivo estrutu.png", category: "adesivos" },
  { id: 32, name: "Desmoldante MD - Desmoldante", image: "/lovable-uploads/galeria/Cliente_1_32_Desmoldante MD - Desmoldante p.jpg", category: "desmoldantes" },
  { id: 33, name: "Desmoldante MD Fácil - Desmoldante", image: "/lovable-uploads/galeria/Cliente_1_33_Desmoldante MD Fcil - Desmolda.jpg", category: "desmoldantes" },
  { id: 34, name: "Desmoldante MD Multi - Desmoldante", image: "/lovable-uploads/galeria/Cliente_1_34_Desmoldante MD Multi - Desmold.png", category: "desmoldantes" },
  { id: 35, name: "Top - Revestimento semi-flexível", image: "/lovable-uploads/galeria/Cliente_1_35_Top - Revestimento semi-flexve.jpg", category: "revestimentos" },
  { id: 36, name: "Top Flex Fibras - Revestimento", image: "/lovable-uploads/galeria/Cliente_1_36_Top Flex Fibras - Revestimento.png", category: "revestimentos" },
  { id: 37, name: "TOP FLEX - Revestimento flexível", image: "/lovable-uploads/galeria/Cliente_1_37_TOP FLEX - Revestimento flexve.jpg", category: "revestimentos" },
  { id: 38, name: "Espuma PU Pro - Espuma expansiva", image: "/lovable-uploads/galeria/Cliente_1_38_Espuma_PU_Pro - Espuma expansi.png", category: "espumas" },
  { id: 39, name: "Espuma Pu - Adesivo extra forte", image: "/lovable-uploads/galeria/Cliente_1_39_Espuma_Pu - Adesivo extra fort.jpg", category: "espumas" },
  { id: 40, name: "Chapisco Químico I - Adesivo", image: "/lovable-uploads/galeria/Cliente_1_40_Chapisco_Quimico I - Adesivo a.png", category: "chapiscos" },
  { id: 41, name: "Chapisco Acrílico - Adesivo", image: "/lovable-uploads/galeria/Cliente_1_41_Chapisco_Acrilico - Adesivo ac.jpg", category: "chapiscos" },
  { id: 42, name: "Adesivo Para Chapisco Base PVA", image: "/lovable-uploads/galeria/Cliente_1_42_Adesivo Para Chapisco Base PVA.png", category: "chapiscos" },
  { id: 43, name: "Adesivo Para Chapisco Base PVA", image: "/lovable-uploads/galeria/Cliente_1_43_Adesivo Para Chapisco Base PVA.jpg", category: "chapiscos" },
  { id: 44, name: "Cura Química", image: "/lovable-uploads/galeria/Cliente_1_44_CuraQuimica.png", category: "aditivos" },
  { id: 45, name: "Hidrofugante Fachadas Pedras", image: "/lovable-uploads/galeria/Cliente_1_45_Hidrofugante Fachadas Pedras e.jpg", category: "hidrofugantes" },
  { id: 46, name: "WP Parede Premium", image: "/lovable-uploads/galeria/Cliente_1_46_WPParedePremium.png", category: "hidrofugantes" },
  { id: 47, name: "WP1 - Hidrofugante Argamassa", image: "/lovable-uploads/galeria/Cliente_1_47_WP1 - Hidrofugante Argamassa e.jpg", category: "hidrofugantes" },
  { id: 48, name: "WP1 - Hidrofugante Argamassa", image: "/lovable-uploads/galeria/Cliente_1_48_WP1 - Hidrofugante Argamassa e.jpg", category: "hidrofugantes" },
  { id: 49, name: "Primer Base Água I", image: "/lovable-uploads/galeria/Cliente_1_49_Primer Base gua I.jpg", category: "primers" },
  { id: 50, name: "Primer Base Água", image: "/lovable-uploads/galeria/Cliente_1_50_Primer Base gua.jpg", category: "primers" },
  { id: 51, name: "Hidroasfalto I", image: "/lovable-uploads/galeria/Cliente_1_51_Hidroasfalto I.jpg", category: "impermeabilização" },
  { id: 52, name: "Hidroasfalto", image: "/lovable-uploads/galeria/Cliente_1_52_Hidroasfalto.jpg", category: "impermeabilização" },
  { id: 53, name: "Hard - Endurecedor Superfície", image: "/lovable-uploads/galeria/Cliente_1_53_Hard - Endurecedor Superficie.png", category: "endurecedores" },
  { id: 54, name: "Hard - Endurecedor Superfície", image: "/lovable-uploads/galeria/Cliente_1_54_Hard - Endurecedor Superficie.png", category: "endurecedores" },
  { id: 55, name: "Plastificante", image: "/lovable-uploads/galeria/Cliente_1_55_Plastificante.png", category: "aditivos" },
  { id: 56, name: "Plastificante", image: "/lovable-uploads/galeria/Cliente_1_56_Plastificante.jpg", category: "aditivos" },
  { id: 57, name: "Pro Cubas Branco", image: "/lovable-uploads/galeria/Cliente_1_57_ProCubasBranco.png", category: "selantes" },
  { id: 58, name: "Pro Cubas", image: "/lovable-uploads/galeria/Cliente_1_58_ProCubas.jpg", category: "selantes" },
  { id: 59, name: "Pro Espelhos Sachê", image: "/lovable-uploads/galeria/Cliente_1_59_Proespelhos_Sache.png", category: "adesivos" },
  { id: 60, name: "Pro Espelhos", image: "/lovable-uploads/galeria/Cliente_1_60_ProEspelhos.png", category: "adesivos" },
  { id: 61, name: "High Tack Preto", image: "/lovable-uploads/galeria/Cliente_1_61_HighTack_Preto.png", category: "adesivos" },
  { id: 62, name: "Pro Fixa Tudo", image: "/lovable-uploads/galeria/Cliente_1_62_ProFixaTudopq.png", category: "adesivos" },
  { id: 63, name: "Pro Fixa Tudo Tubo", image: "/lovable-uploads/galeria/Cliente_1_63_Profixatudo_tubo.png", category: "adesivos" },
  { id: 64, name: "Pro Silicone Neutro", image: "/lovable-uploads/galeria/Cliente_1_64_pro_silicone_neutro.png", category: "silicones" },
  { id: 65, name: "MACPIPE Tubo Dreno NBR", image: "/lovable-uploads/galeria/Cliente_1_65_Cpia de MACPIPE TUBO DRENO NBR.jpg", category: "tubos" },
  { id: 66, name: "Camisa Geotêxtil", image: "/lovable-uploads/galeria/Cliente_1_66_CAMISA GEOTEXTIL 336x336.jpg", category: "geotêxteis" },
  { id: 67, name: "MACDRAIN TD", image: "/lovable-uploads/galeria/Cliente_1_67_MACDRAIN TD.jpg", category: "drenagem" },
  { id: 68, name: "FIBROMAC 12", image: "/lovable-uploads/galeria/Cliente_1_68_FIBROMAC 12.JPG", category: "fibras" },
  { id: 69, name: "FIBROMAC 6", image: "/lovable-uploads/galeria/Cliente_1_69_FIBROMAC 6 640x480.jpg", category: "fibras" },
  { id: 70, name: "FIBROMAC", image: "/lovable-uploads/galeria/Cliente_1_70_FIBROMAC 640x480.jpg", category: "fibras" },
  { id: 71, name: "MACDRAIN VC", image: "/lovable-uploads/galeria/Cliente_1_71_MACDRAIN VC 640x480.jpg", category: "drenagem" },
  { id: 72, name: "MACDRAIN 1L", image: "/lovable-uploads/galeria/Cliente_1_72_MACDRAIN 1L 640x480.jpg", category: "drenagem" },
  { id: 73, name: "MACDRAIN 1S", image: "/lovable-uploads/galeria/Cliente_1_73_MACDRAIN 1S 640x480.jpg", category: "drenagem" },
  { id: 74, name: "MACDRAIN 2L", image: "/lovable-uploads/galeria/Cliente_1_74_MACDRAIN 2L.jpg", category: "drenagem" },
  { id: 75, name: "MACMAT 10", image: "/lovable-uploads/galeria/Cliente_1_75_MACMAT 10.JPG", category: "mantas" },
  { id: 76, name: "MACDRAIN 1L", image: "/lovable-uploads/galeria/Cliente_1_76_MACDRAIN 1L.jpg", category: "drenagem" },
  { id: 77, name: "MACDRAIN FP", image: "/lovable-uploads/galeria/Cliente_1_77_MACDRAIN FP 640x480.jpg", category: "drenagem" },
  { id: 78, name: "MACDRAIN R2", image: "/lovable-uploads/galeria/Cliente_1_78_MACDRAIN R2 640x480.jpg", category: "drenagem" },
  { id: 79, name: "MACDRAIN R1", image: "/lovable-uploads/galeria/Cliente_1_79_MACDRAIN R1 640x480.jpg", category: "drenagem" },
  { id: 80, name: "BIOMAC", image: "/lovable-uploads/galeria/Cliente_1_80_BIOMAC 640x426.jpg", category: "biomanta" },
  { id: 81, name: "MACPIPE H Tubo Dreno DNIT", image: "/lovable-uploads/galeria/Cliente_1_81_MACPIPE H TUBO DRENO DNIT 093.jpg", category: "tubos" },
  { id: 82, name: "MACDRAIN 2L", image: "/lovable-uploads/galeria/Cliente_1_82_MACDRAIN 2L 640x480.jpg", category: "drenagem" }
];

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'selantes', name: 'Selantes' },
  { id: 'silicones', name: 'Silicones' },
  { id: 'impermeabilização', name: 'Impermeabilização' },
  { id: 'vedação', name: 'Vedação' },
  { id: 'automotivo', name: 'Automotivo' },
  { id: 'construção', name: 'Construção' },
  { id: 'adesivos', name: 'Adesivos' },
  { id: 'fixação', name: 'Fixação' },
  { id: 'desmoldantes', name: 'Desmoldantes' },
  { id: 'revestimentos', name: 'Revestimentos' },
  { id: 'espumas', name: 'Espumas' },
  { id: 'chapiscos', name: 'Chapiscos' },
  { id: 'aditivos', name: 'Aditivos' },
  { id: 'hidrofugantes', name: 'Hidrofugantes' },
  { id: 'primers', name: 'Primers' },
  { id: 'endurecedores', name: 'Endurecedores' },
  { id: 'tubos', name: 'Tubos' },
  { id: 'geotêxteis', name: 'Geotêxteis' },
  { id: 'drenagem', name: 'Drenagem' },
  { id: 'fibras', name: 'Fibras' },
  { id: 'mantas', name: 'Mantas' },
  { id: 'biomanta', name: 'Biomanta' }
];

const Catalog = () => {
  const { isMobile, isTablet } = useResponsive();
  const { containerClass, getGridCols, spacing } = useContainer();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [expandedImage, setExpandedImage] = useState<{id: number, src: string, name: string} | null>(null);

  useEffect(() => {
    let filtered = products;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory]);

  const handleImageExpand = (product: {id: number, image: string, name: string}) => {
    setExpandedImage({id: product.id, src: product.image, name: product.name});
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  const handleWhatsAppRedirect = (productName: string) => {
    const phoneNumber = "5511999999999"; // Replace with the actual company phone number
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className={`bg-gradient-to-br from-acqua-600 to-acqua-800 text-white ${spacing.section}`}>
          <div className={`mx-auto ${containerClass}`}>
            <div className="text-center">
              <h1 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'}`}>
                Catálogo de Produtos
              </h1>
              <p className={`${isMobile ? 'text-base' : 'text-lg'} opacity-90 max-w-2xl mx-auto`}>
                Conheça nossa linha completa de produtos para vedação, impermeabilização e construção civil
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className={`bg-gray-50 ${spacing.section}`}>
          <div className={`mx-auto ${containerClass}`}>
            <div className={`flex flex-col ${isMobile ? 'space-y-4' : 'lg:flex-row lg:items-center lg:justify-between lg:space-y-0'}`}>
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acqua-500 focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className={`flex flex-wrap gap-2 ${isMobile ? 'justify-center' : 'lg:ml-6'}`}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-acqua-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-acqua-50 border border-gray-300'
                    }`}
                  >
                    <Filter className="w-4 h-4 inline mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className={`${spacing.section}`}>
          <div className={`mx-auto ${containerClass}`}>
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                isMobile ? 'grid-cols-1' : 
                isTablet ? 'grid-cols-2' : 
                'grid-cols-3 lg:grid-cols-4'
              }`}>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        loading="lazy"
                        onClick={() => handleImageExpand(product)}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button 
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-acqua-600 hover:bg-acqua-50 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageExpand(product);
                            }}
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-semibold text-gray-900 mb-2 ${isMobile ? 'text-sm' : 'text-base'} line-clamp-2`}>
                        {product.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-acqua-100 text-acqua-700 text-xs rounded-full capitalize mb-3">
                        {product.category}
                      </span>
                      <button
                        onClick={() => handleWhatsAppRedirect(product.name)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum produto encontrado.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
            <button
              onClick={handleCloseExpanded}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-center">
              <h3 className="text-white text-sm sm:text-xl font-bold bg-black bg-opacity-50 rounded-lg py-1 px-2 sm:py-2 sm:px-4 inline-block">
                {expandedImage.name}
              </h3>
            </div>
          </div>
          <div 
            className="absolute inset-0 -z-10"
            onClick={handleCloseExpanded}
          />
        </div>
      )}

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Catalog;
