import { ArrowRight, MessageCircle, CheckCircle, ChevronRight } from 'lucide-react';
import {
  PROJECTS,
  PRESTAMOS_FEATURES,
  DISENOS_SERVICIOS,
  DISENOS_GALERIA,
  TOPOGRAFIA_SERVICIOS,
  TOPOGRAFIA_GALERIA,
  PRODUCTOS,
} from '../data/index.js';
import './Home.css';

const WA = "https://wa.me/51999999999?text=Hola,%20quiero%20más%20información.";

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
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
            <button
              className="btn btn-outline-white"
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            >
              Contacto <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Descubrir</span>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Nuestro trabajo</p>
            <div className="blue-line" />
            <h2 className="section-title">Proyectos Realizados</h2>
            <p className="section-subtitle">Una selección de trabajos que reflejan nuestra calidad y dedicación.</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <article key={p.id} className={`project-card fade-up delay-${(i % 4) + 1}`}>
                <div className="project-card__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="project-card__body">
                  <span className="project-card__cat">{p.category}</span>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    Ver más <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* ── PRÉSTAMOS ── */}
      <section id="prestamos" className="section section--surface">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Servicio financiero</p>
            <div className="blue-line" />
            <h2 className="section-title">Préstamos con Garantía</h2>
            <p className="section-subtitle">
              Soluciones financieras rápidas mediante garantía de bienes, con atención personalizada y procesos transparentes.
            </p>
          </div>
          <div className="features-grid">
            {PRESTAMOS_FEATURES.map((f, i) => (
              <div key={i} className={`feature-card fade-up delay-${i + 1}`}>
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={16} /> Solicitar información
            </a>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* ── DISEÑOS ── */}
      <section id="disenos" className="section">
        <div className="container">
          <div className="disenos-layout">
            <div className="disenos-content fade-up">
              <p className="section-label">Servicio</p>
              <div className="blue-line" />
              <h2 className="section-title">Diseño de Interiores</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Transformamos espacios para hacerlos más funcionales, cómodos y atractivos. Cada ambiente refleja tu personalidad y estilo de vida.
              </p>
              <ul className="disenos-lista">
                {DISENOS_SERVICIOS.map(s => (
                  <li key={s}><CheckCircle size={16} color="var(--color-blue)" /> {s}</li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 28 }}>
                Solicitar cotización <ArrowRight size={16} />
              </a>
            </div>
            <div className="disenos-galeria fade-up delay-2">
              {DISENOS_GALERIA.map((img, i) => (
                <div key={i} className="disenos-galeria__item">
                  <img src={img} alt={`Diseño ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* ── TOPOGRAFÍA ── */}
      <section id="topografia" className="section section--blue">
        <div className="container">
          <div className="section-header section-header--center section-header--white">
            <p className="section-label">Servicio</p>
            <div className="blue-line" style={{ margin: '0 auto 20px', background: 'rgba(255,255,255,0.4)' }} />
            <h2 className="section-title">Topografía</h2>
            <p className="section-subtitle">
              Servicios topográficos precisos para proyectos de construcción y gestión territorial.
            </p>
          </div>
          <div className="topo-grid">
            {TOPOGRAFIA_SERVICIOS.map((s, i) => (
              <div key={i} className={`topo-card fade-up delay-${i + 1}`}>
                <span className="topo-card__icon">{s.icon}</span>
                <h3 className="topo-card__title">{s.title}</h3>
                <p className="topo-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="topo-galeria">
            {TOPOGRAFIA_GALERIA.map((img, i) => (
              <div key={i} className="topo-galeria__item">
                <img src={img} alt={`Topografía ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              <MessageCircle size={16} /> Solicitar información
            </a>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* ── PRODUCTOS ── */}
      <section id="productos" className="section section--surface">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Catálogo</p>
            <div className="blue-line" />
            <h2 className="section-title">Productos de Melamina</h2>
            <p className="section-subtitle">Muebles funcionales y personalizados fabricados a tu medida.</p>
          </div>
          <div className="productos-grid">
            {PRODUCTOS.map((p, i) => (
              <article key={p.id} className={`producto-card fade-up delay-${(i % 3) + 1}`}>
                <div className="producto-card__image">
                  <img src={p.image} alt={p.nombre} loading="lazy" />
                </div>
                <div className="producto-card__body">
                  <h3 className="producto-card__title">{p.nombre}</h3>
                  <p className="producto-card__desc">{p.desc}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-outline producto-card__btn">
                    Consultar <MessageCircle size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* ── CONTACTO ── */}
      <section id="contacto" className="section">
        <div className="container contact-layout">
          <div className="contact-info fade-up">
            <p className="section-label">Hablemos</p>
            <div className="blue-line" />
            <h2 className="section-title">Contáctanos</h2>
            <p className="section-subtitle" style={{ marginBottom: 28 }}>
              Estamos disponibles para atender tus consultas y proyectos. Elige el canal que prefieras.
            </p>
            <div className="contact-channels">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="channel-card">
                <span className="channel-card__icon" style={{ background: '#e8f5e9', color: '#25D366' }}>
                  <MessageCircle size={20} />
                </span>
                <div>
                  <span className="channel-card__label">WhatsApp</span>
                  <span className="channel-card__value">+51 999 999 999</span>
                </div>
              </a>
              <a href="https://facebook.com/gruporules" target="_blank" rel="noopener noreferrer" className="channel-card">
                <span className="channel-card__icon" style={{ background: '#e8eaf6', color: '#1877F2' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </span>
                <div>
                  <span className="channel-card__label">Facebook</span>
                  <span className="channel-card__value">Grupo Rules</span>
                </div>
              </a>
              <a href="mailto:contacto@gruporules.com" className="channel-card">
                <span className="channel-card__icon" style={{ background: 'var(--color-blue-light)', color: 'var(--color-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <span className="channel-card__label">Correo</span>
                  <span className="channel-card__value">contacto@gruporules.com</span>
                </div>
              </a>
            </div>
            <div className="map-placeholder">
              <p>📍 Cusco, Perú — Mapa próximamente</p>
            </div>
          </div>

          <form className="contact-form fade-up delay-2" onSubmit={e => e.preventDefault()}>
            <h3 className="contact-form__title">Envíanos un mensaje</h3>
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
              <label>Servicio de interés</label>
              <select>
                <option value="">Selecciona un servicio</option>
                <option>Préstamos con Garantía</option>
                <option>Diseño de Interiores</option>
                <option>Topografía</option>
                <option>Productos de Melamina</option>
              </select>
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="Cuéntanos sobre tu proyecto o consulta..." rows={4} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar mensaje <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}