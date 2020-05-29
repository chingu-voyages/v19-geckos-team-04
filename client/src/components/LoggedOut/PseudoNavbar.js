import React from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-icon.png';
import MoonIcon from '../../images/moon-icon.png';

export default function PseudoNavbar(props) {
  return (
    <StyledContainer>
      <Logo className="logo-text-TEMPORARY">LOGO</Logo>
      <AdjustableColorTheme
          role="img" 
          alt="icon" 
          aria-label="theme-icon"
          onClick={props.changeTheme}
          src={props.isDark ? SunIcon : MoonIcon}
       >
      </AdjustableColorTheme>
    </StyledContainer>
    
  )

}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

const Logo = styled.p`
  color: white;
`;

const AdjustableColorTheme = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;
