import React, { Component } from 'react';

class Greetings extends Component {
    render(){
    return (
    <div>
    <h1>Class Based Component {this.props.name}, {this.props.value}</h1>
    {this.props.children}
    </div>
    )}
}

export default Greetings