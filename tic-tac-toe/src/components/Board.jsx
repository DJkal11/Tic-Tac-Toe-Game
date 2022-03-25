import React from "react";
import Block from "./Block";
import useState from "react";

function Board(){

    const [blocks, setBlocks] = useState(['','','','','','','','',''])
    const [isCondition, setCondition] = useState(true);

    function handleClick(position) {
        if (isCondition){
            blocks[position] = "X";
        } else {
            blocks[position] = "O";
        }
        setBlocks(blocks);
        setCondition(!isCondition);
       } 

  return (
      
   <div className="Board">
  <div>
         <Block value={blocks(0)} onClick={() => handleClick(0)}/>
         <Block value={blocks(1)} onClick={() => handleClick(1)}/>
         <Block value={blocks(2)} onClick={() => handleClick(2)}/>
     </div>

     <div>
         <Block value={blocks(3)} onClick={() => handleClick(3)}/>
         <Block value={blocks(4)} onClick={() => handleClick(4)}/>
         <Block value={blocks(5)} onClick={() => handleClick(5)}/>
     </div>
    
     <div>
         <Block value={blocks(6)} onClick={() => handleClick(6)}/>
         <Block value={blocks(7)} onClick={() => handleClick(7)}/>
         <Block value={blocks(8)} onClick={() => handleClick(8)}/>
     </div>
   </div>
  )

}

export default Board;