import React from 'react';
import { MapPin, Heart, Star, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../../data/constants';
import './TrendingDestinations.css';

const TrendingDestinations = () => (
  <div className="trending">
    <div className="trending__head">
      <div>
        <span className="trending__eyebrow">Curated For You</span>
        <h2 className="trending__title">Trending USA</h2>
      </div>
      <button className="trending__map-btn">Explore map <ArrowRight size={20} /></button>
    </div>

    <div className="trending__grid">
      {DESTINATIONS.map((dest) => (
        <div key={dest.id} className="dest">
          <img className="dest__img" src={dest.image} alt={dest.city} />
          <div className="dest__shade" />
          <span className="dest__tag">{dest.tag}</span>
          <button className="dest__heart"><Heart size={20} /></button>
          <div className="dest__info">
            <div>
              <h3 className="dest__city">{dest.city}</h3>
              <p className="dest__state"><MapPin size={14} /> {dest.state}</p>
              <div className="dest__rating"><Star size={16} fill="currentColor" /><span>{dest.rating}</span></div>
            </div>
            <div className="dest__price-wrap">
              <span className="dest__from">From</span>
              <div className="dest__price">${dest.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrendingDestinations;
