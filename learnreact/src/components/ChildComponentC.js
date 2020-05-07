import React from 'react'

export default function ChildComponentC(props) {
    var sample={"hello":"satya"}
    return (
        <div>
            <h1>Child component</h1>
            <button onClick={props.temp}>click</button>
            {/* <button onClick={()=>props.temp(sample)} >Send Param</button> */}
        </div>
    )
}
