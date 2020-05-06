import React from 'react';

const Greet= (props)=>{
    const {name , value} = props //Destructuring props
    return (
    <div>
        <h1>Function Based Component {name}, {value}</h1>
        {props.children}
    </div>
    )
    }

export default Greet