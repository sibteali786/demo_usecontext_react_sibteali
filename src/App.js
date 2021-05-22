import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js'
function App() {
  let [number,setnumber] = useState(45);
  return (

    <div>Hello World
      {/* Now here we want to pass number to child component which can be 
      by using parent  */}
      <Parent num = {number}></Parent>
      <button onClick={()=> setnumber(++number)}>Number</button>
      {/* The setnumber here is updating number not only in App.js but in parent and child as well 
      which is a draw back */}
    </div>
  );
}

export default App;
