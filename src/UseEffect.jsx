import React, { useEffect, useState } from 'react'

const UseEffect = () =>{
    const[count,setcount] = useState(0)
    //First type of useEffect
    // useEffect(()=>{
    //     console.log("Hello inside from first type useffect")
    // },[])

    //Second type useEffect
  //   useEffect(()=>{
  //     console.log("Second type pf useffect")
  // },[count])

  //Third types of useEffect
  useEffect(()=>{
      console.log("Third Types of UseEffect ")      
  })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}} >+</button>
    </div>
  )
}

export default UseEffect