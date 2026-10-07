import React from 'react';
import { Building2, Calendar, User, Search } from 'lucide-react';
import SearchField from '../SearchField/SearchField';
import './HotelSearchWidget.css';

const HotelSearchWidget = () => (
  <div className="hotel-widget">
    <SearchField className="hotel-widget__destination" icon={Building2} label="Destination" type="text" placeholder="Where are you going?" />
    <div className="hotel-widget__dates">
      <SearchField compact icon={Calendar} iconSize={16} label="Check-in" type="date" />
      <SearchField compact icon={Calendar} iconSize={16} label="Check-out" type="date" />
    </div>
    <SearchField className="hotel-widget__guests" icon={User} label="Guests & Rooms">
      <div className="hotel-widget__guests-text">2 Guests, 1 Room</div>
    </SearchField>
    <div className="hotel-widget__action">
      <button className="hotel-widget__btn"><Search size={20} /><span>Find Hotels</span></button>
    </div>
  </div>
);

export default HotelSearchWidget;
