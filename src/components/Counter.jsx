import React, { useState } from 'react'

const Counter = () => {
    let [val, setVal] = useState(0);
    return (
        <div>
            <button onClick={() => setVal(val++)}>+</button>
            <p>{val}</p>
            <button>-</button>
        </div>
    )
}

export default Counter