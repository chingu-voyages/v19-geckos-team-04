import React, { Component } from 'react';
import queryString from 'query-string';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';
// import Modal from '../Shared/UI/Modal';
import Dashboard from '../Dashboard/Dashboard';
// import { ModalProvider } from 'styled-react-modal';

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

  componentDidMount() {
      let parsed = queryString.parse( window.location.search );
      let accessToken = parsed.access_token;
      
      fetch( 'https://api.spotify.com/v1/me', {
          headers: { 'Authorization' : 'Bearer ' + accessToken}
      } ).then( ( res ) => res.json() )
      .then( data => this.setState( { serverData: { user: data } } ) )
  }
  
  onOpenModal() {
    this.setState({isModalOpen: true});
  }

  onCloseModal() {
    this.setState({isModalOpen: false});
  }
  
  render() {
    return (
      <div className="App">
      { this.state.serverData.user ?
        <>
          <Dashboard userData={ this.state.serverData.user } /> 
        </>
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
    );
  }
}

export default App;