import React, { Component } from 'react'
// import Greet from './components/Greet';
// import welcome from './components/Welcome';
// import Welcome from './components/Welcome';
// import Hello from './components/hello';
// import Preet from './components/preet';
import First from './components/First';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Greet> </Greet> */}
                {/* <Welcome> </Welcome > */}
                {/* <Hello /> */}
                {/* <Preet name="Mayur" heroName="Batman" />
                <p>this is children props</p>
                <Preet name="Monu" heroName="Spiderman" />
                <button>Action</button>
                <Preet name="Milind" heroName="Superman" />


                <Welcome name="Mayur" heroName="Batman" />
                <Welcome name="Monu" heroName="Spiderman" />
                <Welcome name="Milind" heroName="Superman" /> */}
                <First />




            </div >
        );
    }
}

export default App;