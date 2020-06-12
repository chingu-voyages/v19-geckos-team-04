import React from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-icon.png';
import MoonIcon from '../../images/moon-icon.png';

export default function SunMoonIcon(props) {
  return (
    <>
      <AdjustableColorTheme
        role="img" 
        alt="icon" 
        aria-label="theme-icon"
        onClick={props.changeTheme}
        src={props.isDark ? SunIcon : MoonIcon}
      >
      </AdjustableColorTheme>
    </>
  )
}

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