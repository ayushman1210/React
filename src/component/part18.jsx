import React from 'react'
import { useRef } from 'react';
const Part18 = () => {
    const inputElement=useRef(null);
    const point=()=>{
        inputElement.current.focus();
    }
  return (
    <div>
        <input type="text"  ref={inputElement}/>
        <button onClick={()=> point()}>write</button>
    </div>
  )
}

export default Part18;