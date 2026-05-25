import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import Services from './Services';
import Pricing from './Pricing';
import Benefits from './Benefits';
import FAQ from './FAQ';
import CalendlySection from './Calendly';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Mi Punto en el Mapa"
              className="h-8 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Servicios
            </a>
            <a href="#planes" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Planes
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>
          <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
              Consulta Gratuita
            </button>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="problema">
          <ProblemSolution />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="planes">
          <Pricing />
        </section>
        <section id="beneficios">
          <Benefits />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="agendar">
          <CalendlySection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
