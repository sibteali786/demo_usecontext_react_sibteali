import React from 'react'
// const ValueContext = React.createContext(45);
const ValueContext = React.createContext(45,()=>{});
export default ValueContext;
// Context 
/* It has two things 
Provider 
when we use context we provide so that component within that tree can access that value
Consumer 
we use consumer to consume the value   */

/* The default value displayed in child.js is displayed what we have provided to context here. */

/* If one is using context without using provider then we provide efault function in createContexts*/