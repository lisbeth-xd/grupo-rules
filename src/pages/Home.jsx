import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const WA = "https://wa.me/51999999999?text=Hola,%20quiero%20más%20información.";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
            alt="Grupo Rules"
            className="hero__img"
          />
          <div className="hero__overlay" />
          <div className="hero__diagonal" />
        </div>
        <div className="container hero__content fade-up">
          <p className="section-label">Bienvenido a</p>
          <h1 className="hero__title">Grupo Rules</h1>
          <p className="hero__subtitle">
            Soluciones profesionales en diseño de interiores, topografía,<br />
            financiamiento con garantía y productos de melamina.
          </p>
          <div className="hero__actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link to="/contacto" className="btn btn-outline-white">
              Contacto <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Descubrir</span>
        </div>
      </section>

      {/* VITRINA: Servicios */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Lo que ofrecemos</p>
            <div className="blue-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">Cuatro especialidades pensadas para cubrir tus necesidades.</p>
          </div>
          <div className="home-services-grid">
            <Link to="/servicios#financiamiento" className="home-service-card">
              <span className="home-service-card__icon">💰</span>
              <h3>Préstamos con Garantía</h3>
              <p>Financiamiento rápido y transparente.</p>
            </Link>
            <Link to="/servicios#diseno-interiores" className="home-service-card">
              <span className="home-service-card__icon">🏠</span>
              <h3>Diseño de Interiores</h3>
              <p>Espacios funcionales y a tu medida.</p>
            </Link>
            <Link to="/servicios#topografia" className="home-service-card">
              <span className="home-service-card__icon">📐</span>
              <h3>Topografía</h3>
              <p>Levantamientos y planos precisos.</p>
            </Link>
            <Link to="/servicios#melamina" className="home-service-card">
              <span className="home-service-card__icon">🛋️</span>
              <h3>Productos de Melamina</h3>
              <p>Muebles a medida de alta durabilidad.</p>
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/servicios" className="btn btn-outline">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* VITRINA: Proyectos */}
      <section className="section section--surface">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Nuestro trabajo</p>
          <div className="blue-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">Proyectos Realizados</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
            Una muestra de soluciones reales para clientes reales.
          </p>
          <Link to="/proyectos" className="btn btn-primary">
            Ver galería de proyectos <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <div className="geo-divider" />

      {/* CTA Contacto */}
      <section className="section section--blue">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">¿Listo para empezar?</p>
          <div className="blue-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">Conversemos sobre tu proyecto</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
            Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución.
          </p>
          <div className="hero__actions" style={{ justifyContent: 'center' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link to="/contacto" className="btn btn-primary">
              Ir a Contacto <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}