import React, {useContext} from 'react';
import ValueContext from './ValueContext';

function Child(props) {
  let value = useContext(ValueContext)
  return (
    <div>
        {/* Finally the props.num is used to access number useState in Child.js   */}
        {/* Child number {props.num} */}
        Child number {value}
    </div>
  );
}

export default Child;
