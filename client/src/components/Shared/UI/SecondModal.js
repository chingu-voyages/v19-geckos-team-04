import React, { useState } from 'react';
import styled from 'styled-components';
import TestImage2 from '../../../images/bruce-mars-8Xhf30pcUpw-unsplash.jpg';
import bigtestimage2 from '../../../images/testimage2.jpg'

const SecondModal = () => {
  const [opened, setOpened] = useState(true);

  return (
    <ModuleDiv>
      <ModuleText>Warm up, fire up, then cool down -- adapt your playlists however you like.</ModuleText>
      <CenterDiv>
        {opened
          ? <SmallModalImage alt="pic-2" src={TestImage2} onClick={() => setOpened(!opened)}></SmallModalImage>
          : <EnlargedModalImage alt="test-pic-2" src={bigtestimage2} onClick={() => setOpened(!opened)}></EnlargedModalImage>
        }
      </CenterDiv>
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
  position: relative;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const ModuleText = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1px;

  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallModalImage = styled.img`
  position: absolute;
  top: 130px; /* Now the small image stays in one spot (horizontally). */
`;

const EnlargedModalImage = styled.img`
  animation: smallToLarge 0.3s ease-in;
  position: absolute;
  top: 0;
  max-height: 100vh;
  max-width: 100vh;
  z-index: 999;

  @keyframes smallToLarge {
    0% { transform: scale(0.425); }
    90% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @media screen and (max-width: 600px) {
    object-fit: cover;
    top: -30px;
    max-width: 250%;
  }
  @media screen and (max-width: 480px) {
    top: -50px;
    max-width: 300%;
  }
  @media screen and (max-width: 380px) {
    top: 50px;
    height: 300%;
    max-width: 400%;
  }
`;