import React from "react";
const Child = (props) => {
  const { state,setData} = props; //Destructuring
  return (
    <>
      <div>
        <p>CHILD SECTION</p>
          <p>{state}</p>
        <br />

        <input type="text" onChange={(e)=>{setData(e.target.value)}} placeholder="Enter name"/>
      </div>
    </>
  );
};
export default Child;
