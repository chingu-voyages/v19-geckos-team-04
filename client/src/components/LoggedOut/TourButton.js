import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import FirstModal from '../Shared/UI/FirstModal';
import SecondModal from '../Shared/UI/SecondModal';
import ThirdModal from '../Shared/UI/ThirdModal';

export default class TourButton extends React.Component {
  constructor() {
    super();
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      isOpen: false,
      firstModalOpen: true,
      secondModalOpen: false,
      thirdModalOpen: false,
    }
  }

  onOpenModal() {
    this.setState({isOpen: true});
  }

  onCloseModal() {
    this.setState({isOpen: false});
  }

  render() {
    if (this.state.isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    // Conditionally render modals.
    let modalConditional = null;
    if (this.state.isOpen && this.state.firstModalOpen) {
      modalConditional = <FirstModal/>
    } else if (this.state.isOpen && this.state.secondModalOpen) {
      modalConditional = <SecondModal />
    } else if (this.state.isOpen && this.state.thirdModalOpen) {
      modalConditional = <ThirdModal />
    }

    return (
      <>
        <TourStyle
          onClick={this.onOpenModal}>
        Take a Tour
        </TourStyle>
        <Modal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.onCloseModal}
          onEscapeKeydown={this.onCloseModal}
        >
          <ModalContainer style={{display: this.state.isOpen ? 'flex' : 'none'}}>
            <ModalContent>
              <div>
                <ModalTourNumber onClick={() => this.setState({
                  firstModalOpen: true,
                  secondModalOpen: false,
                  thirdModalOpen: false,
                })}>1</ModalTourNumber>

                <ModalTourNumber onClick={() => this.setState({
                  firstModalOpen: false,
                  secondModalOpen: true,
                  thirdModalOpen: false,
                })}>2</ModalTourNumber>

                <ModalTourNumber onClick={() => this.setState({
                  firstModalOpen: false,
                  secondModalOpen: false,
                  thirdModalOpen: true,
                })}>3</ModalTourNumber>
                <CloseButton onClick={this.onCloseModal}>&times;</CloseButton>
              </div>
              {modalConditional}
            </ModalContent>
          </ModalContainer>
        </Modal>
      </>
    );
  }
}


// Styled components for the rest of this file.
const ModalTourNumber = styled.span`
  background-color: #444;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  display: inline;
  flex-wrap: nowrap;
  font-size: 1.5rem;
  max-width: 90px
`;

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
