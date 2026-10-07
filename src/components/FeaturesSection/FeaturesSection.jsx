import React from 'react';
import { FEATURES } from '../../data/constants';
import './FeaturesSection.css';

const FeaturesSection = () => (
  <div className="features">
    <div className="features__inner">
      <div className="features__head">
        <span className="features__eyebrow">Why SkyVista?</span>
        <h2 className="features__title">The Future of Travel Booking</h2>
      </div>
      <div className="features__grid">
        {FEATURES.map((feat, idx) => (
          <div key={idx} className="feature">
            <div className="feature__icon"><feat.icon size={40} /></div>
            <h3 className="feature__title">{feat.title}</h3>
            <p className="feature__desc">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesSection;
