import React, { Component, useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import queryString from 'query-string';
import './App.scss';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../LoggedOut/SignIn';
import ThemeContextProvider from '../../context/ThemeContext';
import { DarkTheme } from '../Shared/Styles/DarkTheme';
import { LightTheme } from '../Shared/Styles/LightTheme';
import { ThemeContext } from '../../context/ThemeContext';
import UserContextProvider from '../../context/UserContext';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import GlobalTheme from '../Shared/Styles/GlobalStyle';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverData: { user: false },
      filterString: '',
      isModalOpen: false,
      isDarkMode: true,
      accessToken: '',
      username: '',
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let urlAccessToken = parsed.access_token;
    let urlUsername = parsed.username;

    if (urlAccessToken) {
      this.setState({ accessToken: urlAccessToken, username: urlUsername });

      fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: 'Bearer ' + urlAccessToken }
      })
        .catch(error => {
          console.log(error);
        })
        .then(res => res.json())
        .then(data => this.setState({ serverData: { user: data } }));
    } else {
      this.setState({ serverData: { user: '' } });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeContextProvider>
          <UserContextProvider>
            <GlobalStyle />
            {this.state.serverData.user.display_name ? (
              <>
                <Route
                  path="/dashboard"
                  render={props => (
                    <Dashboard
                      {...props}
                      userData={this.state.serverData.user}
                      accessToken={this.state.accessToken}
                      username={this.state.username}
                    />
                  )}
                />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  render={props => (
                    <SignIn {...props} isDark={this.state.isDarkMode} />
                  )}
                />
              </>
            )}
          </UserContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${(props) => true ? DarkTheme.gunmetal : LightTheme.lightcream };
  }
  .logo-text-TEMPORARY {
    color: ${(props) => true ? DarkTheme.lightgray : LightTheme.black};
  }
  .header-text {
    color: ${(props) => true ? DarkTheme.white : LightTheme.white };
  }
  .tour-btn {
    /* Tour button has two color sets. */
    background-color: ${(props) => true ? DarkTheme.tourbtn : LightTheme.lightgray};
    &:hover {
      background-color: ${(props) => true ? DarkTheme.mediumgray : LightTheme.tourbtnhover }
    }
  }
  .subhead-text {
    color: ${(props) => true ? DarkTheme.lightgray : LightTheme.darkgray };
  }
`;
