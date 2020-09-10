import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderDiv>
      <HeaderStyle className="header-text">SweetBeats</HeaderStyle>
      {/*<SubheadStyle className="subhead-text">
        Choose your workout by beats per minute.
      </SubheadStyle>*/}
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  text-align: center;
`;

const HeaderStyle = styled.h1`
  color: white;
  font-size: 3.1rem;
  margin-bottom: 55px;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubheadStyle = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
