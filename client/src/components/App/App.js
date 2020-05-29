import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import SoundBars from '../LoggedOut/SoundBars';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';
// import Modal from '../Shared/UI/Modal';
import Dashboard from '../Dashboard/Dashboard';
import { ModalProvider } from 'styled-react-modal';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const LandingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const HeaderContainer = styled.div`
  position: relative;
  top: 20%;
  z-index: 1000;
`;

const ButtonsContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      serverData: { user: false },
      filterString: '',
      isModalOpen: false
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    //❗ TypeError: Cannot read property '0' of undefined ❗
    fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(res => res.json())
      .then(data => this.setState({ serverData: { user: data } }));
  }

  onOpenModal() {
    this.setState({ isModalOpen: true });
  }

  onCloseModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <ModalProvider>
        <div>
          {this.state.serverData.user.display_name ? (
            <>
              <Dashboard userData={this.state.serverData.user} />
            </>
          ) : (
            <>
              <PseudoNavbar />
              <LandingContainer>
                <HeaderContainer>
                  <Header />
                  <ButtonsContainer>
                    <TourButton showModal={() => this.onOpenModal()} />
                    <SignInButton />
                  </ButtonsContainer>
                </HeaderContainer>
                <SoundBars />
              </LandingContainer>
            </>
          )}
        </div>
      </ModalProvider>
    );
  }
}

export default App;
