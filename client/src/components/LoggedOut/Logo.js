import React from 'react';
import styled from 'styled-components';
import bars from '../../images/bars.png';

export default function Logo() {
  return (
    <>
      <LogoStyle
        role="img" 
        alt="icon" 
        aria-label="logo-icon"
        src={ bars }
      ></LogoStyle>
    </>
  )
}

const LogoStyle = styled.img`
  display: inline-block;
  height: 30px;
  width: 50px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;
// const LogoStyle = styled.img`
//   color: white;
// `;