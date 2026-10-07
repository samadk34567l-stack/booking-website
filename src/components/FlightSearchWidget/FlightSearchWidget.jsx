import React from 'react';
import { Plane, MapPin, Calendar, Search, ArrowRight } from 'lucide-react';
import SearchField from '../SearchField/SearchField';
import './FlightSearchWidget.css';

const FlightSearchWidget = () => (
  <div className="flight-widget">
    <div className="flight-widget__route">
      <SearchField icon={Plane} label="Leaving from" type="text" defaultValue="New York (JFK)" />
      <div className="flight-widget__swap"><ArrowRight size={16} /></div>
      <SearchField icon={MapPin} label="Going to" type="text" placeholder="Anywhere" />
    </div>
    <div className="flight-widget__dates">
      <SearchField icon={Calendar} label="Depart" type="date" />
      <SearchField icon={Calendar} label="Return" type="date" iconDim />
    </div>
    <div className="flight-widget__action">
      <button className="flight-widget__btn"><Search size={20} /><span>Search Flights</span></button>
    </div>
  </div>
);

export default FlightSearchWidget;
