import React, { Component } from 'react';
import './App.scss';
import Header from './../LoggedOut/Header';
import Buttons from '../LoggedOut/Buttons';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';

class App extends Component {
  state = {
    serverData: {},
    filterString: ''
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
      { this.state.serverData.user ?
        <span>Test</span>
        :
        <>
          <PseudoNavbar />
          <Header />
          <Buttons />
        </>
      }
      </div>
      );
    }
  }


export default App;
