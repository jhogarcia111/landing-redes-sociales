import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cómo funciona el proceso de onboarding?',
    answer:
      'Comenzamos con una consulta gratuita de 30 minutos donde conocemos tu negocio, objetivos y audiencia. Luego creamos una estrategia personalizada y comenzamos con la creación de contenido. Todo el proceso es simple y transparente.',
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer:
      'Sí, absolutamente. Puedes cambiar de plan, pausar o cancelar tu suscripción en cualquier momento sin penalidades. Queremos que estés satisfecho con nuestro servicio.',
  },
  {
    question: '¿Qué redes sociales manejáis?',
    answer:
      'Trabajamos con las principales plataformas: Instagram, Facebook, TikTok, LinkedIn, Twitter/X y YouTube. Según tu plan, podemos gestionar entre 1 y 5 plataformas simultáneamente.',
  },
  {
    question: '¿Recibiré reportes de resultados?',
    answer:
      'Sí, todos nuestros planes incluyen reportes mensuales detallados. En el plan Pro recibirás reportes semanales. Podrás ver métricas de engagement, alcance, crecimiento de seguidores y conversiones.',
  },
  {
    question: '¿Cuánto tiempo tarda en verse resultados?',
    answer:
      'Los primeros resultados son visibles en 2-4 semanas. Sin embargo, los mejores resultados se ven después de 2-3 meses de estrategia consistente. Esto depende de tu industria y objetivos.',
  },
  {
    question: '¿Qué pasa si no estoy satisfecho?',
    answer:
      'Tenemos una garantía de satisfacción. Si no estás contento en los primeros 30 días, podemos ajustar la estrategia o devolverte tu dinero. Tu éxito es nuestro éxito.',
  },
  {
    question: '¿Incluye diseño gráfico personalizado?',
    answer:
      'Sí, todos nuestros planes incluyen diseño gráfico profesional para cada publicación. Usamos herramientas profesionales y seguimos las tendencias actuales de diseño.',
  },
  {
    question: '¿Cómo es el soporte y comunicación?',
    answer:
      'Tenemos comunicación constante a través de WhatsApp, email y reuniones mensuales. En el plan Pro, tendrás acceso a soporte 24/7 y reuniones semanales de estrategia.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(faqs.length).fill(false));
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
      { threshold: 0.1 }
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
            Preguntas Frecuentes
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}>
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestros servicios de gestión de redes sociales
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={containerRef} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`scroll-reveal ${visibleItems[index] ? 'visible' : ''} bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-purple-300 transition-all duration-300`}
              style={{
                transitionDelay: `${(index % 3) * 100}ms`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-purple-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-slate-900 text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 py-5 md:py-6 bg-purple-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-600 mb-6">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Agendar Consulta Gratuita
              </button>
            </a>
            <a href="https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20tengo%20una%20pregunta%20sobre%20vuestros%20servicios" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                Contactar por WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
