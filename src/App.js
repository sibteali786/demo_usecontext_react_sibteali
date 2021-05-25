import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js'
import ValueContext from './ValueContext';
function App() {
  // let [number,setnumber] = useState(45);
  let value = 81;
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
