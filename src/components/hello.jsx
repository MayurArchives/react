// import React from "react";
// const Desfun = ({ name, heroName }) => {

//     return (
//         <div>
//             <h1 >
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }
// export default Desfun

import React from "react";
const Desfun = props => {
    const { name, heroName } = props

    return (
        <div>
            <h1 >
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}
export default Desfun

