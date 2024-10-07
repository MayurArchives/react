import React, { useState } from 'react'

function Hooks() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 2)} > count{count}</button>

        </div>
    )
}

export default Hooks
