import React from 'react'
import { Data4 } from '../App'
const Part16 = () => {
  return (
  <Data4.Consumer>{(Name)=>{return  <h1>{Name}</h1>
  }}</Data4.Consumer>
  )
}

export default Part16