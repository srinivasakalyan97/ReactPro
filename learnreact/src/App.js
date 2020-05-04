import React, { Component } from 'react';
import './App.css';
import Greetings from './classBased';
import Greet from './functionBased';
import Withoutjsx from './jsxExample';

class App extends Component {
  render(){
  return (  
    <div className="App">
      <Greetings />
      <Greet />
      <Withoutjsx />

    </div>
  );
}
}
export default App;
