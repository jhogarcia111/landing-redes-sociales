import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Mi Punto en el Mapa"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-lg leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>Mi Punto</span>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase leading-none mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>en el Mapa</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tu aliado estratégico en gestión de redes sociales. Transformamos tu presencia digital en resultados reales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#planes" className="text-slate-400 hover:text-white transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-slate-400">Gestión de Redes Sociales</span>
              </li>
              <li>
                <span className="text-slate-400">Creación de Contenido</span>
              </li>
              <li>
                <span className="text-slate-400">Estrategia Digital</span>
              </li>
              <li>
                <span className="text-slate-400">Community Management</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20me%20gustaría%20conocer%20más%20sobre%20vuestros%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+57 319 511 5520</span>
              </a>
              <a
                href="mailto:mipuntoenelmapa@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                <span>mipuntoenelmapa@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Mi Punto en el Mapa. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20me%20gustaría%20conocer%20más%20sobre%20vuestros%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://calendly.com/mipuntoenelmapa/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
              title="Calendly"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
              Consulta Gratuita
            </button>
          </a>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-slate-500">
          <span>Política de Privacidad</span>
          <span>•</span>
          <span>Términos de Servicio</span>
          <span>•</span>
          <span>Política de Cookies</span>
        </div>
      </div>
    </footer>
  );
}
