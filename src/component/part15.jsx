import React from "react";
import { useState, useEffect } from "react";

function Part15() {
const [text,settext]=useState("");
const handle=()=>{
    settext("ayush,ma")
}
useEffect(()=>{
console.log("helo h")
},[])

return (
    <div>
        <h1>{text}</h1>
        <button onClick={handle}>hey </button>
    </div>
)
}


export default Part15;