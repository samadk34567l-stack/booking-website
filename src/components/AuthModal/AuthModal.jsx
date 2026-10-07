import React, { useState, useEffect } from 'react';
import { X, User, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialView = 'signin' }) => {
  const [view, setView] = useState(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setView(initialView);
      setName(''); setEmail(''); setPassword('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  const isSignin = view === 'signin';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignin) {
      if (!email || !password) return;
      if (login(email, password)) onClose();
    } else {
      if (!name || !email || !password) return;
      if (register(name, email, password)) onClose();
    }
  };

  return (
    <div className="auth">
      <div className="auth__backdrop" onClick={onClose} />
      <div className="auth__card">
        <button className="auth__close" onClick={onClose}><X size={20} /></button>

        <div className="auth__body">
          <div className="auth__head">
            <div className="auth__badge"><Sparkles size={24} /></div>
            <h2>{isSignin ? 'Welcome Back' : 'Join SkyVista Elite'}</h2>
            <p>{isSignin ? 'Sign in to access your upcoming trips.' : 'Create an account for exclusive 2026 deals.'}</p>
          </div>

          <div className="auth__tabs">
            <button className={`auth__tab ${isSignin ? 'auth__tab--active' : ''}`} onClick={() => { setView('signin'); setName(''); setEmail(''); setPassword(''); }}>Sign In</button>
            <button className={`auth__tab ${!isSignin ? 'auth__tab--active' : ''}`} onClick={() => { setView('signup'); setEmail(''); setPassword(''); }}>Register</button>
          </div>

          <form className="auth__form" onSubmit={handleSubmit}>
            {!isSignin && (
              <div className="auth__field">
                <div className="auth__field-icon"><User size={20} /></div>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="auth__input" />
              </div>
            )}

            <div className="auth__field">
              <div className="auth__field-icon"><Mail size={20} /></div>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="auth__input" />
            </div>

            <div className="auth__field">
              <div className="auth__field-icon"><Lock size={20} /></div>
              <input type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="auth__input auth__input--pw" />
              <button type="button" className="auth__eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isSignin && (
              <div className="auth__forgot"><a href="#">Forgot Password?</a></div>
            )}

            <button type="submit" className="auth__submit">{isSignin ? 'Sign In Securely' : 'Create Account'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
