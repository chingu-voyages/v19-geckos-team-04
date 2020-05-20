import React from 'react';
import './Buttons.scss'; 

const Buttons = () => {
  return (
    <div>
      <button 
        className="take-tour" 
        onClick={() => alert('Tour.')}>
        Take a Tour
      </button>
      <button 
        className="spotify-login" 
        onClick={ () => window.location = 'http://geckos4-backend.herokuapp.com/login' }>
        Sign In
      </button>
    </div>
  )
}

export default Buttons;