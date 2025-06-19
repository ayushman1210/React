import { useState } from "react";


const Copycontent=()=>{

    const [inputvalue,setInput]=useState("")
    const [copied,setCopied]=useState(false)
    
    const handlecopy=()=>{
        navigator.clipboard.writeText(inputvalue).then(()=>{
        setCopied(true)
    setTimeout(()=> setCopied(false),200);})
    }
    return (
        <div>
        <input type="text" value={inputvalue} onChange={e=>setInput(e.target.value)} />
        <button onClick={handlecopy}>copy text</button>
        </div>)
}





export default Copycontent;