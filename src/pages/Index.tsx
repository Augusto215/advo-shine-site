import { Button } from "@/components/ui/button";
import { Scale, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";

const Index = () => {
  const benefits = [
    {
      icon: Scale,
      title: "Excelência Jurídica",
      description: "Soluções personalizadas com os melhores especialistas"
    },
    {
      icon: Shield,
      title: "Confidencialidade Total",
      description: "Sigilo absoluto em todos os processos e atendimentos"
    },
    {
      icon: Users,
      title: "Atendimento VIP",
      description: "Assessoria dedicada e disponível quando você precisar"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em casos complexos"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <section className="space-y-8 animate-fade-in">
            <header className="space-y-6">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Advocacia
                <span className="block bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
                  Premium
                </span>
              </h1>
              
              <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Atendimento exclusivo e soluções jurídicas estratégicas para quem busca excelência
              </p>
            </header>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:shadow-md group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in-up 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-1">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="w-full md:w-auto font-inter text-base px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Agendar Consulta VIP
            </Button>
          </section>

          {/* Image Section */}
          <div className="relative lg:order-last order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-shadow duration-500">
              <img 
                src={heroImage} 
                alt="Escritório de advocacia premium com ambiente sofisticado e profissional"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default Index;