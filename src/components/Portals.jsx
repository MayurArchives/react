import React from 'react';
import ReactDOM from 'react-dom';

function Portals({ children }) {
    const portalRoot = document.getElementById('modal-root');
    console.log(portalRoot); // This should log the DOM element

    if (!portalRoot) {
        return null; // Return null if the portal root does not exist
    }

    return ReactDOM.createPortal(
        <div className='Portals'>
            {children}
        </div>,
        portalRoot
    );
}

export default Portals;
