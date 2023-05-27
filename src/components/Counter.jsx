import { useState } from "react"

export function Counter() {
    const [num, setCount] = useState(0);
    function decrementNum(){
        setCount((numCount) => {
            return numCount - 1
        })
        
    }

    function incrementNum(){
        setCount((numCount) => numCount + 1)
    }

    return(
        <div className="counter">
            <button onClick={decrementNum}>-</button>
            <span>{num}</span>
            <button onClick={incrementNum}>+</button>
        </div>
    )
}