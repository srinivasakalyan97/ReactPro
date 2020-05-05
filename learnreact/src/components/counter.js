import React, { Component } from 'react'

 class counter extends Component {

    constructor(){
        super()
        this.state={
            count:0,
            add:1
        }
    }

    // IncrementFunction(){
    //     this.setState(
    //         {count:this.state.count+1},
    //         ()=>console.log(this.state.count)
    //     )
    // }

    IncrementFunction(){
        this.setState(
            (prevState,props)=>({count:prevState.count+1}),console.log(this.state.count)
        )
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.IncrementFunction()}>Click</button>
            </div>
        )
    }
}

export default counter
