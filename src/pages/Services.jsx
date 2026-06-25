import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/index.js';
import './Services.css';

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <main className="services-page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80" alt="" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content fade-up">
          <p className="section-label">Lo que ofrecemos</p>
          <h1 className="page-hero__title">Nuestros Servicios</h1>
          <p className="page-hero__subtitle">Cuatro especialidades diseñadas para cubrir tus necesidades con la más alta calidad.</p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section service-detail ${i % 2 === 1 ? 'service-detail--alt' : ''}`}
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
                {s.id === 'financiamiento' ? 'Características' : 'Especialidades'}
              </h4>
              <ul className="service-detail__list">
                {s.subservices.map(sub => (
                  <li key={sub}>
                    <CheckCircle size={15} color="var(--color-blue)" />
                    {sub}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/51999999999?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20"
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

      {/* Coming soon */}
      <section className="section coming-soon">
        <div className="container coming-soon__inner fade-up">
          <div className="coming-soon__content">
            <p className="section-label">En desarrollo</p>
            <div className="blue-line" />
            <h2 className="section-title">Próximamente</h2>
            <p className="section-subtitle">
              Seguimos creciendo. Nuevos servicios se incorporarán pronto a nuestro portafolio
              para ofrecerte soluciones aún más completas.
            </p>
          </div>
          <div className="coming-soon__badge">
            <span>Nuevos servicios</span>
            <strong>En preparación</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
