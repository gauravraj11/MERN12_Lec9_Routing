import React , { useState, useEffect }from 'react'
import './page.css'
export default function Contact() {

 const [count, setCount] = useState(7);
//  console.log("Contact Rerendered...");

useEffect(()=>{
  console.log("Contact Component Mounted");

  return () => {
    console.log("Contact Unmounted");

    // Memory wipeout
    
  };
  
},[])
  return (
    <div id='page'>
      {count}
     <br /><br />
    <button onClick={()=> setCount(count+5)}> Contact Click</button>
    </div>
  )
}
