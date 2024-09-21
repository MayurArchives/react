import React, { Component } from 'react'

class ClassClick extends Component {
    clickhandler() {
        console.log('clicked the button');

    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
