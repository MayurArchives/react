import React from 'react'

const Preet = props => {
    console.log(Preet)
    return (
        <div>
            <h1>hello {props.name} a.k.a{props.heroName}</h1>
            {props.children}

        </div>
    )

}

export default Preet