import React, { Component } from 'react';
import './App.scss';
import { LoggedOut } from './../LoggedOut/LoggedOut.jsx';

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
                <h1>Geckos team 4</h1>
                <LoggedOut />
            </>
        }
        </div>
      );
    }
}


export default App;
