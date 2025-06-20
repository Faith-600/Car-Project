import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="footer-logo">
            <span className="logo-yellow">E</span>LIACAR
          </h3>
          <p>La tua destinazione ideale per veicoli di lusso e ad alte prestazioni.</p>
        </div>
        <div className="footer-links">
          <h4>Collegamenti rapidi</h4>
          <ul>
            <li><a href="#inventory">Inventario</a></li>
            <li><a href="#sell">Vendi la tua auto</a></li>
            <li><a href="#book">Prenota un'auto</a></li>
            <li><a href="#contact">Contattaci</a></li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Orari di officina</h4>
          <p>Lunedì - Venerdì: 8:00 - 19:00</p>
          <p>Sabato: 8:00 - 17:00</p>
          <p>Domenica: chiuso</p>
        </div>
        <div className="footer-contact">
          <h4>Informazioni di contatto</h4>
          <p>+1 (555) 123-4567</p>
          <p>info@eliacars.com</p>
          <p> 123 Eliaco<br/>Premium City, PC 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eliacars. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;