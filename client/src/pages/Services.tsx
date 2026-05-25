import { Sparkles, Zap, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Contenido Profesional',
    description: 'Creamos contenido atractivo y personalizado que refleja la identidad de tu marca y conecta con tu audiencia.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Publicaciones Estratégicas',
    description: 'Publicamos en los momentos óptimos con una estrategia diseñada para maximizar alcance y engagement.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Estrategia de Crecimiento',
    description: 'Desarrollamos un plan personalizado para crecer tu comunidad, aumentar conversiones y generar leads cualificados.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Administración Completa',
    description: 'Gestionamos comentarios, mensajes, comunidad y reportes mensuales para que veas tus resultados en números.',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Services() {
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
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-semibold text-purple-300 uppercase tracking-wide mb-3">
            Lo Que Incluye Nuestro Servicio
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}>
            Gestión Completa de Redes Sociales
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Todo lo que necesitas para tener una presencia digital profesional y rentable
          </p>
        </div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-reveal ${visibleItems[index] ? 'visible' : ''} group bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-purple-100 leading-relaxed">{service.description}</p>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-pink-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-purple-100 text-lg mb-6">
            Todo esto adaptado a tu presupuesto y necesidades específicas
          </p>
          <div className="inline-flex items-center gap-4 text-sm text-purple-200">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Contenido original
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Reportes mensuales
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Soporte dedicado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
