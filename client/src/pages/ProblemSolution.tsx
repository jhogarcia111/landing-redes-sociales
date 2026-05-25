import { AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProblemItem {
  icon: React.ReactNode;
  problem: string;
  solution: string;
}

const problems: ProblemItem[] = [
  {
    icon: <AlertCircle className="w-8 h-8" />,
    problem: '¿Sin tiempo para redes sociales?',
    solution: 'Nos encargamos de todo: contenido, publicaciones y estrategia',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    problem: '¿Servicios muy caros?',
    solution: 'Planes accesibles desde $199/mes con resultados reales',
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    problem: '¿Sin resultados visibles?',
    solution: 'Estrategia personalizada con reportes mensuales comprobables',
  },
];

export default function ProblemSolution() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
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
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-semibold text-purple-600 uppercase tracking-wide mb-3">
            Tu Desafío, Nuestra Solución
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            <span className="text-gradient">Sabemos exactamente</span> lo que necesitas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Basados en el diálogo con miles de emprendedores, identificamos tus tres mayores obstáculos
          </p>
        </div>

        {/* Problem-Solution Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className={`scroll-reveal ${visibleItems[index] ? 'visible' : ''} bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Problem Section */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                  <div className="text-red-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.problem}</h3>
                <p className="text-sm text-slate-600">El problema que enfrentas</p>
              </div>

              {/* Arrow Divider */}
              <div className="flex items-center justify-center my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1" />
                <Zap className="w-5 h-5 text-purple-600 mx-2" />
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1" />
              </div>

              {/* Solution Section */}
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Nuestra Solución</h4>
                <p className="text-sm text-slate-600">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-600 mb-6">
            ¿Reconoces alguno de estos problemas? Tienes una solución a tu alcance.
          </p>
          <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Agendar Consulta Gratuita
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
