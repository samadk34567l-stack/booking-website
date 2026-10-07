import React from 'react';
import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../../data/constants';
import './TestimonialsSection.css';

const TestimonialsSection = () => (
  <div className="reviews">
    <div className="reviews__inner">
      <div className="reviews__head">
        <h2 className="reviews__title">Loved by Travelers</h2>
        <p className="reviews__sub">Don't just take our word for it. Here is what our elite members say.</p>
      </div>
      <div className="reviews__grid">
        {REVIEWS.map((review) => (
          <div key={review.id} className="review">
            <Quote className="review__quote" size={40} />
            <div className="review__stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="review__text">"{review.text}"</p>
            <div className="review__author">
              <img src={review.avatar} alt={review.name} />
              <div>
                <h4>{review.name}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
