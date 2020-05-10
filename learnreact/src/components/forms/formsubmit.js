import React, { Component } from 'react'

export class formsubmit extends Component {
    state={
        car:'carAudi',textaresacomment:'',inputemail:''
    }

    HandleSelect = (event)=>{
        console.log("inside")
        this.setState({
            car:event.target.value
        })
    }

    handleinputtext = (event) =>{
        this.setState({
            inputemail:event.target.value
        })
    }

    formsubmitted = (event) =>{
        console.log("form submit")
        console.log(`${this.state.inputemail}, ${this.state.car}, ${this.state.textaresacomment}`)
        event.preventDefault();
    }

    handleTextComment = (event) => {
        this.setState({
        textaresacomment:event.target.value
        })
    }

    render() {
        const   {car, textaresacomment, inputemail} = this.state
        return (
            <form onSubmit={this.formsubmitted}>
            <div>
                <h1>Form</h1>
        <label>Select a car{this.state.car}</label>&nbsp;
                <select id="selectCar" required value={car} onChange={this.HandleSelect}>
        <option defaultValue disabled>Select a car</option>
                
                    <option value="carAudi">Audi</option>
                    <option value="carRolls">Rolls Royce</option>
                    <option value="carBMW">BMW</option>
                    <option value="carLamborgini">Lamborgini</option>
                </select><br></br>
                <label>Comments</label>
                <textarea required id="commentsText" onChange={this.handleTextComment} value={textaresacomment}></textarea>
                <p>Entered comment{this.state.textaresacomment}</p>
        <p>Entered name:{this.state.inputemail}</p>
                <label>Name:
                    <input required type="text" name="name" value={inputemail} onChange={this.handleinputtext} />
                </label>
            </div>
            <button type="submit">submit</button>
            </form>
        )
    }
}


export default formsubmit
