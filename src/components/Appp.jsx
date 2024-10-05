import React from 'react'
import { withToppings } from '../withToppings';
import { SimpleComponent } from '../SimpleComponent';

const UpgradedBurger = withToppings(SimpleComponent);

function Appp() {
    return (
        <div>
            <h1>Burger Shop</h1>
            <UpgradedBurger />
        </div>
    )
}

export default Appp;
