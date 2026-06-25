import { Link } from 'react-router-dom';
import { MessageCircle, Share2, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="geo-divider" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">GR</span>
            <span className="footer__logo-text">Grupo Rules</span>
          </div>
          <p className="footer__tagline">
            Soluciones profesionales con compromiso, calidad y atención personalizada.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://facebook.com/gruporules" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Share2 size={18} />
            </a>
            <a href="mailto:contacto@gruporules.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Navegación</h4>
          <ul className="footer__nav-list">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/nosotros', label: 'Sobre Nosotros' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/proyectos', label: 'Proyectos' },
              { to: '/contacto', label: 'Contacto' },
            ].map(({ to, label }) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__services">
          <h4 className="footer__nav-title">Servicios</h4>
          <ul className="footer__nav-list">
            <li><Link to="/servicios#diseno-interiores">Diseño de Interiores</Link></li>
            <li><Link to="/servicios#topografia">Topografía</Link></li>
            <li><Link to="/servicios#financiamiento">Financiamiento</Link></li>
            <li><Link to="/servicios#melamina">Productos de Melamina</Link></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__nav-title">Contacto</h4>
          <ul className="footer__contact-list">
            <li>
              <MessageCircle size={14} />
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">+51 999 999 999</a>
            </li>
            <li>
              <Mail size={14} />
              <a href="mailto:contacto@gruporules.com">contacto@gruporules.com</a>
            </li>
            <li>
              <Share2 size={14} />
              <a href="https://facebook.com/gruporules" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Grupo Rules. Todos los derechos reservados.</p>
          <p>Diseñado con excelencia.</p>
        </div>
      </div>
    </footer>
  );
}
