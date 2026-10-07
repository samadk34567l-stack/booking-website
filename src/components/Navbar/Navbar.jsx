import React, { useState, useEffect } from 'react';
import { Plane, Menu, X, Globe, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { NAV_LINKS } from '../../data/constants';
import './Navbar.css';

const Navbar = ({ openAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cls = (base) => `${base} ${isScrolled ? `${base}--solid` : `${base}--clear`}`;

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__brand">
          <div className="navbar__logo"><Plane size={20} /></div>
          <span className={cls('navbar__name')}>SkyVista</span>
        </div>

        <div className="navbar__links">
          {NAV_LINKS.map((item) => <a key={item} href="#" className={cls('navbar__link')}>{item}</a>)}
        </div>

        <div className="navbar__actions">
          <div className={cls('navbar__locale')}><Globe size={16} /><span>EN | USD</span></div>

          {user ? (
            <div className="navbar__user-wrap">
              <div className={cls('navbar__user')}>
                <User size={16} /><span>{user.name.split(' ')[0]}</span>
              </div>
              <button onClick={logout} className={cls('navbar__logout')} title="Log Out"><LogOut size={20} /></button>
            </div>
          ) : (
            <div className="navbar__auth">
              <button onClick={() => openAuth('signin')} className={cls('navbar__signin')}>Sign In</button>
              <button onClick={() => openAuth('signup')} className="navbar__signup">Sign Up</button>
            </div>
          )}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className={cls('navbar__burger')}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((item) => <a key={item} href="#" className="navbar__mobile-link">{item}</a>)}
          <div className="navbar__mobile-auth">
            {user ? (
              <div className="navbar__mobile-user">
                <div><User size={20} /> {user.name}</div>
                <button onClick={() => { setMobileOpen(false); logout(); }}><LogOut size={20} /></button>
              </div>
            ) : (
              <>
                <button className="navbar__mobile-signin" onClick={() => { setMobileOpen(false); openAuth('signin'); }}>Sign In</button>
                <button className="navbar__mobile-signup" onClick={() => { setMobileOpen(false); openAuth('signup'); }}>Join SkyVista</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
