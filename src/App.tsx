import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  public render() {
    return (
      <div className={'main-page'}>
        <Home/>
      </div>
    );
  }
}

export default App;
