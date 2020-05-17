import React, { Component } from 'react';
import './App.scss';

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
            <bitton onClick={ () => window.location = 'http://geckos4-backend.herokuapp.com/login' }>Sign In</bitton>
        }
        </div>
      );
    }
}


export default App;
