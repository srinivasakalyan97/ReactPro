import React from 'react';

const Withoutjsx = ()=>{
    return React.createElement('div',{className:'withoutJSX',id:'withoutJsxID'},
           React.createElement('h1',null,'This is without JSX')
    )
}

export default Withoutjsx;