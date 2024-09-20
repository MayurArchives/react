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
                <Preet name="Mayur" heroName="Batman" />
                <p>this is children props</p>
                <Preet name="Monu" heroName="Spiderman" />
                <button>Action</button>
                <Preet name="Milind" heroName="Superman" />
            </div >
        );
    }
}

export default App;