import React, { Component } from 'react';

import queryString from 'query-string';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import SoundBars from '../LoggedOut/SoundBars';
import Logo from '../LoggedOut/Logo';
import SunMoonIcon from '../LoggedOut/SunMoonIcon';
import Dashboard from '../Dashboard/Dashboard';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { DarkTheme } from '../../components/Shared/Styles/DarkTheme';
import { LightTheme } from '../../components/Shared/Styles/LightTheme';
import { ModalProvider } from 'styled-react-modal';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
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

  onOpenModal() {
    this.setState({ isModalOpen: true });
  }

  onCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleClick() {
    const toggle = this.state.isDarkMode;
    this.setState({ isDarkMode: !toggle });
  }

  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.isDarkMode }}>
        <GlobalStyle />
        {this.state.serverData.user.display_name ? (
          <>
            <Dashboard
              userData={this.state.serverData.user}
              accessToken={this.state.accessToken}
            />
          </>
        ) : (
          <>
          <StyledDivContainer>
            <Logo />
            <SunMoonIcon
              isDark={this.state.isDarkMode}
              changeTheme={this.handleClick}
            />
          </StyledDivContainer>
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
            </LandingContainer>
          </>
        )}
      </ThemeProvider>
    );
  }
}

export default App;


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

const SoundBarsContainer = styled.div`
  position: relative;
  align-self: center;
  z-index: 999;
  bottom: 0;
`;

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

// Styles for dark and light modes, respectively.
const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${props => (props.theme.mode ? DarkTheme.gunmetal : LightTheme.lightcream )};
  }
  .logo-text-TEMPORARY {
    color: ${props => (props.theme.mode ? DarkTheme.lightgray : LightTheme.black)};
  }
  .header-text {
    color: ${props => (props.theme.mode ? DarkTheme.agua : LightTheme.agua )};
  }
  .tour-btn {
    /* Tour button has two color sets. */
    background-color: ${props => (props.theme.mode ? DarkTheme.tourbtn : LightTheme.lightgray)};
    &:hover {
      background-color: ${props => (props.theme.mode ? DarkTheme.mediumgray : LightTheme.tourbtnhover )}
    }
  }
  .subhead-text {
    color: ${props => (props.theme.mode ? DarkTheme.lightgray : LightTheme.darkgray )};
  }
`;