import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
    render() {
        console.log('Pure Component rendered');
        return <div>Hello, how are u ? {this.props.name}</div>;
    }
}

export default MyPureComponent;
