import React from 'react'

export function withToppings(WrappedComponent) {
    return function EnhancedComponent() {
        return (
            <div>
                <p>Added Cheese and Extra Toppings!</p>
                <WrappedComponent />
            </div>

        );
    };


}


