import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './NavBar.css'


const CartWidget = () => {

    const { items } = useContext(CartContext)

    return (
        <>
            <li><NavLink to='/cart'>
                {/* <span class="fa-layers fa-fw">
                    <i class="fas fa-shopping-cart"></i>
                </span> */}

                <span class="fa-stack">
                    <span class="fas fa-shopping-cart"></span>
                    <strong class="fa-stack-1x">
                        {items.length}
                    </strong>
                </span>
            </NavLink>
            </li>
        </>
    )
}

export default CartWidget