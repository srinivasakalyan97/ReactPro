import React, { Component } from 'react';
import './App.css';
// import Greetings from './classBased';
// import Greet from './functionBased';
// import Withoutjsx from './jsxExample';
// import Stateinfo from './stateinfo'
// import Counter from './components/counter';
// import EventBindFourmethods from './components/eventBindFourmethods';
// import ParentComponentC from './components/ParentComponentC';
// import ListRendering from './components/ListRender/ListRendering';
// import RecieveList from './components/ListRender/RecieveList';
// import Formsubmit from './components/forms/formsubmit';
// import ParentFilePure from './components/PureComp/ParentFilePure';
// import CreateRef from './components/Refs/createRef';
import ParentRef from './components/Refs/ParentRef';
class App extends Component {
  render(){
  return (  
    <div className="App">
      {/* <Greetings name="PAssING pRoPs class based" value="SUCCESS">
        <button>props.children</button>
      </Greetings>
      <Greet name="PAssING pRoPs function based" value="SUCCESS">
        <h1>Props children</h1>
      </Greet>
      <Withoutjsx />
      <Stateinfo />
      <Counter /> */}
      {/* <EventBindFourmethods /> */}
      {/* <ParentComponentC /> */}
      {/* <ListRendering /> */}
      {/* <RecieveList  /> */}
      {/* <Formsubmit /> */}
      {/* <ParentFilePure /> */}
      {/* <CreateRef /> */}
      <ParentRef />
    </div>
  );
}
}
export default App;
