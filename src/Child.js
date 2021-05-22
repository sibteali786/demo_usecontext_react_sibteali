import React from 'react';

function Child(props) {
  return (
    <div>
        {/* Finally the props.num is used to access number useState in Child.js   */}
        Child number {props.num}
    </div>
  );
}

export default Child;
