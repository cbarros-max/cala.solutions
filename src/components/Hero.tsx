import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import logoWhite from "figma:asset/e429b32fe9f93fcf97860f3ec93404eade92df23.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#262261] via-[#4a3a7a] to-[#782b8f] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <img 
            src={logoWhite} 
            alt="CALA SOLUTIONS" 
            className="h-40 md:h-48 lg:h-56 mx-auto mb-12"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white mb-8 leading-tight">
            Digitalizamos procesos.<br />
            Impulsamos eficiencia.<br />
            <span className="text-[#782b8f] bg-white px-4 py-2 inline-block rounded">Transformamos tu negocio.</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            Power Platform | Procesos | Automatizaciones | Data Analytics
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg mb-10 max-w-4xl mx-auto">
            <p className="text-white/95 text-lg leading-relaxed">
              CALA SOLUTIONS es una consultora especializada en transformar operaciones mediante 
              tecnología, datos y automatización inteligente. Desde Comodoro Rivadavia, ayudamos 
              a empresas a digitalizar su día a día y optimizar sus resultados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#782b8f] hover:bg-[#9039a8] text-white gap-2"
              onClick={() => scrollToSection("contacto")}
            >
              <Calendar className="size-5" />
              Agendar reunión
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 gap-2"
              onClick={() => scrollToSection("pilares")}
            >
              Ver soluciones
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}