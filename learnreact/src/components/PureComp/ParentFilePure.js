import React, { Component } from 'react'
import RegComp from './RegComp';
import PureCo from './PureCo';
import MemoFunc from './MemoFunc';


export class ParentFilePure extends Component {

    constructor(props) {
        super(props);
        this.state=({
            message:"Hello, World!"
        })
    }

    componentDidMount(){
        setInterval(()=>{this.setState({message:"Hello, Dunia!"})},2000)
    }
    

    render() {
        return (
            <div>
                <RegComp message={this.state.message} />
                <PureCo message={this.state.message} />
                <MemoFunc message={this.state.message} />
            </div>
        )
    }
}

export default ParentFilePure
