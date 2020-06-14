import React, { useContext } from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-icon.png';
import MoonIcon from '../../images/moon-icon.png';
import { ThemeContext } from '../../context/ThemeContext';

const SunMoonIcon = () => {

  const { dark, onChangeTheme } =  useContext(ThemeContext);

  return (
    <>
      <AdjustableColorTheme
        role="img" 
        alt="icon" 
        aria-label="theme-icon"
        // onClick={ onChangeTheme }
        src={ SunIcon }
      >
      </AdjustableColorTheme>
    </>
  )
}

export default SunMoonIcon;

const AdjustableColorTheme = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
    transform: translateY(-32px); /* Pushes the icon up by 32 pixels. */
  }
`;