import React, { useState } from 'react';

function HooksCounterThree() {
    const [name, setName] = useState({
        firstName: '', lastName: ''
    });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                    placeholder="Last Name"
                />
                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your last name is: {name.lastName}</h2>
            </form>
        </div>
    );
}

export default HooksCounterThree;
