import { useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/index.js';
import './Services.css';

export default function Services() {
  const { serviceId } = useParams();

  const displayedServices = serviceId
    ? SERVICES.filter((s) => s.id === serviceId)
    : SERVICES;

  // Si el servicio no existe
  if (serviceId && displayedServices.length === 0) {
    return (
      <main className="services-page">
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
            <h1>Servicio no encontrado</h1>
            <p>El servicio que buscas no existe o fue eliminado.</p>
          </div>
        </section>
      </main>
    );
  }

  const heroTitle = serviceId
    ? displayedServices[0].title
    : 'Nuestros Servicios';

  const heroSubtitle = serviceId
    ? displayedServices[0].fullDesc
    : 'Cuatro especialidades diseñadas para cubrir tus necesidades con la más alta calidad.';

  return (
    <main className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
            alt="Nuestros servicios"
          />
          <div className="page-hero__overlay" />
        </div>

        <div className="container page-hero__content fade-up">
          <p className="section-label">Lo que ofrecemos</p>
          <h1 className="page-hero__title">{heroTitle}</h1>
          <p className="page-hero__subtitle">{heroSubtitle}</p>
        </div>
      </section>

      {/* Servicios */}
      {displayedServices.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section service-detail ${
            i % 2 === 1 ? 'service-detail--alt' : ''
          }`}
        >
          <div className="container service-detail__inner">
            <div className="service-detail__image fade-up">
              <img src={s.image} alt={s.title} />
            </div>

            <div className="service-detail__content fade-up delay-2">
              <p className="section-label">Servicio</p>

              <div className="blue-line" />

              <h2 className="section-title">{s.title}</h2>

              <p className="service-detail__desc">{s.fullDesc}</p>

              <h4 className="service-detail__sub-title">
                {s.id === 'financiamiento'
                  ? 'Características'
                  : 'Especialidades'}
              </h4>

              <ul className="service-detail__list">
                {s.subservices.map((sub) => (
                  <li key={sub}>
                    <CheckCircle
                      size={16}
                      color="var(--color-blue)"
                      style={{ marginRight: '8px' }}
                    />
                    {sub}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/51999999999?text=${encodeURIComponent(
                  `Hola, me gustaría recibir información sobre el servicio "${s.title}".`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Solicitar este servicio
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* Próximamente */}
      {!serviceId && (
        <section className="section coming-soon">
          <div className="container coming-soon__inner fade-up">
            <div className="coming-soon__content">
              <p className="section-label">En desarrollo</p>

              <div className="blue-line" />

              <h2 className="section-title">Próximamente</h2>

              <p className="section-subtitle">
                Seguimos creciendo. Nuevos servicios se incorporarán pronto a
                nuestro portafolio para ofrecerte soluciones aún más completas.
              </p>
            </div>

            <div className="coming-soon__badge">
              <span>Nuevos servicios</span>
              <strong>En preparación</strong>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}