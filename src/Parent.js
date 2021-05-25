import React from 'react';
import Child from './Child.js'
function Parent(props) {
  return (
    <div>Parent
        {/* after passing num property the number in Parent tag in App.js we make num property for child tag in PArent.js
        and the pass props.num to it. */}
      {/* <Child num={props.num}></Child> */}
      <Child ></Child>
    </div>
  );
}

export default Parent;
