import React, { createContext, useContext } from 'react'
const MyContext = createContext();


export function ParentComponent() {
    return (
        <MyContext.Provider value="Hello from Context!">
            <ChildComponent />
        </MyContext.Provider>
    )
}


function ChildComponent() {
    const contextValue = useContext(MyContext);
    return <div>{contextValue}</div>
}




export { MyContext }


