import React from 'react';
import './SearchField.css';

/** Reusable boxed input used by all search widgets. */
const SearchField = ({ icon: Icon, label, iconSize = 20, compact = false, iconDim = false, children, className = '', ...inputProps }) => (
  <div className={`search-field ${compact ? 'search-field--compact' : ''} ${className}`}>
    <div className={`search-field__icon ${iconDim ? 'search-field__icon--dim' : ''}`}>
      <Icon size={iconSize} />
    </div>
    <div className="search-field__body">
      <label className="search-field__label">{label}</label>
      {children || <input className={`search-field__input ${inputProps.type === 'date' ? 'search-field__input--date' : ''}`} {...inputProps} />}
    </div>
  </div>
);

export default SearchField;
