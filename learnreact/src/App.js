import React, { Component } from 'react';
import './App.css';
import Greetings from './classBased';
import Greet from './functionBased';

class App extends Component {
  render(){
  return (  
    <div className="App">
      <Greetings />
      <Greet />
    </div>
  );
}
}
export default App;
