import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { to: 'proyectos', label: 'Proyectos' },
  { to: 'prestamos', label: 'Préstamos' },
  { to: 'disenos', label: 'Diseños' },
  { to: 'topografia', label: 'Topografía' },
  { to: 'productos', label: 'Productos' },
  { to: 'contacto', label: 'Contacto' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <button
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="navbar__logo-mark">GR</span>
          <span className="navbar__logo-text">Grupo Rules</span>
        </button>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <button
              key={to}
              className="navbar__link"
              onClick={() => { scrollToSection(to); setOpen(false); }}
            >
              {label}
            </button>
          ))}
          <button
            className="btn btn-primary navbar__cta"
            onClick={() => { scrollToSection('contacto'); setOpen(false); }}
          >
            Contáctanos
          </button>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}