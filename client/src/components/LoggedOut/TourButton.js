import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const TourStyle = styled.button`
  background-color: #e5e5e5;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  color: #222;
  cursor: pointer;
  display: inline;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 15px 45px;
  text-transform: uppercase;
  width: 250px;
`;

const ModalContainer = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 50vw;
  height: 50vh;
  background-color: #e5e5e5;
  box-sizing: border-box;
  border-radius: 40px;
  @media screen and (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
    border-radius: 25px;
  }
  @media screen and (max-width: 990px) {
    width: 90vw;
    height: 40vh;
  }
  @media screen and (max-width: 480px) {
    border-radius: 20px;
  }
  @media screen and (max-width: 320px) {
    border-radius: 15px;
  }
`;

const CloseButton = styled.span`
  cursor: pointer;
  color: #777;
  font-size: 2rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  line-height: 18px;
  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
    right: 1.2rem;
    top: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    right: 0.7rem;
    top: 0.7rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    right: 0.5rem;
    top: 0.5rem;
  }
`;


export default function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  if (isOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }

  return (
    <>
      <TourStyle 
        onClick={toggleModal}>
      Take a Tour
      </TourStyle>
      <Modal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalContainer style={{display: isOpen ? 'flex' : 'none'}}>
          <ModalContent>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <p>[ 1 ] [ 2 ] [ 3 ]</p>
            <p>Bad rough draft. A picture would go below:</p>
            <span alt="ghost-emoji" role="img" aria-label="ghost-emoji">👻</span>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}