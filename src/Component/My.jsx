import React, { useState } from 'react'
import './My.css'
function My() {
const[count ,setCount]=useState(0)

const IncNum=()=>{
    setCount(count+1);
   

};

  return (
    <>
       <div className='mydiv'>
         <h1>{count}</h1>
         <button className='btn' onClick={IncNum}>clickme</button>
       </div>
    </>
  )
}

export default My