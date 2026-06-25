import { VALUES } from '../data/index.js';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80" alt="" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content fade-up">
          <p className="section-label">Conócenos</p>
          <h1 className="page-hero__title">Sobre Grupo Rules</h1>
          <p className="page-hero__subtitle">Una marca nacida de la convicción de que cada cliente merece soluciones reales.</p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section">
        <div className="container about-who">
          <div className="about-who__image fade-up">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
              alt="Fundadora de Grupo Rules"
            />
            <div className="about-who__quote-badge">
              <p>"Transformamos ideas en proyectos reales."</p>
            </div>
          </div>
          <div className="about-who__text fade-up delay-2">
            <p className="section-label">Quiénes Somos</p>
            <div className="blue-line" />
            <h2 className="section-title">Una profesional,<br />muchas soluciones</h2>
            <p>
              Grupo Rules es una marca personal conformada por una profesional comprometida con brindar
              servicios de alto valor a sus clientes. Nace de la convicción de que la calidad y la
              atención personalizada no son exclusivos de las grandes empresas.
            </p>
            <p style={{ marginTop: 16 }}>
              Trabajamos contigo desde la primera consulta hasta la entrega final, garantizando
              transparencia, profesionalismo y resultados que superan expectativas.
            </p>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* Mission & Vision */}
      <section className="section mv-section">
        <div className="container mv-grid">
          <div className="mv-card fade-up">
            <span className="mv-card__icon">🎯</span>
            <h3 className="mv-card__title">Misión</h3>
            <p className="mv-card__text">
              Brindar servicios de calidad que aporten valor y soluciones reales a nuestros clientes,
              con compromiso, honestidad y excelencia en cada proyecto.
            </p>
          </div>
          <div className="mv-card fade-up delay-2">
            <span className="mv-card__icon">🔭</span>
            <h3 className="mv-card__title">Visión</h3>
            <p className="mv-card__text">
              Convertirse en una marca reconocida a nivel regional por la confianza, el profesionalismo
              y la calidad de sus servicios, expandiendo constantemente su portafolio de soluciones.
            </p>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Lo que nos define</p>
            <div className="blue-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title">Nuestros Valores</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`value-card fade-up delay-${i + 1}`}>
                <div className="value-card__num">0{i + 1}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
