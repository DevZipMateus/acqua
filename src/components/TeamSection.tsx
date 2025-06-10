
import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Eng. Carlos Silva",
    position: "Diretor Técnico",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    email: "carlos@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 0
  },
  {
    name: "Arq. Marina Santos",
    position: "Arquiteta Chefe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    email: "marina@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 200
  },
  {
    name: "Eng. Roberto Lima",
    position: "Gerente de Obras",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    email: "roberto@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 400
  },
  {
    name: "Ana Paula Costa",
    position: "Coordenadora de Projetos",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=922&q=80",
    email: "ana@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 600
  }
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold bg-construction-100 text-construction-600 mb-4">
            Nossa Equipe
          </span>
          <h2 className="heading-lg mb-6">
            Profissionais experientes e <span className="text-gradient">qualificados</span>
          </h2>
          <p className="text-construction-600 text-lg">
            Nossa equipe é formada por engenheiros, arquitetos e técnicos especializados,
            comprometidos em entregar projetos de excelência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border-construction-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden w-full aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-construction-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="flex gap-3 p-4 mb-2">
                      <a href={`mailto:${member.email}`} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center bg-construction-50">
                  <h3 className="text-xl font-bold text-construction-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
