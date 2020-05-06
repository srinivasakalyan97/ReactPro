import React, { Component } from 'react'

class eventBindFourmethods extends Component {
    constructor(props) {
        super(props);
        this.state= {
            message:'Hello, World!'
        }
        // this.Clickedfun = this.Clickedfun.bind(this)
    }
    
// Clickedfun(){
//     this.setState({
//         message:'Hello, Dunia!'
//     })
// }

Clickedfun = ()=>{
    this.setState({
        message:'Hello, Dunia!'
    })
}


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.Clickedfun.bind(this)}>Method 1 Not used mostly</button>  */}
                {/* <button onClick={()=>this.Clickedfun()}>Methods 2 Used if we are to pass parameters</button> */}
                {/* <button onClick={this.Clickedfun}>Method 3 by binding in constructor</button> */}
                <button onClick={this.Clickedfun}>Method 4 by declaring func as class property by arrow function</button>
            </div>
        )
    }
}

export default eventBindFourmethods
