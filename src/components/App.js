import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogData from "../porkers_data";

function App() {

  console.log("app hog data", hogData)
  
  
  return (
    <div className="App">
      <Nav />
      <HogList hogData={hogData} />
    </div>
  );
}

export default App;
