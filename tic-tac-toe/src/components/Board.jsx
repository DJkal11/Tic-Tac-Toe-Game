import Block from "./Block";
import useState from "react";

function Board(){

  

  
  return (
      
   <div className="Board">
     <div>
         <Block />
         <Block />
         <Block />
     </div>

     <div>
         <Block />
         <Block />
         <Block />
     </div>
    
     <div>
         <Block />
         <Block />
         <Block />
     </div>

   </div>
  )

}

export default Board;