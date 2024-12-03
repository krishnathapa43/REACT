import { useState } from "react"
import Button from "./Button"

function About(){
    // const state = useState(0)
    // const firstItem = state[0]
    // const secondItem = state[1]

    //syntax of Hook
    const [number,setNumber] = useState(0)

    const [name1,setName1] = useState({
        name: "krishna", 
        address: "surkhet"
    })


    // const increaseCount = ()=>{
    //     secondItem(firstItem + 1)

        const increaseCount = ()=>{
            setNumber(number + 1)
    }
    const decreseCount = ()=>{
        setNumber(number - 1)
}
    return(
        
        <div>
            <h1>{name1.name}</h1>
            <h1>{number}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreseCount}>-</button>
        </div>
    )
}

export default About