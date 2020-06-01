import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderDiv>
      <HeaderStyle className="header-text">BPM Workout</HeaderStyle>
      <SubheadStyle className="subhead-text">
        Choose your workout by beats per minute.
      </SubheadStyle>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  text-align: center;
`;

const HeaderStyle = styled.h1`
  font-size: 2.6rem;
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
