import React from 'react';
import { Car, MapPin, Calendar, Search } from 'lucide-react';
import SearchField from '../SearchField/SearchField';
import './CarSearchWidget.css';

const CarSearchWidget = () => (
  <div className="car-widget">
    <SearchField className="car-widget__pickup" icon={Car} label="Pick-up Location" type="text" placeholder="City or Airport" />
    <SearchField className="car-widget__dropoff" icon={MapPin} label="Drop-off Location" type="text" placeholder="Same as Pick-up" />
    <div className="car-widget__dates">
      <SearchField compact icon={Calendar} iconSize={16} label="Pick-up Date" type="date" />
      <SearchField compact icon={Calendar} iconSize={16} label="Drop-off Date" type="date" />
    </div>
    <div className="car-widget__action">
      <button className="car-widget__btn"><Search size={20} /><span>Find Cars</span></button>
    </div>
  </div>
);

export default CarSearchWidget;
