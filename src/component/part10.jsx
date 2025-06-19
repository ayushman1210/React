import { useState } from "react";

const Todo=()=>{
    const[data,setData]=useState([]);
    const [inputvalue,setinputvalue]=useState("");
    const handle=(e) =>{e.preventDefault(); if(inputvalue.trim()) setData([...data,inputvalue]); setinputvalue("") }
    const handlechange=(e)=>{
        setinputvalue(e.target.value);
    }
    return (
        <div>
          <form onSubmit={handle}> <input type="text" value={inputvalue}  onChange={ handlechange} placeholder="add todo" />
          <button type="submit"> add todo</button>
          </form>

        {data.map((todo,index)=>(
            <li key={index}>*{todo}</li>
        ))}
        </div>
    )
}

export default Todo;