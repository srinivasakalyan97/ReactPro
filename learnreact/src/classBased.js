import React, { Component } from 'react';

class Greetings extends Component {
    btnClickClassBased = () =>console.log("btn clicked class")
    render(){
        const {name , value} = this.props //Destructuring props
    return (
    <div>
    <h1>Class Based Component {name}, {value}</h1>
    {this.props.children}
    <button onClick={this.btnClickClassBased}>Class Based btn</button>
    </div>
    )}
}

export default Greetings