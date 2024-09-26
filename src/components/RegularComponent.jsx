import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log('Regular Component rendered');

        return <h1><div>Regular component Hello {this.props.name}</div></h1>

    }
}

export default RegularComponent;
