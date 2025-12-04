import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoIcon from "figma:asset/950654ba6e7f1609ca9f4217d1c93a0fb3a998ab.png";

const navItems = [
  { name: "Inicio", id: "hero" },
  { name: "Sobre Nosotros", id: "sobre-nosotros" },
  { name: "Pilares", id: "pilares" },
  { name: "Servicios", id: "servicios" },
  { name: "Casos de Éxito", id: "casos-exito" },
  { name: "Contacto", id: "contacto" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logoIcon} alt="CALA" className="h-8" />
            <span className="text-[#262261]">CALA SOLUTIONS</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-[#782b8f]"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-slate-600 hover:text-[#782b8f]"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
