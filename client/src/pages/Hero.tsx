import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-slide-in-left">
            {/* Logo Badge */}
            <div className="inline-flex items-center space-x-2 w-fit">
              <img
                src="/logo.svg"
                alt="Mi Punto en el Mapa"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <p className="font-semibold text-purple-600 uppercase tracking-wide" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Gestión de Redes Sociales
              </p>
              <h1 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)' }}>
                <span className="text-gradient">Crece en Redes Sociales</span>
                <br />
                <span className="text-slate-900">sin complicaciones</span>
              </h1>
              <p className="text-slate-600 leading-relaxed max-w-xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                Nos encargamos de tu estrategia, contenido y publicaciones. Tú solo enfócate en tu negocio mientras generamos resultados reales.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-primary text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20me%20gustaría%20conocer%20más%20sobre%20vuestros%20servicios%20de%20redes%20sociales" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div
            ref={videoRef}
            className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-slide-up"
          >
            {/* Video Container */}
            <div className="absolute inset-0 bg-slate-900">
              {isVideoLoaded && (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JDeZj0OlmQA?autoplay=1&mute=1&controls=1&modestbranding=1"
                  title="Mi Punto en el Mapa - Gestión de Redes Sociales"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
              {!isVideoLoaded && (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
                  <Play className="h-16 w-16 text-white opacity-50" />
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 md:mt-24">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
