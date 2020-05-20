import React from 'react';
import './PseudoNavbar.scss';

export default function PseudoNavbar() {
  return (
    <div className="flex">
      <p className="logo">LOGO</p>
      <span 
        className="light-mode"
        role="img" 
        alt="icon" 
        aria-label="Temp sun emoji"
        onClick={() => console.log('Will change colors of page later.')}>
        🌞
      </span>
    </div>
  )
}
