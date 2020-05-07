import React, { Component } from 'react'
import ChildComponentC from './ChildComponentC';
 class ParentComponentC extends Component {
    
    greetFromChild(childParam){
        console.log(`hello I'm  from other component`)
    }
    
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponentC temp={this.greetFromChild} />
            </div>
        )
    }
}

export default ParentComponentC
