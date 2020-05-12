import React, { Component } from 'react';
import CreateRef from './createRef';

 class ParentRef extends Component {
    constructor(props) {
        super(props)
    
        this.prntref = React.createRef();
    }

    handleEvent = () =>{
        this.prntref.current.focusInput();
    }
    
    render() {
        return (
            <div>
                <CreateRef ref={this.prntref}/>
                <button onClick={this.handleEvent}>click to focus</button>
            </div>
        )
    }
}

export default ParentRef
