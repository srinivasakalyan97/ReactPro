import React, { Component } from 'react';
import './App.css';
import Greetings from './classBased';
import Greet from './functionBased';
import Withoutjsx from './jsxExample';

class App extends Component {
  render(){
  return (  
    <div className="App">
      <Greetings name="PAssING pRoPs class based" value="SUCCESS"/>
      <Greet name="PAssING pRoPs function based" value="SUCCESS" />
      <Withoutjsx />

    </div>
  );
}
}
export default App;
