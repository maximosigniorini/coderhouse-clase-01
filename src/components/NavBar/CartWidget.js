import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const CartWidget = () => {
    return (
        <>
            <li><NavLink to='/cart'>
                <span class="fa-layers fa-fw">
                    <i class="fas fa-shopping-cart"></i>
                </span>
            </NavLink>
            </li>
            {/* <span class="fa-layers fa-fw">
                <i class="fas fa-envelope"></i>
                <span class="fa-layers-counter">1,419</span>
            </span> */}
        </>
    )
}

export default CartWidget