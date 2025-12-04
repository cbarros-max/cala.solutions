import { Card } from "./ui/card";
import { 
  Award, 
  Layers, 
  Target, 
  BookOpen, 
  DollarSign, 
  Building2, 
  Sparkles 
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Especialistas en Power Platform",
    description: "Dominio completo del ecosistema Microsoft 365 y Power Platform"
  },
  {
    icon: Layers,
    title: "Soluciones Escalables",
    description: "Sistemas simples de mantener y que crecen con tu negocio"
  },
  {
    icon: Target,
    title: "Alto Enfoque en Eficiencia",
    description: "Cada solución está diseñada para optimizar operaciones reales"
  },
  {
    icon: BookOpen,
    title: "Metodología Clara y Aplicada",
    description: "Procesos transparentes con resultados medibles"
  },
  {
    icon: DollarSign,
    title: "Tecnología Accesible",
    description: "Digitalización para cualquier empresa, sin grandes inversiones"
  },
  {
    icon: Building2,
    title: "Experiencia Comprobada",
    description: "Múltiples industrias: construcción, retail, energía, manufactura"
  },
  {
    icon: Sparkles,
    title: "Transformación Digital Real",
    description: "Soluciones prácticas que generan valor desde el primer día"
  }
];

export function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#262261] mb-4">
            ¿Por Qué Elegir CALA SOLUTIONS?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#782b8f] to-[#262261] mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Somos tu aliado estratégico en transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index} 
                className="p-6 border-2 border-slate-100 hover:border-[#782b8f] transition-all hover:shadow-lg group text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#782b8f] to-[#262261] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-[#262261] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {reason.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}