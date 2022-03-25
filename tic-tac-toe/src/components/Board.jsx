import Block from "./Block";
import { useState } from 'react';



function Board(){
const arr = new Array(9).fill(null);
const [block, setBlock] = useState(arr)
const [isCondition, setCondition] = useState(true);
const winningPlayer = determineWinner(block);
let setWinner = "";

 function handleClick(position) {
if (determineWinner(block) || block[position]) {
    return
  }
  if (isCondition){
       block[position] = "X";
  } else {
       block[position] = "O";
  }
  setBlock(block);
  setCondition(!isCondition);
 
 } 


    
    if(winningPlayer){
        setWinner= "Player "+winningPlayer+" wins!";
    } else {
        setWinner= "Player "+ (isCondition ? "X" : "O") + " turn!";
    }


 function determineWinner(block){
    const CombonationWins = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
   
      for (let i = 0; i < CombonationWins.length; i++) {
        const [a, b, c] = CombonationWins[i];
        if (block[a] && block[a] === block[b] && block[a] === block[c]) {
          return block[a];
        }
      }
      return null;
    
 }


 function Restart(){
    setBlock(Array(9).fill(null));
    setCondition(true);
  }

  return (
      
   <div className="Board">
     <div>
         <Block value={block[0]} onClick={() => handleClick(0)}/>
         <Block value={block[1]} onClick={() => handleClick(1)}/>
         <Block value={block[2]} onClick={() => handleClick(2)}/>
     </div>

     <div>
         <Block value={block[3]} onClick={() => handleClick(3)}/>
         <Block value={block[4]} onClick={() => handleClick(4)}/>
         <Block value={block[5]} onClick={() => handleClick(5)}/>
     </div>
    
     <div>
         <Block value={block[6]} onClick={() => handleClick(6)}/>
         <Block value={block[7]} onClick={() => handleClick(7)}/>
         <Block value={block[8]} onClick={() => handleClick(8)}/>
     </div>

   <div><h1>{setWinner}</h1></div>
   <button className="restart" onClick={Restart}>Restart Game!</button>
   </div>
  )

}

export default Board;