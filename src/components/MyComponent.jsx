import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Get Derived State From Props');
        return null;
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get Snapshot Before Update');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default MyComponent;
