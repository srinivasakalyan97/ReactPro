import React from 'react'

 function MemoFunc({message}) {
    console.log("memo",message);
    return (
        <React.Fragment>
            <p>{message}</p>
        </React.Fragment>
    )
}

export default React.memo(MemoFunc)