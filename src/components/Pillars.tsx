import { GitBranch, Zap, Workflow, BarChart3, Network } from "lucide-react";

const pillars = [
  {
    icon: GitBranch,
    title: "Transformación de Procesos",
    subtitle: "BPM & Mejora Continua",
    description: "Documentamos, analizamos y optimizamos procesos clave del negocio.",
    items: [
      "Relevamiento",
      "Mapeo BPMN",
      "Rediseño de procesos",
      "Eliminación de tareas redundantes",
      "Estandarización",
      "Mejora continua"
    ]
  },
  {
    icon: Zap,
    title: "Automatización Inteligente",
    subtitle: "Power Automate / RPA",
    description: "Diseño de flujos que automatizan tareas repetitivas y manuales para mejorar productividad.",
    items: [
      "Automatizaciones administrativas",
      "Integración con Forms, Lists, Excel, SharePoint",
      "Notificaciones y aprobaciones automáticas",
      "Generación de PDFs y documentos",
      "Flujos multi-área",
      "Integración con sistemas externos"
    ]
  },
  {
    icon: Workflow,
    title: "Soluciones Digitales",
    subtitle: "Microsoft 365",
    description: "Creamos sistemas internos sin desarrollo complejo.",
    items: [
      "Bases de datos en Lists / SharePoint",
      "Formularios inteligentes para equipos",
      "Sistemas de gestión a medida",
      "Power Apps para operativas de campo",
      "SharePoint Sites como intranet",
      "Gestor documental"
    ]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Power BI",
    description: "Transformamos datos en información estratégica.",
    items: [
      "Tableros personalizados",
      "KPIs de operación, ventas, logística",
      "Conexión a Lists, Excel, SQL, APIs",
      "Modelos de datos",
      "Métricas para decisiones reales"
    ]
  },
  {
    icon: Network,
    title: "Integración & Eficiencia Digital",
    subtitle: "Ecosistema Completo",
    description: "Combinamos herramientas para crear un ecosistema eficiente y escalable.",
    items: [
      "Integración entre procesos y áreas",
      "Optimización de flujos digitales",
      "Gobernanza de Microsoft 365",
      "Estandarización digital",
      "Automatización documental y administrativa"
    ]
  }
];

export function Pillars() {
  return (
    <section id="pilares" className="py-20 bg-gradient-to-br from-[#782b8f] to-[#262261]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Nuestros 5 Pilares de Soluciones
          </h2>
          <div className="h-1 w-24 bg-white/80 mx-auto mb-8"></div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Soluciones integrales para transformar digitalmente tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#782b8f] to-[#262261] flex items-center justify-center mb-4">
                    <Icon className="size-8 text-white stroke-[1.5]" />
                  </div>
                  <h3 className="text-[#262261] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#782b8f]">
                    {pillar.subtitle}
                  </p>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 text-center">
                  {pillar.description}
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <ul className="space-y-2">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-[#782b8f] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}