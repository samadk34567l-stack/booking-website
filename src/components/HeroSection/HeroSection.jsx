import React from 'react';
import { Plane, Building2, Car } from 'lucide-react';
import { BACKGROUNDS } from '../../data/constants';
import FlightSearchWidget from '../FlightSearchWidget/FlightSearchWidget';
import HotelSearchWidget from '../HotelSearchWidget/HotelSearchWidget';
import CarSearchWidget from '../CarSearchWidget/CarSearchWidget';
import './HeroSection.css';

const TABS = [
  { id: 'flights', icon: Plane, label: 'Flights' },
  { id: 'hotels', icon: Building2, label: 'Hotels' },
  { id: 'cars', icon: Car, label: 'Cars' }
];

const HEADLINES = {
  flights: { top: 'Your journey', accent: 'starts here.', cls: 'hero__accent--flights' },
  hotels: { top: 'Stay somewhere', accent: 'extraordinary.', cls: 'hero__accent--hotels' },
  cars: { top: 'Hit the road', accent: 'with freedom.', cls: 'hero__accent--cars' }
};

const HeroSection = ({ activeTab, setActiveTab }) => {
  const h = HEADLINES[activeTab];
  return (
    <div className="hero">
      {Object.entries(BACKGROUNDS).map(([key, url]) => (
        <div key={key} className={`hero__bg ${activeTab === key ? 'hero__bg--active' : ''}`}>
          <img src={url} alt={`${key} background`} />
          <div className="hero__overlay" />
        </div>
      ))}

      <div className="hero__inner">
        <div className="hero__title-wrap">
          <h1 key={activeTab} className="hero__title">
            {h.top} <br className="hero__br" />
            <span className={`hero__accent ${h.cls}`}>{h.accent}</span>
          </h1>
        </div>

        <div className="hero__tabs-box">
          <div className="hero__tabs">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`hero__tab ${activeTab === tab.id ? 'hero__tab--active' : ''}`}>
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="hero__panel">
          {activeTab === 'flights' && <FlightSearchWidget />}
          {activeTab === 'hotels' && <HotelSearchWidget />}
          {activeTab === 'cars' && <CarSearchWidget />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
