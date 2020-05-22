import React from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-icon.png';

export default function PseudoNavbar() {
  return (
    <StyledContainer>
      <Logo>LOGO</Logo>
      <AdjustableColorTheme>
        <span
          role="img" 
          alt="icon" 
          aria-label="Temp sun emoji"
          onClick={() => console.log('Will change colors of page later.')}>
          <img src={SunIcon} />
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