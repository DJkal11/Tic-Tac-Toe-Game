import Block from "./Block";
import useState from "react";



function Board(){

const [block, setBlock] = useState(Array(9).fill(null))
const [isCondition, setCondition] = useState(true);

 function handleClick(position) {
  if (isCondition){
      block[position] = "X";
  } else {
      block[position] = "O";
  }
  setBlock(block);
  setCondition(!isCondition);
 } 

  return (
      
   <div className="Board">
     <div>
         <Block value={block(0)} onClick={() => handleClick(0)}/>
         <Block value={block(1)} onClick={() => handleClick(1)}/>
         <Block value={block(2)} onClick={() => handleClick(2)}/>
     </div>

     <div>
         <Block value={block(3)} onClick={() => handleClick(3)}/>
         <Block value={block(4)} onClick={() => handleClick(4)}/>
         <Block value={block(5)} onClick={() => handleClick(5)}/>
     </div>
    
     <div>
         <Block value={block(6)} onClick={() => handleClick(6)}/>
         <Block value={block(7)} onClick={() => handleClick(7)}/>
         <Block value={block(8)} onClick={() => handleClick(8)}/>
     </div>

   </div>
  )

}

export default Board;