
   
import React from "react";

function Block({value, onClick}) {
    return (
      <button className="Block" onClick={onClick}>
        <h1>{value}</h1>
      </button>
    );
  }

  export default Block;