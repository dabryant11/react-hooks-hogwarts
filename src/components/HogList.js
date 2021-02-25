import React, {useState} from "react";
import HogDetails from "./HogDetails";
import HogCard from "./HogCard";

function HogList({hogData}){


   const hogItem = hogData.map((hog) => <HogCard key={hog.name} hog={hog} /> ) 

   const greasyHogs = hogData.filter((hog => hog.greased === true)  return <HogCard key={hog.name} hog={hog} /> )  
   const nonGreasyHogs = hogData.filter(hog => hog.greased === false)  <HogCard key={hog.name} hog={hog} /> ) 

    const [greasyPig, setGreasyPig] = useState(false)

   function filterPigs(){
       setGreasyPig((greasyPig) => !greasyPig)
       

   }
  
        return(
        
            <div className = "ui grid container">
                <button onClick = {filterPigs}>{greasyPig ? 'Greased' : 'Nongreased'}</button>
         
                {greasyPig ? {greasyHogs} : {nonGreasyHogs}}
                
            
        </div>
    )
}

export default HogList