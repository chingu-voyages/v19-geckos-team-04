import React from 'react';
import styled from 'styled-components';
import sweetbeatslogo from '../../images/sweetbeatslogo.png';
// import bars from '../../images/bars.png';

export default function Logo({ setView }) {
  return (
    <>
      <LogoStyle
        role="img" 
        alt="icon" 
        aria-label="logo-icon"
        src={ sweetbeatslogo }
        onClick={ () => setView('home') }
      ></LogoStyle>
    </>
  )
}

const LogoStyle = styled.img`
  display: inline-block;
  height: 60px;
  width: 60px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;
// const LogoStyle = styled.img`
//   color: white;
// `;