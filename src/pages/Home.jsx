import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { SERVICES, PROJECTS, WHY_US } from '../data/index.js';
import './Home.css';

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
            alt="Interior design"
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
            <Link to="/contacto" className="btn btn-primary">
              Solicitar información <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/51999999999?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={16} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Descubrir</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Lo que ofrecemos</p>
            <div className="blue-line" />
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">
              Cuatro áreas de especialización diseñadas para acompañarte en cada etapa de tu proyecto.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <article key={s.id} className={`service-card fade-up delay-${i + 1}`}>
                <div className="service-card__image">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="service-card__overlay" />
                </div>
                <div className="service-card__body">
                  <span className="service-card__icon">{s.icon}</span>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.shortDesc}</p>
                  <Link to={`/servicios#${s.id}`} className="service-card__link">
                    Más información <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/servicios" className="btn btn-ghost">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* ABOUT TEASER */}
      <section className="section about-teaser">
        <div className="container about-teaser__inner">
          <div className="about-teaser__image">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
              alt="Sobre Grupo Rules"
            />
            <div className="about-teaser__badge">
              <span className="about-teaser__badge-num">4</span>
              <span className="about-teaser__badge-text">Especialidades</span>
            </div>
          </div>
          <div className="about-teaser__content fade-up">
            <p className="section-label">Quiénes somos</p>
            <div className="blue-line" />
            <h2 className="section-title">Sobre Grupo Rules</h2>
            <p className="about-teaser__text">
              Grupo Rules nace con el propósito de brindar soluciones profesionales y personalizadas,
              acompañando a cada cliente desde la planificación hasta la ejecución de sus proyectos.
            </p>
            <p className="about-teaser__quote">
              "Transformamos ideas en proyectos reales."
            </p>
            <Link to="/nosotros" className="btn btn-outline">
              Conocer más <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* PROJECTS */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Nuestro trabajo</p>
            <div className="blue-line" />
            <h2 className="section-title">Proyectos Destacados</h2>
            <p className="section-subtitle">
              Una selección de los trabajos que mejor representan nuestra calidad y dedicación.
            </p>
          </div>
          <div className="projects-grid">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <article key={p.id} className={`project-card fade-up delay-${i + 1}`}>
                <div className="project-card__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="project-card__body">
                  <span className="project-card__cat">{p.categoryLabel}</span>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>
                  <span className="project-card__year">{p.year}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/proyectos" className="btn btn-ghost">
              Ver todos los proyectos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* WHY US */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Nuestra diferencia</p>
            <div className="blue-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title">¿Por qué elegir Grupo Rules?</h2>
          </div>
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <div key={i} className={`why-card fade-up delay-${i + 1}`}>
                <span className="why-card__icon">{item.icon}</span>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* CONTACT FORM */}
      <section className="section contact-section">
        <div className="container contact-inner">
          <div className="contact-text fade-up">
            <p className="section-label">Hablemos</p>
            <div className="blue-line" />
            <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
            <p className="section-subtitle">
              Cuéntanos tu idea y te respondemos a la brevedad con una propuesta a tu medida.
            </p>
            <ul className="contact-benefits">
              {['Respuesta en menos de 24 horas', 'Consulta inicial sin costo', 'Atención personalizada'].map(b => (
                <li key={b}><CheckCircle size={16} color="var(--color-blue)" /> {b}</li>
              ))}
            </ul>
          </div>
          <form className="contact-form fade-up delay-2" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input type="tel" placeholder="+51 999 999 999" />
              </div>
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="tu@correo.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="Cuéntanos sobre tu proyecto o consulta..." rows={4} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar consulta <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
