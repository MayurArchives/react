import React, { Component, useState } from 'react'
import Greet from './components/Greet';
import welcome from './components/welcome';
import Welcome from './components/welcome';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Greet> </Greet>
                <Welcome> </Welcome >

            </div >
        );
    }
}

export default App;