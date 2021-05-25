import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { cantidadItems } = useContext(CartContext)

    return (
        <>
            <div class="flex justify-center md:block">
                <li><NavLink to='/cart' className='relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'>
                    <span class="fa-stack">
                        <span class="fas fa-shopping-cart"></span>
                        <strong class="fa-stack-1x">
                            {cantidadItems()}
                        </strong>
                    </span>
                </NavLink>
                </li>
            </div>
        </>
    )
}

export default CartWidget