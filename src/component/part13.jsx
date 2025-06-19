//useeffect

import { useState, useEffect } from "react";



const Part13 = () => {
  const [value, setvalue]=useState(0);
const [something,setsomething]=useState(0);
  
useEffect(()=>{console.log("hello")},[value]);
  return (
    <div>
 <h2>{value}</h2>
    <button onClick={()=>{setvalue(value+1)}}>click</button>
    <button onClick={()=>{setsomething(something+1)}}>me</button>
    </div>
  )
}

export default Part13;
