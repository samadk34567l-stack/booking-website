import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal/AuthModal';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import PromotionsSection from './components/PromotionsSection/PromotionsSection';
import TrendingDestinations from './components/TrendingDestinations/TrendingDestinations';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [authModalState, setAuthModalState] = useState({ isOpen: false, view: 'signin' });

  const openAuth = (view) => setAuthModalState({ isOpen: true, view });
  const closeAuth = () => setAuthModalState((s) => ({ ...s, isOpen: false }));

  return (
    <div className="app">
      <AuthModal isOpen={authModalState.isOpen} onClose={closeAuth} initialView={authModalState.view} />
      <Navbar openAuth={openAuth} />
      <main>
        <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <PromotionsSection />
        <TrendingDestinations />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ToastProvider>
  );
}
