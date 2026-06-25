import { MessageCircle, Share2, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import './Contact.css';

const CONTACT_INFO = [
  {
    icon: <MessageCircle size={22} />,
    label: 'WhatsApp',
    value: '+51 999 999 999',
    href: 'https://wa.me/51999999999',
    color: '#25D366',
  },
  {
    icon: <Share2 size={22} />,
    label: 'Facebook',
    value: 'Grupo Rules',
    href: 'https://facebook.com/gruporules',
    color: '#1877F2',
  },
  {
    icon: <Mail size={22} />,
    label: 'Correo electrónico',
    value: 'contacto@gruporules.com',
    href: 'mailto:contacto@gruporules.com',
    color: 'var(--color-blue)',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Dirección',
    value: 'Cusco, Perú',
    href: null,
    color: '#E74C3C',
  },
  {
    icon: <Clock size={22} />,
    label: 'Horario de atención',
    value: 'Lun–Sáb, 8:00 AM – 6:00 PM',
    href: null,
    color: 'var(--color-blue)',
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80" alt="" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content fade-up">
          <p className="section-label">Comunícate con nosotros</p>
          <h1 className="page-hero__title">Contacto</h1>
          <p className="page-hero__subtitle">Estamos disponibles para atender todas tus consultas y proyectos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Info */}
          <div className="contact-info fade-up">
            <p className="section-label">Canales de contacto</p>
            <div className="blue-line" />
            <h2 className="section-title">Hablemos</h2>
            <p className="contact-info__text">
              Elige el canal que prefieras. Respondemos con rapidez y con toda la atención que mereces.
            </p>
            <div className="contact-cards">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="contact-card">
                  <span className="contact-card__icon" style={{ color: c.color }}>
                    {c.icon}
                  </span>
                  <div>
                    <span className="contact-card__label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card__value">
                        {c.value}
                      </a>
                    ) : (
                      <span className="contact-card__value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-up delay-2">
            <form className="contact-form-full" onSubmit={e => e.preventDefault()}>
              <h3 className="contact-form-full__title">Envíanos un mensaje</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre completo *</label>
                  <input type="text" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label>Teléfono</label>
                  <input type="tel" placeholder="+51 999 999 999" />
                </div>
              </div>
              <div className="form-group">
                <label>Correo electrónico *</label>
                <input type="email" placeholder="tu@correo.com" required />
              </div>
              <div className="form-group">
                <label>Servicio de interés</label>
                <select>
                  <option value="">Selecciona un servicio</option>
                  <option>Diseño de Interiores</option>
                  <option>Topografía</option>
                  <option>Financiamiento con Garantía</option>
                  <option>Productos de Melamina</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mensaje *</label>
                <textarea placeholder="Cuéntanos sobre tu proyecto o consulta..." rows={5} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Enviar mensaje <ArrowRight size={16} />
              </button>
            </form>

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div className="map-placeholder__inner">
                <MapPin size={32} color="var(--color-blue)" />
                <p>Mapa disponible próximamente</p>
                <span>Cusco, Perú</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
