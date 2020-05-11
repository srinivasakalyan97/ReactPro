import React from 'react'

 function MemoFunc({message}) {
    console.log("memo",message);
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default React.memo(MemoFunc)