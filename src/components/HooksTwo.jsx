import React, { useState } from 'react'

function HooksTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/* <button onClick ={()=>setCount(initialCount)}>Reset</button> */}





        </div>
    )
}

export default HooksTwo
