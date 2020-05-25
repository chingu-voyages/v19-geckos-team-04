import React, { Component } from 'react';
import queryString from 'query-string';
import './App.scss';
import Header from './../LoggedOut/Header';
import TourButton from '../LoggedOut/TourButton';
import SignInButton from '../LoggedOut/SignInButton';
import PseudoNavbar from '../LoggedOut/PseudoNavbar';
import Modal from '../Shared/UI/Modal';


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
      .then( data => this.setState( { serverData: { user: { name: data.display_name } } } ) )
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
          <span style={ { fontSize: '30px', color: 'white' } }>Welcome { this.state.serverData.user.name }</span>
          {/*<button>Log Out</button>*/}
        </>
        :
        <>
          <PseudoNavbar />
          <Header />
          {this.state.isModalOpen && <Modal 
            showModal={this.state.isModalOpen}
            onCloseButtonClicked={this.onCloseModal}
            onRequestClose={this.onCloseModal}
          />}
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
