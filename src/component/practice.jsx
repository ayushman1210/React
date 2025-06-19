import { useState } from "react";

const Practice=()=>{
   
    const [count,setcount]=useState(0)
    const handle=()=>setcount(count+1)
    const handle1=()=>setcount(count-1)

    return (
<div>
    <h1>{count}</h1>
    <button onClick={handle}>add</button>
    <button onClick={handle1}>Remove</button>
</div>
    )
}

export default Practice