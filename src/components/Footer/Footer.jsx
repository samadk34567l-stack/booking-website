import React from 'react';
import { Plane, Globe, Mail } from 'lucide-react';
import './Footer.css';

const COLUMNS = [
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Sustainability'] },
  { title: 'Explore', links: ['Destinations', 'Hotels & Resorts', 'Car Rentals', 'Travel Guides'] },
  { title: 'Support', links: ['Help Center', 'Contact', 'Safety', 'Cancellation'] }
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon"><Plane size={24} /></div>
            <span>SkyVista</span>
          </div>
          <p className="footer__about">
            Ultra-premium travel bookings for the modern 2026 era. Experience seamless flights, luxury stays, and intelligent planning globally.
          </p>
          <div className="footer__social">
            <button><Globe size={16} /></button>
            <button><Mail size={16} /></button>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="footer__col-title">{col.title}</h4>
            <ul className="footer__links">
              {col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© 2026 SkyVista Travel Technologies Inc. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
