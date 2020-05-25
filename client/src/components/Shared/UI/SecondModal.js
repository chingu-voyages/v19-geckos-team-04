import React from 'react';
import styled from 'styled-components';
import TestImage2 from '../../../images/bruce-mars-8Xhf30pcUpw-unsplash.jpg';

const SecondModal = () => {
  return (
    <ModuleDiv>
      <ModuleText>Yet another benefit or curiosity point for the user. Another picture would go below:</ModuleText>
      <img alt="pic-2" src={TestImage2}></img>
    </ModuleDiv>
  )
}

export default SecondModal;

const ModuleDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 50%;
`;

const ModuleText = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1px;
`;