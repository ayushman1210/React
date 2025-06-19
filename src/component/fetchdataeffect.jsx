import { useState, useEffect } from "react";
import React from "react";


const Fetch=()=>{
 const [data,setdata]=useState([])

 useEffect(()=>{
async function getdata(){
 const response=await fetch("https://dummyjson.com/quotes");
 const da= await response.json();
 if (da.quotes){setdata(da.quotes)}
}
getdata();
},[])

return (
    <div>
     <ul>
        {data.map((d)=>(
            <li key={d.id}>{d.id}</li>
        ))}
     </ul>
    </div>
)
}



export default Fetch;