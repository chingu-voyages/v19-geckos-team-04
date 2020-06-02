import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import FirstModal from '../Shared/UI/FirstModal';
import SecondModal from '../Shared/UI/SecondModal';
import ThirdModal from '../Shared/UI/ThirdModal';

export default class TourButton extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    // 😨😨 i'm testing stuff. default is...
    // isOpen: false,
    this.state = {
      isOpen: true,
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
          onClick={this.onOpenModal} 
          className="tour-btn"
        >
        Take a Tour
        </TourStyle>
        <Modal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.onCloseModal}
          onEscapeKeydown={this.onCloseModal}
        >
          <ModalContainer style={{display: this.state.isOpen ? 'flex' : 'none'}}>
            <ModalContent>
              <ModalTourDiv>
                <ModalTourNumber onClick={() => this.setState({
                  firstModalOpen: true,
                  secondModalOpen: false,
                  thirdModalOpen: false,
                })}>1</ModalTourNumber>
                <ModalNumberLine>_____</ModalNumberLine>
                <ModalTourNumber onClick={() => this.setState({
                  firstModalOpen: false,
                  secondModalOpen: true,
                  thirdModalOpen: false,
                })}>2</ModalTourNumber>
                <ModalNumberLine>_____</ModalNumberLine>
                <ModalTourNumber onClick={() => this.setState({
                  firstModalOpen: false,
                  secondModalOpen: false,
                  thirdModalOpen: true,
                })}>3</ModalTourNumber>
              </ModalTourDiv>
                <CloseButton onClick={this.onCloseModal}>&times;</CloseButton>
              {modalConditional}
            </ModalContent>
          </ModalContainer>
        </Modal>
      </>
    );
  }
}


// Styled components for the rest of this file.


const ModalTourDiv = styled.div`
  display: flex;
  flex-shrink: 30; 
  justify-content: space-evenly;
  padding: 15px 0;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const ModalTourNumber = styled.span`
  background-color: #444;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  text-align: center;
  height: 45px;
  width: 45px;
`;

const ModalNumberLine = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;

  @media screen and (max-width: 600px) {
    padding: 0 15px;
  }
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
  min-height: 55vh;
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
  border-radius: 50%;
  cursor: pointer;
  color: #777;
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  padding: 3px 15px;
  ${'' /* line-height: 18px; */}
  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
    right: 1rem;
    top: 1.2rem;
  }
  @media screen and (max-width: 1080px) {
    right: 0.3rem;
  }
  @media screen and (max-width: 420px) {
    background-color: #d1d1d1;
    right: 0rem;
    top: -3.5rem;
  }
`;


const TourStyle = styled.button`
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  color: black;
  cursor: pointer;
  display: inline;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 15px 45px;
  width: 250px;
  margin: 0 15px;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  border: none;
`;
