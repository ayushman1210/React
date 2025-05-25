import { useState } from "react";


const Practice=()=>{
    let [count,setCount]=useState(0)
    
    const handle=()=>setCount(count=count+1)
    const handle1=()=>setCount(count=count-1)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handle}>add</button>
            <button onclick={handle1}>delete</button>
        </div>
    )

}


export default Practice;