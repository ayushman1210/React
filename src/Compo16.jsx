import { Data4 } from "./App";
import React from 'react'

const Compo16 = () => {
  return (
<Data4.Consumer>
    {(Name)=>{
        return  <h1>{Name}</h1>
        }}
</Data4.Consumer>
  )
}

export default Compo16;