import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/servicios/financiamiento', label: 'Préstamos' },
  { to: '/servicios/diseno-interiores', label: 'Diseños' },
  { to: '/servicios/topografia', label: 'Topografía' },
  { to: '/servicios/melamina', label: 'Productos' },
  { to: '/contacto', label: 'Contacto' },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">GR</span>
          <span className="navbar__logo-text">Grupo Rules</span>
        </Link>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link to="/contacto" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Contáctanos
          </Link>
        </nav>

        <button className="navbar__toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}