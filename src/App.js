import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js'
import ValueContext from './ValueContext';
function App() {
  // let [number,setnumber] = useState(45);
  // let value = [number,setNumber] = useState(48);
  let value = useState(48);
  // where value[0] has the array and value[1] has the function
  return (
    <ValueContext.Provider value={value}>

    <div>Hello World
      <Parent ></Parent>
      <button >Number</button>
      {/* Context 
      Context hae a property which can then be used by all who are part of the context*/}
      
    </div> 
    </ValueContext.Provider>
  );
}

export default App;
