 
import React from "react";
import Button from '@mui/material/Button';

function Block({value, onClick}) {
    return (
      <Button variant="outlined" className="Block" onClick={onClick}>
        <h1>{value}</h1>
      </Button>
    );
  }

  export default Block;