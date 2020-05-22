import React from 'react';
import styled from 'styled-components';

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
          🌞
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
`;