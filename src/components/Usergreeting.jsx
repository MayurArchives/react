import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true

        }
    }



    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Mayur
                </div>
            )
        }
        else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }

        // return (
        //     <div>
        //         <div>Welcome Mayur</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default Usergreeting
