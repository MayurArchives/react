import React, { Component, useState } from 'react'
import Greet from './components/Greet';
import welcome from './components/welcome';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Preet from './components/preet';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Greet> </Greet> */}
                {/* <Welcome> </Welcome > */}
                {/* <Hello /> */}
                <Preet name="Mayur" />
                <Preet name="Monu" />
                <Preet name="Milind" />
            </div >
        );
    }
}

export default App;