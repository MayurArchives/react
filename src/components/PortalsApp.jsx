import React from 'react'
import portals from './Portals';
import Portals from './Portals';

function PortalsApp() {
    return (
        <div>
            <h1>This is the main App component</h1>
            <Portals>
                <h2>This is a modal</h2>
            </Portals>
        </div>
    );
}

export default PortalsApp;
