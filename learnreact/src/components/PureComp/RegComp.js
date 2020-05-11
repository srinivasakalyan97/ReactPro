import React, { Component } from 'react'

class RegComp extends Component {
    
    
    render() {
        console.log("reg",this.props.message);
        return (
            <div>
                <p>reg comp {this.props.message}</p>
            </div>
        )
    }
}

export default RegComp
