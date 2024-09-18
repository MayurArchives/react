import React, { useState } from 'react'
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';

const App = () => {
    let [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((count) => count = count + 1);
    }
    return (
        <div>
            <First />
            <Second />
            <Third />
            <Fourth />
        </div>
    )
}

export default App