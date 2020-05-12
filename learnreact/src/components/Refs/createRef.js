import React, { Component } from 'react'

 class createRef extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef()
    }

   focusInput(){
    this.inputRef.current.focus();
   }
   
   
   
    // componentDidMount(){
    //     this.inputRef.current.focus();
    // }

    // showName = ()=>{
    //     console.log("name",this.inputRef.current.value);
        
    // }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}  />
                {/* <button onClick={this.showName}>Click to show name</button>          */}
            </div>
        )
    }
}

export default createRef
