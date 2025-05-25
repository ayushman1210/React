import { useState } from "react";

const Todo=()=>{
    const[data,setData]=useState([]);
    const handle=()=>setData([...data,'ayush'])
    return (
        <div>
            {data.map((x)=>(
                <li>{x}</li>
            ))}
            <button onClick={handle}>add item </button>
        </div>
    )
}

export default Todo;