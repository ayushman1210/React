import { useState, useEffect } from "react";
import React  from "react";

const Countereffect=()=>{
const [Count, setcount]=useState(0);
const handle=()=>{
setcount(Count+1);
}
useEffect(()=>{
document.title=Count;
console.log("hit the button")
},[Count])
return (
    <div>
        <h1>{Count}</h1>
        <button onClick={handle}>click me </button>
    </div>
)


}


export default Countereffect;