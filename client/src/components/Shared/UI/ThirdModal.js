import React from 'react';
import styled from 'styled-components';

const ThirdModal = () => {
  return (
    <ModuleDiv>
      <ModuleText>Third and last modal. No more images.</ModuleText>
      <ModuleButton>
        Sign Up Now
      </ModuleButton>
    </ModuleDiv>
  )
}

export default ThirdModal;

const ModuleDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const ModuleText = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const ModuleButton = styled.button`
  align-items: center;
  background-color: #0fbe44;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 2px;
  margin-top: 7.5%;
  padding: 15px 40px;
  text-transform: uppercase;
  width: 275px;
`;