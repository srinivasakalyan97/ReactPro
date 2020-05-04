import React from 'react';

const Greet= (props)=>{
    return (
    <div>
        <h1>Function Based Component {props.name}, {props.value}</h1>
        {props.children}
    </div>
    )
    }

export default Greet