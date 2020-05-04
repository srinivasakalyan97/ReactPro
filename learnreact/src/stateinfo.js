import React, { Component } from 'react'

class Stateinfo extends Component{
    constructor(){
        super()
        this.state={
            message:'click to subscribe!'
        }
    }

    clickedfun(){
        this.setState(
            {message:'Thanks! Subscribed...'}
            )
    }

    render(){
        return(
            <div>
                <h1>Change the text</h1>
                <h3>{this.state.message}</h3>
                <button onClick={()=>this.clickedfun()}>Subscribe</button>
            </div>
        )
}
}

export default Stateinfo