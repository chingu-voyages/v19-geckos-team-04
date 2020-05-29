import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderDiv>
      <HeaderStyle>BPM Workout</HeaderStyle>
      <SubheadStyle>Choose your workout by beats per minute.</SubheadStyle>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  text-align: center;
`;

const HeaderStyle = styled.h1`
  color: #0df0ff;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

const SubheadStyle = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
