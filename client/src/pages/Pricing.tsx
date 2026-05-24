import { Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: { name: string; included: boolean }[];
  popular: boolean;
  color: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Básico',
    price: 199,
    description: 'Perfecto para comenzar',
    popular: false,
    color: 'from-blue-500 to-cyan-500',
    features: [
      { name: '1-2 redes sociales', included: true },
      { name: '8-12 posts mensuales', included: true },
      { name: 'Contenido profesional', included: true },
      { name: 'Reporte mensual', included: true },
      { name: 'Community management básico', included: true },
      { name: 'Estrategia personalizada', included: false },
      { name: 'Video editing', included: false },
      { name: 'Ads management', included: false },
    ],
  },
  {
    name: 'Crecimiento',
    price: 399,
    description: 'La opción más popular',
    popular: true,
    color: 'from-purple-500 to-pink-500',
    features: [
      { name: '2-3 redes sociales', included: true },
      { name: '15-20 posts mensuales', included: true },
      { name: 'Contenido profesional', included: true },
      { name: 'Reporte mensual detallado', included: true },
      { name: 'Community management completo', included: true },
      { name: 'Estrategia personalizada', included: true },
      { name: 'Video editing básico', included: true },
      { name: 'Ads management', included: false },
    ],
  },
  {
    name: 'Pro',
    price: 699,
    description: 'Para máximo crecimiento',
    popular: false,
    color: 'from-orange-500 to-red-500',
    features: [
      { name: '3-5 redes sociales', included: true },
      { name: '25-30 posts mensuales', included: true },
      { name: 'Contenido profesional', included: true },
      { name: 'Reportes semanales', included: true },
      { name: 'Community management 24/7', included: true },
      { name: 'Estrategia personalizada avanzada', included: true },
      { name: 'Video editing profesional', included: true },
      { name: 'Ads management y optimización', included: true },
    ],
  },
];

export default function Pricing() {
  const [visiblePlans, setVisiblePlans] = useState<boolean[]>([false, false, false]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
            setVisiblePlans((prev) => {
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
            Planes y Precios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Elige el plan</span> perfecto para ti
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Todos los planes incluyen consulta gratuita inicial y soporte dedicado
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`scroll-reveal ${visiblePlans[index] ? 'visible' : ''} relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'md:scale-105 md:shadow-2xl ring-2 ring-purple-600'
                  : 'hover:shadow-xl'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 text-center font-semibold text-sm">
                  ⭐ Más Popular
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col h-full">
                {/* Plan Header */}
                <div className={`mb-8 ${plan.popular ? 'mt-8' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      ${plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">/mes</span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://calendly.com/mipuntoenelmapa/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      Comenzar Ahora
                    </button>
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-slate-700 font-medium' : 'text-slate-400'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Alternative */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-600 text-center mb-3">
                    ¿Prefieres consultar por WhatsApp?
                  </p>
                  <a
                    href={`https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20me%20interesa%20el%20plan%20${plan.name}%20de%20redes%20sociales`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="w-full py-2 px-4 bg-green-50 text-green-700 rounded-lg font-semibold text-sm hover:bg-green-100 transition-colors">
                      Consultar por WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-600 mb-4">
            ¿Necesitas un plan personalizado? Todos nuestros planes son flexibles y adaptables.
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
