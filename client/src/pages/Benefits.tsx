import { Heart, Clock, Sparkles, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Más Engagement',
    description: 'Contenido que conecta con tu audiencia y genera interacción real',
    stat: '+300%',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Ahorro de Tiempo',
    description: 'Dedica tu tiempo a lo que realmente importa: tu negocio',
    stat: '20 horas',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Contenido Profesional',
    description: 'Diseño, redacción y estrategia de nivel empresarial',
    stat: '100%',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Estrategia Personalizada',
    description: 'Plan único diseñado para tus objetivos y audiencia',
    stat: 'Única',
  },
];

export default function Benefits() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-semibold text-purple-600 uppercase tracking-wide mb-3">
            Resultados Que Importan
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}>
            Beneficios que transforman tu negocio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Desde el primer mes verás cambios reales en tu presencia digital
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`scroll-reveal ${visibleItems[index] ? 'visible' : ''} group relative`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 group-hover:border-purple-300 group-hover:shadow-xl transition-all duration-300" />

              {/* Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Stat Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-600">{benefit.icon}</div>
                  </div>
                </div>

                {/* Stat Number */}
                <div className="mb-4">
                  <p className="font-bold text-gradient" style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)" }}>{benefit.stat}</p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{benefit.description}</p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}>
            Confían en nosotros cientos de emprendedores
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Desde pequeños negocios hasta empresas consolidadas, todos han visto resultados comprobables en sus redes sociales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                Ver Casos de Éxito
              </button>
            </a>
            <a href="https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20me%20gustaría%20conocer%20más%20sobre%20vuestros%20servicios" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Contactar por WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
