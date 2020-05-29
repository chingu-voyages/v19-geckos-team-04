import React from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-icon.png';

export default function PseudoNavbar() {
  return (
    <StyledContainer>
      <Logo>LOGO</Logo>
      <AdjustableColorTheme
        src={SunIcon}
        alt="icon"
        role="img"
        aria-label="Temp sun emoji"
        onClick={() => console.log('Will change colors of page later.')}
      />
    </StyledContainer>
  );
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
