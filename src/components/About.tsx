import { Target, Eye, Sparkles } from "lucide-react";

const valores = [
  "Eficiencia",
  "Innovación aplicada",
  "Transparencia",
  "Simplicidad",
  "Enfoque 100% al cliente",
  "Digitalización accesible"
];

export function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#262261] mb-8">
              ¿Quiénes Somos?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#782b8f] to-[#262261] mx-auto mb-10"></div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Somos una consultora de transformación digital enfocada en procesos, automatización 
              y analítica de datos. Acompañamos a empresas que buscan modernizar su operación sin 
              grandes costos, aprovechando el ecosistema Microsoft 365 y herramientas low-code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <div className="inline-flex p-4 bg-gradient-to-br from-[#782b8f] to-[#262261] rounded-full mb-4">
                <Target className="size-8 text-white" />
              </div>
              <h3 className="text-[#262261] mb-4">
                Misión
              </h3>
              <p className="text-slate-600">
                Hacer que la tecnología sea un aliado estratégico en la eficiencia del negocio, 
                digitalizando procesos y creando soluciones simples e inteligentes para las empresas.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <div className="inline-flex p-4 bg-gradient-to-br from-[#782b8f] to-[#262261] rounded-full mb-4">
                <Eye className="size-8 text-white" />
              </div>
              <h3 className="text-[#262261] mb-4">
                Visión
              </h3>
              <p className="text-slate-600">
                Ser la consultora líder del sur argentino en automatización, Power Platform y 
                mejora continua, impulsando negocios más ágiles, productivos y eficientes.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <div className="inline-flex p-4 bg-gradient-to-br from-[#782b8f] to-[#262261] rounded-full mb-4">
                <Sparkles className="size-8 text-white" />
              </div>
              <h3 className="text-[#262261] mb-4">
                Valores
              </h3>
              <ul className="text-slate-600 space-y-2">
                {valores.map((valor, index) => (
                  <li key={index} className="text-sm">• {valor}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}