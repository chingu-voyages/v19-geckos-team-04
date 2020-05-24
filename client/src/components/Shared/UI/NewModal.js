import React from 'react';
// import styled from 'styled-components';
// import Modal from "styled-react-modal";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: opacity ease 500ms;
`;

const NewModal = (props) => {
  return (
    <div>
      <StyledModal
        isOpen={props.isOpen}
        onBackgroundClick={props.toggleModal}
        onEscapeKeydown={props.toggleModal}
      >
        <span>I am a modal!</span>
        <button>Close me</button>
      </StyledModal>
    </div>
  )
}

export default NewModal