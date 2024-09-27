import React, { useState } from 'react'

const MyMemoComponent = React.memo(({ name }) => {
    console.log('MyMemoComponent');
    return <div> Hello ,{name}!</div>
});

function App() {
    const [name, setName] = useState('Milind')

    return (
        <div>
            <h1>React.memo Example</h1>
            <button onClick={() => setName('Mayur')}> Update Name(same value)</button>
            <MyMemoComponent name={name} />
        </div>
    )
}

export default App
