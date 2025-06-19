import { useState } from "react";

const Shopping=()=>{

    const [product,setproduct]=useState([
        {name:"maggi", quantity:"10"},
        {name:"tea",quantity:"11"}
    ]);

    const handle=setproduct(()=>)


    return (
        <div>
            <li>{product.name}</li>
            <li>{product.quantity}</li>
           <button onClick={handle}>add</button>
        </div>
    )
}


export default Shopping;