import React, {useState} from "react";
// import assets from "/Users/darienbryant/Flatiron/4phase/react-hooks-hogwarts/src/assets";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";
import Hogs from "./HogList";
import HogDetails from "./HogDetails";












function HogCard({hog}){
    // const {name, specialty, greased, weight, 'highest medal achieved': medal} = hog
    // const {'highest medal achieved': medal} = hog

    const images = {
        Babe: babe,
        Porkchop: porkchop,
        Cherub: cherub,
        "Piggy Smalls": piggy_smalls,
        "Augustus Gloop": augustus_gloop,
        Bailey: bailey ,
        "Galaxy Note": galaxy_note ,
        "Leggo My Eggo": leggo_my_eggo ,
        Peppa: peppa ,
        Piglet: piglet ,
        Trouble: trouble ,
        "Truffle Shuffle": truffle_shuffle 
      };




      const [showDetails, setShowDetails] = useState(false)
      const [isHidden, setIsHidden] = useState(false)
      const {name, specialty} = hog

      function handleClick(){
          setShowDetails((showDetails) => !showDetails)
        //   if(isHidden) return null;
          
      }


      

    return(
            <div className="ui card eight wide column pigTile">
                <h1> Name: {name}</h1>
                <div className="image">
                <img onClick = {handleClick} src={images[name]} alt={name} />
                </div>
                



                    <div>
                        {showDetails ? <HogDetails hog={hog} /> : null}
                    </div> 
            </div>
    )
}

export default HogCard