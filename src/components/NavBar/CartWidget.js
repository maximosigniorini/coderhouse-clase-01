import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { cantidadItems } = useContext(CartContext)
    //ml-8 mr-8
    return (
        <>
            <div className='flex order-2 clear-both ml-16 lg:ml-0'>
                <li className='list-none nav-item'><NavLink to='/cart' className='text-gray-700 hover:text-gray-600 text-md'>
                    <span class="fa-stack">
                        <span class="fas fa-shopping-cart"></span>
                        <strong class="fa-stack-1x mt-1 ml-6 bg-blue-300 hover:bg-blue-100 rounded-full w-6 h-6 leading-6">
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