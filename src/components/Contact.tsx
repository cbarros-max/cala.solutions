import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Mail, MapPin, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado! Nos contactaremos pronto.");
    setFormData({ nombre: "", empresa: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#262261] mb-4">
            Contacto
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#782b8f] to-[#4db8e8] mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            ¿Listo para digitalizar tu negocio? Conversemos sobre cómo podemos ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulario */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  placeholder="Tu nombre completo"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="empresa">Empresa</Label>
                <Input
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  required
                  placeholder="Nombre de tu empresa"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="tu@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  required
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#782b8f] to-[#262261] hover:opacity-90 gap-2"
                size="lg"
              >
                <Send className="size-5" />
                Enviar consulta
              </Button>
            </form>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#782b8f] to-[#262261] rounded-lg">
                  <MapPin className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#262261] mb-2">
                    Ubicación
                  </h3>
                  <p className="text-slate-600">
                    Comodoro Rivadavia<br />
                    Chubut, Argentina
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#782b8f] to-[#262261] rounded-lg">
                  <Mail className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#262261] mb-2">
                    Email
                  </h3>
                  <a 
                    href="mailto:info@calasolutions.com" 
                    className="text-[#782b8f] hover:text-[#262261] transition-colors"
                  >
                    info@calasolutions.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-[#262261] mb-4 text-center">
                Seguinos en Redes
              </h3>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full gap-2 border-[#782b8f] text-[#782b8f] hover:bg-gradient-to-r hover:from-[#e4405f] hover:to-[#bc2a8d] hover:text-white hover:border-transparent"
                  onClick={() => window.open('https://www.instagram.com/calasolutionsarg/', '_blank')}
                >
                  <Instagram className="size-5" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 border-[#262261] text-[#262261] hover:bg-[#0077b5] hover:text-white hover:border-transparent"
                  onClick={() => window.open('https://www.linkedin.com/company/calasolutions/', '_blank')}
                >
                  <Linkedin className="size-5" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-transparent"
                  onClick={() => window.open('https://wa.me/5492974000000', '_blank')}
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Business
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
