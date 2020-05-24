import React, { Component } from 'react';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

// import Modal from '../Shared/UI/Modal';
// import NewModal from '../Shared/UI/NewModal';


class App extends Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      serverData: {},
      filterString: '',
      isModalOpen: false,
    }
  }

  componentDidMount() {}
  onOpenModal() {
    console.log("Open modal.");
    this.setState({isModalOpen: true});
  }

  onCloseModal() {
    this.setState({isModalOpen: false});
  }

  render() {
    return (
      <ModalProvider>
      <div className="App">
      { this.state.serverData.user ?
        <span>Test</span>
        :
        <>
          <PseudoNavbar />
          <Header />
          {/* {this.state.isModalOpen && <NewModal 
            isOpen={this.state.isModalOpen}
            toggleModal={this.onCloseModal}
          />} */}
          <div>
            <TourButton showModal={() => this.onOpenModal()}/>
            <SignInButton/>
          </div>
        </>
      }
      </div>
      </ModalProvider>
    );
  }
}

export default App;