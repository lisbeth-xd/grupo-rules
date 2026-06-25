import { useState } from 'react';
import { PROJECTS } from '../data/index.js';
import './Projects.css';

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'diseno-interiores', label: 'Diseño de Interiores' },
  { id: 'topografia', label: 'Topografía' },
  { id: 'melamina', label: 'Melamina' },
];

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <main className="projects-page">
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80" alt="" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content fade-up">
          <p className="section-label">Nuestro trabajo</p>
          <h1 className="page-hero__title">Proyectos</h1>
          <p className="page-hero__subtitle">Una galería de soluciones reales, clientes reales y resultados concretos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter tabs */}
          <div className="projects-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`filter-btn ${active === cat.id ? 'filter-btn--active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-gallery">
            {filtered.map((p, i) => (
              <article key={p.id} className={`gallery-card fade-up delay-${(i % 4) + 1}`}>
                <div className="gallery-card__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="gallery-card__hover">
                    <span className="gallery-card__cat">{p.categoryLabel}</span>
                  </div>
                </div>
                <div className="gallery-card__body">
                  <div className="gallery-card__meta">
                    <span className="gallery-card__cat-label">{p.categoryLabel}</span>
                    <span className="gallery-card__year">{p.year}</span>
                  </div>
                  <h3 className="gallery-card__title">{p.title}</h3>
                  <p className="gallery-card__desc">{p.description}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="projects-empty">
              <p>No hay proyectos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
