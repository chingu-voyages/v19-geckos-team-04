import React, { useState } from 'react';
import styled from 'styled-components';
import TestImage1 from '../../../images/equalizer-153212_1280.png';
import bigtestimage1 from '../../../images/testimage1.png'

const FirstModal = () => {
  const [opened, setOpened] = useState(true);

  return (
    <ModuleDiv>
      <ModuleText>Generate your own Spotify playlists and match music to <i>your</i> pace.</ModuleText>
      <CenterDiv>
        {opened
          ? <SmallModalImage alt="pic-1" src={TestImage1} onClick={() => setOpened(!opened)}></SmallModalImage>
          : <EnlargedModalImage alt="test-pic-1" src={bigtestimage1} onClick={() => setOpened(!opened)}></EnlargedModalImage>
        }
      </CenterDiv>
    </ModuleDiv>
  )
}

export default FirstModal;


const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const SmallModalImage = styled.img`
  position: absolute;
  top: 140px; /* Now the small image stays in one spot (horizontally). */
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