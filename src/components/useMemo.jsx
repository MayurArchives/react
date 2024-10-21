import React, { useState, useMemo } from 'react';

const EvenOddChecker = () => {
    const [number, setNumber] = useState(0);

    // useMemo will only recompute the result if `number` changes
    const isEven = useMemo(() => {
        console.log('Checking if the number is even or odd...');
        return number % 2 === 0;
    }, [number]);

    return (
        <div>
            <h1>{number}</h1>
            <h2>{isEven ? 'Even' : 'Odd'}</h2>
            <button onClick={() => setNumber(prev => prev + 1)}>Increment</button>
        </div>
    );
};

export default EvenOddChecker;
