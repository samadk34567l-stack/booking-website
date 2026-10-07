import React from 'react';
import { CreditCard, Percent, ChevronRight } from 'lucide-react';
import './PromotionsSection.css';

const PromotionsSection = () => (
  <div className="promos">
    <div className="promos__grid">
      <div className="promo promo--card">
        <div className="promo__tint" />
        <CreditCard className="promo__bg-icon" />
        <div className="promo__content">
          <span className="promo__badge promo__badge--blue">Partner Offer</span>
          <h3 className="promo__title">Earn 50,000 <br /> Bonus Miles.</h3>
          <p className="promo__text promo__text--muted">
            Apply for the SkyVista Elite Reserve Card today and accelerate your path to free global travel.
          </p>
        </div>
        <button className="promo__btn promo__btn--white">Apply Now <ChevronRight size={16} /></button>
      </div>

      <div className="promo promo--image">
        <img className="promo__img" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000" alt="Summer Getaway" />
        <div className="promo__shade" />
        <div className="promo__content promo__content--bottom">
          <span className="promo__badge promo__badge--rose"><Percent size={12} /> Limited Time</span>
          <h3 className="promo__title">Summer 2026 <br /> Early Bird Deals</h3>
          <p className="promo__text promo__text--light">
            Save up to 35% on luxury coastal resorts when you bundle your flight and stay.
          </p>
          <button className="promo__btn promo__btn--blue">Explore Deals <ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  </div>
);

export default PromotionsSection;
