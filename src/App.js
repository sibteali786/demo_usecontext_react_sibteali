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
      {/* Now here we want to pass number to child component which can be 
      by using parent  */}
      {/* <Parent num = {number}></Parent> */}
      <Parent ></Parent>
      {/* <button onClick={()=> setnumber(++number)}>Number</button> */}
      <button >Number</button>
      {/* The setnumber here is updating number not only in App.js but in parent and child as well 
      which is a draw back */}
      {/* Context 
      Context hae a property which can then be used by all who are part of the context*/}
      
    </div> 
    </ValueContext.Provider>
  );
}

export default App;
