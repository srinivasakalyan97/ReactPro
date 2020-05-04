import React, { Component } from 'react';
import './App.css';
import Greetings from './classBased';
import Greet from './functionBased';
import Withoutjsx from './jsxExample';

class App extends Component {
  render(){
  return (  
    <div className="App">
      <Greetings name="PAssING pRoPs class based" value="SUCCESS">
        <button>props.children</button>
      </Greetings>
      <Greet name="PAssING pRoPs function based" value="SUCCESS">
        <h1>Props children</h1>
      </Greet>
      <Greetings />
      <Greet />
      <Withoutjsx />

    </div>
  );
}
}
export default App;
