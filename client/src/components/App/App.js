import React, { Component, useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import queryString from 'query-string';
import './App.scss';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../LoggedOut/SignIn';
import ThemeContextProvider from '../../context/ThemeContext';
import { ThemeContext } from '../../context/ThemeContext';
import GlobalTheme from '../Shared/Styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverData: { user: false },
      filterString: '',
      isModalOpen: false,
      accessToken: ''
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let urlAccessToken = parsed.access_token;

    if (urlAccessToken) {
      this.setState({ accessToken: urlAccessToken });

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
          {this.state.serverData.user.display_name ? (
            <>
              <Route
                path="/dashboard"
                render={props => (
                  <Dashboard
                    {...props}
                    userData={this.state.serverData.user}
                    accessToken={this.state.accessToken}
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
        </ThemeContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;
