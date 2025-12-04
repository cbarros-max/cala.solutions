import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import logoIcon from "figma:asset/950654ba6e7f1609ca9f4217d1c93a0fb3a998ab.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#262261] to-[#782b8f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="CALA" className="h-10" />
              <span className="text-xl">CALA SOLUTIONS</span>
            </div>
            <p className="text-purple-200 text-sm">
              Transformando negocios a través de la eficiencia y la digitalización
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4">
              Contacto
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span className="text-purple-200">
                  Comodoro Rivadavia, Chubut, Argentina
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:info@calasolutions.com" 
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  info@calasolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="mb-4">
              Seguinos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/calasolutionsarg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/calasolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-purple-200 text-sm">
            © {new Date().getFullYear()} CALA Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
