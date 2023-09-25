import React from "react";
import { useState } from "react";
import Child from "../childComponents/child";
const Parent = () => {
  const [initalState, setInitialState] = useState("ANIL");
  const [data, setData] = useState("");
  return (
    <>
      <div>State</div>
      <p>Data : {data}</p>
      <Child state={initalState} setData={setData} />
    </>
  );
};
export default Parent;
