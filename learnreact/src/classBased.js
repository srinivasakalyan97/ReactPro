import React, { Component } from 'react';

class Greetings extends Component {
    render(){
        const {name , value} = this.props //Destructuring props
    return (
    <div>
    <h1>Class Based Component {name}, {value}</h1>
    {this.props.children}
    </div>
    )}
}

export default Greetings