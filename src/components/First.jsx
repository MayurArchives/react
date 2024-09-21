import React, { Component } from "react";

class First extends Component {
    constructor() {
        super();
        this.state = {
            First: 'Welcome Visitor'
        };
    }
    changeFirst() {
        this.setState({
            First: 'Thank You for Subscribing'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.First}</h1>
                <button onClick={() => this.changeFirst()}>Subscribe</button>
            </div>
        );
    }
}

export default First;
