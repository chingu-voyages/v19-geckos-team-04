import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderDiv>
      <HeaderStyle className="header-text">BPM Workout</HeaderStyle>
      <SubheadStyle className="subhead-text">Choose your workout by beats per minute.</SubheadStyle>
    </HeaderDiv>
  )
}

export default Header;


const HeaderDiv = styled.div`
  text-align: center;
`;

const HeaderStyle = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
`;

const SubheadStyle = styled.h3`
  font-size: 0.9rem;
`;
