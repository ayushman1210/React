import React from "react";
import { useContext } from "react";
import { Data4 } from "../App";

const Compo17 = () => {
    const username=useContext(Data4);
  return (
    <div>{`hi my name is ${username}`}</div>
  )
}

export default Compo17