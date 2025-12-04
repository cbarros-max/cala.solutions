import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, Building2 } from "lucide-react";

const clients = [
  {
    name: "ALFA Construcciones SRL",
    industry: "Construcción",
    description: "Digitalización completa de gestión de flota y documentación",
    solutions: [
      "Digitalización de documentación de flota",
      "Sistema de control y gestión en SharePoint",
      "Formularios para inspecciones, mantenimientos y parte diario",
      "Flujos automáticos de alertas, vencimientos y generación de documentos",
      "Integración con Power BI para control operativo"
    ]
  },
  {
    name: "Sin Frontera 3D",
    industry: "Manufactura Digital",
    description: "Sistema integral de gestión de pedidos y producción",
    solutions: [
      "Sistema completo de gestión de pedidos en Microsoft Lists",
      "Power Automate para automatización de procesos",
      "Paneles de control en Power BI para analizar tiempos y producción",
      "Optimización de flujos administrativos",
      "Integración formularios → listas → tableros"
    ]
  },
  {
    name: "Comercios Locales y PYMEs",
    industry: "Retail & Servicios",
    description: "Soluciones digitales adaptadas a cada negocio",
    solutions: [
      "Formularios digitales para pedidos e insumos",
      "Sistemas internos basados en SharePoint",
      "Tableros para análisis de ventas, costos y productividad",
      "Automatización documental",
      "Digitalización de procesos administrativos"
    ]
  },
  {
    name: "Empresas de Servicios Petroleros",
    industry: "Energía & Petróleo",
    description: "Eficiencia operativa y control de campo",
    solutions: [
      "Formularios operativos para equipos en campo",
      "Control de flota y recursos",
      "Gestión digital de proyectos",
      "Automatizaciones administrativas",
      "Eficiencia en reportes operativos"
    ]
  }
];

export function Clients() {
  return (
    <section id="casos-exito" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#262261] mb-4">
            Casos de Éxito
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#782b8f] to-[#262261] mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Resultados reales en empresas que digitalizaron sus operaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <Card key={index} className="p-8 border-2 border-slate-200 hover:border-[#782b8f] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#782b8f] to-[#262261] rounded-lg flex-shrink-0">
                  <Building2 className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#262261] mb-2">
                    {client.name}
                  </h3>
                  <Badge variant="secondary" className="bg-purple-100 text-[#782b8f] mb-3">
                    {client.industry}
                  </Badge>
                  <p className="text-slate-600 text-sm">
                    {client.description}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[#262261] mb-3 text-sm">
                  Soluciones Implementadas
                </h4>
                <ul className="space-y-2">
                  {client.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-[#782b8f] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}