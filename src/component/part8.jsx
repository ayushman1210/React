import { useState } from "react";

const Data=()=>{
  const [name, setName]=useState(['ayush','man'])
//  const arr=['ayush','man',"ayushmna"]
  // const handle=()=>setName(arr)
  const handle=()=>setName([...name, "ayushmna" ])
  const handle1=()=>setName([name.filter((f)=>(f!="aysuhman"))]);
  const update=()=>setName([name.map((f)=>f=='aysuhman'? "ayushman":" ")])

  return(
    <div>
        {name.map((f)=>(
            <li>{f}</li>
        ))}
        <button onClick={handle}>add</button>
        <button onClick={handle1}>remove</button>
        <button onClick={update}>update</button>
    </div>
  )
}

export default Data;