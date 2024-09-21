import React, { Component } from 'react'
class Welcome1 extends Component {
    render() {
        const { name, heroName } = this.props
        return (<h1> welcome {name} a.k.a
            {heroName} </h1>
        )
    }
}
export default Welcome1