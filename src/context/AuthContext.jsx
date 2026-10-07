import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { addToast } = useToast();

  useEffect(() => {
    try {
      const session = localStorage.getItem('skyvista_active_session');
      if (session) setUser(JSON.parse(session));
    } catch (e) { /* ignore corrupted session */ }
  }, []);

  const getUsers = () => {
    try { return JSON.parse(localStorage.getItem('skyvista_users')) || []; }
    catch { return []; }
  };

  const register = (name, email, password) => {
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      addToast('Account with this email already exists.', 'error');
      return false;
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('skyvista_users', JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem('skyvista_active_session', JSON.stringify(newUser));
    addToast(`Welcome to SkyVista Elite, ${name}!`, 'success');
    return true;
  };

  const login = (email, password) => {
    const found = getUsers().find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem('skyvista_active_session', JSON.stringify(found));
      addToast(`Welcome back, ${found.name}!`, 'success');
      return true;
    }
    addToast('Invalid email or password.', 'error');
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skyvista_active_session');
    addToast('Logged out successfully.', 'success');
  };

  return <AuthContext.Provider value={{ user, register, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
