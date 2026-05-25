import { useEffect } from 'react';

export default function CalendlySection() {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-semibold text-purple-600 uppercase tracking-wide mb-3" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
            Agenda Tu Consulta
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            <span className="text-gradient">Elige tu horario</span> y comencemos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Selecciona un horario que se adapte a ti. La consulta es completamente gratuita y sin compromiso.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mipuntoenelmapa/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Alternative CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            ¿Prefieres contactarnos por WhatsApp?
          </p>
          <a href="https://wa.me/573195115520?text=Hola%20Mi%20Punto%20en%20el%20Mapa,%20me%20gustaría%20agendar%20una%20consulta%20gratuita" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.783 1.14L4.25 3.75l1.213 4.373a9.901 9.901 0 00-1.605 4.584c0 5.487 4.144 9.92 9.23 9.92 2.412 0 4.68-.896 6.39-2.353l1.537 4.258-4.356-1.203a9.9 9.9 0 004.784-1.14c5.087 0 9.23-4.433 9.23-9.921 0-2.412-.896-4.68-2.353-6.39L20.25 4.75l4.356 1.203a9.9 9.9 0 00-1.14-4.784c-5.087 0-9.23 4.433-9.23 9.921z" />
              </svg>
              Contactar por WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
