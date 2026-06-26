import { MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
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
              { id: 'proyectos', label: 'Proyectos' },
              { id: 'prestamos', label: 'Préstamos' },
              { id: 'disenos', label: 'Diseños' },
              { id: 'topografia', label: 'Topografía' },
              { id: 'productos', label: 'Productos' },
              { id: 'contacto', label: 'Contacto' },
            ].map(({ id, label }) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__nav-title">Contacto</h4>
          <ul className="footer__contact-list">
            <li><MessageCircle size={14} /><a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">+51 999 999 999</a></li>
            <li><Mail size={14} /><a href="mailto:contacto@gruporules.com">contacto@gruporules.com</a></li>
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