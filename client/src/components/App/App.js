import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import queryString from 'query-string';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import SoundBars from '../LoggedOut/SoundBars';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../LoggedOut/SignIn';
import { ModalProvider } from 'styled-react-modal';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

// const LandingContainer = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   z-index: -1;
// `;

// const HeaderContainer = styled.div`
//   position: relative;
//   top: 20%;
//   z-index: 1000;
// `;

// const ButtonsContainer = styled.div`
//   text-align: center;
// `;

// const SoundBarsContainer = styled.div`
//   position: relative;
//   align-self: center;
//   z-index: 999;
//   bottom: 0;
// `;

// Styles for dark and light modes, respectively.
const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${props => (props.theme.mode ? '#212e3a' : '#fffde9')};
    }
  .logo-text-TEMPORARY {
    color: ${props => (props.theme.mode ? '#fff' : '#000')}
  }
  .header-text {
    color: ${props => (props.theme.mode ? '#0df0ff' : '#088f99')}
  }
  .tour-btn {
    background-color: ${props => (props.theme.mode ? '#e5e5e5' : '#b6b6b6')};
    }
  .subhead-text {
    color: ${props => (props.theme.mode ? '#fff' : '#444')}
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    // this.onOpenModal = this.onOpenModal.bind(this);
    // this.onCloseModal = this.onCloseModal.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      serverData: { user: false },
      filterString: '',
      isModalOpen: false,
      isDarkMode: true,
      accessToken: ''
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let urlAccessToken = parsed.access_token;

    this.setState({ accessToken: urlAccessToken });

    fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + urlAccessToken }
    })
      .then(res => res.json())
      .then(data => this.setState({ serverData: { user: data } }));
  }

  // onOpenModal() {
  //   this.setState({ isModalOpen: true });
  // }

  // onCloseModal() {
  //   this.setState({ isModalOpen: false });
  // }

  handleClick() {
    const toggle = this.state.isDarkMode;
    this.setState({ isDarkMode: !toggle });
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={{ mode: this.state.isDarkMode }}>
          <GlobalStyle />
          {/* {this.state.serverData.user.display_name ? ( */}
            <>
              <Route 
                path='/dashboard'
                render={(props) => <Dashboard { ...props } userData={ this.state.serverData.user } accessToken={ this.state.accessToken } />}
              />
              {/* <Dashboard
                userData={this.state.serverData.user}
                accessToken={this.state.accessToken}
              /> */}
            </>
          {/* ) : ( */}
            <>
              <Route 
                path='/'
                render={(props) => <SignIn { ...props } isDark={ this.state.isDarkMode } changeTheme={ this.handleClick } />}
              />
              {/* <PseudoNavbar
                isDark={this.state.isDarkMode}
                changeTheme={this.handleClick}
              />
              <LandingContainer>
                <HeaderContainer>
                  <Header />
                  <ModalProvider>
                    <ButtonsContainer>
                      <TourButton showModal={() => this.onOpenModal()} />
                      <SignInButton />
                    </ButtonsContainer>
                  </ModalProvider>
                </HeaderContainer>
                <SoundBarsContainer>
                  <SoundBars />
                </SoundBarsContainer>
              </LandingContainer> */}
            </>
          {/* )} */}
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
