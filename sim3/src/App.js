import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
