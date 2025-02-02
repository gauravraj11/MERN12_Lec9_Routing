import React , { useState, useEffect }from 'react'
import './page.css'
export default function About() {

 const [count, setCount] = useState(3);
//  console.log("About Rerendered...");

useEffect(()=>{
  console.log("About Component Mounted");
  return () => {
    console.log("About Unmounted");
    
  };
  
},[])
  return (
    <div id='page'>
        {count}
     <br /><br />
    <button onClick={()=> setCount(count+5)}> About Click</button>
    </div>
  )
}
