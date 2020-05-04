import React, { Component } from 'react';

class Greetings extends Component {
    render(){
    return <h1>Class Based Component {this.props.name}, {this.props.value}</h1>
    }
}

export default Greetings