import React from 'react';
import styled from 'styled-components';
import BPMLogo from '../../images/bpmlogo.png';

export default function Logo() {
  return (
    <>
      <LogoStyle
        role="img" 
        alt="icon" 
        aria-label="logo-icon"
        src={ BPMLogo }
      ></LogoStyle>
    </>
  )
}

const LogoStyle = styled.img`
  padding-right: 1rem;
  display: inline-block;
  height: 100px;
  width: 100px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;
// const LogoStyle = styled.img`
//   color: white;
// `;