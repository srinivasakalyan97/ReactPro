import React from 'react';

const Greet= (props)=>{
    const {name , value} = props //Destructuring props
    const functionClick = ()=>{console.log("btn clicked function")}
    return (
    <div>
        <h1>Function Based Component {name}, {value}</h1>
        {props.children}
        <button onClick={functionClick}>Click me Function Based</button>
    </div>
    )
    }

export default Greet