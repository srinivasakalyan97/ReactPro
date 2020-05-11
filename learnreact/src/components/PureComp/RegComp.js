import React, { Component } from 'react'

class RegComp extends Component {
    
    
    render() {
        console.log("reg",this.props.message);
        return (
            <React.Fragment>
                <p>reg comp {this.props.message}</p>
            </React.Fragment>
        )
    }
}

export default RegComp
