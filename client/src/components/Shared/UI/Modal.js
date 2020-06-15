// This file was basically transferred to TourButton.
import React from 'react';
import styled from 'styled-components';

const Modal = props => {
  if (props.showModal) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }

  return (
    <ModalContainer showModal={props.showModal}>
      <ModalContent>
        <CloseButton onClick={props.onCloseButtonClicked}>&times;</CloseButton>
        {props.children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
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
  min-height: 450px;
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