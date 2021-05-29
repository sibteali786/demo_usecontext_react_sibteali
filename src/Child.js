import React, {useContext} from 'react';
import ValueContext from './ValueContext';

function Child(props) {
  let value = useContext(ValueContext)
  return (
    <div>
        Child number {value}
        <br />
        <button onClick = {() => {value[1](++value[0])}}>Update Value</button>
    </div>
  );
}

export default Child;
