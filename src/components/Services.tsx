import { Card } from "./ui/card";
import { 
  FileText, 
  Workflow, 
  Zap, 
  GitBranch, 
  Database, 
  FolderOpen, 
  BarChart3, 
  FileCheck, 
  Smartphone,
  TrendingUp
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Consultoría en Procesos",
    description: "Análisis y optimización de procesos de negocio"
  },
  {
    icon: Workflow,
    title: "Implementación Power Platform",
    description: "Soluciones completas con el ecosistema Microsoft"
  },
  {
    icon: Zap,
    title: "Automatizaciones con Power Automate",
    description: "Flujos inteligentes para tareas repetitivas"
  },
  {
    icon: GitBranch,
    title: "Diseño de Workflows",
    description: "Flujos de trabajo eficientes y escalables"
  },
  {
    icon: Database,
    title: "Sistemas con Microsoft Lists",
    description: "Bases de datos y sistemas internos sin código"
  },
  {
    icon: FolderOpen,
    title: "Gestión Documental Digital",
    description: "Organización y control de documentación"
  },
  {
    icon: BarChart3,
    title: "Dashboards en Power BI",
    description: "Visualización de datos para decisiones estratégicas"
  },
  {
    icon: FileCheck,
    title: "Digitalización Administrativa",
    description: "Formularios, aprobaciones y procesos digitales"
  },
  {
    icon: Smartphone,
    title: "Power Apps Operativas",
    description: "Aplicaciones móviles para equipos de campo"
  },
  {
    icon: TrendingUp,
    title: "Análisis y Optimización",
    description: "Mejora continua del negocio basada en datos"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#262261] mb-4">
            Servicios
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#782b8f] to-[#262261] mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Soluciones profesionales para digitalizar y optimizar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 border-2 border-slate-100 hover:border-[#782b8f] transition-all hover:shadow-lg group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#782b8f] to-[#262261] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-[#262261] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs">
                    {service.description}
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