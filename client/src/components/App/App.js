import React, { Component } from 'react';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';
import { ModalProvider } from 'styled-react-modal';

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