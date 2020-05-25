/**
 * It feels like I'm violating the DRY principle with styled components in each module...
 */
import React from 'react';
import styled from 'styled-components';
import TestImage1 from '../../../images/equalizer-153212_1280.png';

const FirstModal = () => {
  return (
    <ModuleDiv>
      <ModuleText>Here we would list some sort of benefit or Unique Selling Point. A picture would go below:</ModuleText>
      <img alt="pic-1" src={TestImage1}></img>
    </ModuleDiv>
  )
}

export default FirstModal;


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