import React from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-icon.png';
import MoonIcon from '../../images/moon-icon.png';

export default function PseudoNavbar(props) {
  return (
    <StyledContainer>
      <Logo className="logo-text-TEMPORARY">LOGO</Logo>
      <AdjustableColorTheme>
        <span
          role="img" 
          alt="icon" 
          aria-label="theme-icon"
          onClick={props.changeTheme}>
          <img src={props.isDark ? SunIcon : MoonIcon} />
        </span>
      </AdjustableColorTheme>
    </StyledContainer>
    
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
`;

const Logo = styled.p`
  color: white;
  font-weight: bold;
`;

const AdjustableColorTheme = styled.span`
  font-size: 2rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;