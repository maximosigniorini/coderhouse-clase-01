import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './NavBar.css'
import logo from './../../assets/imgs/logo.png'
import CartWidget from './CartWidget'


export default function NavBar() {

    const { items } = useContext(CartContext)

    return (
        <nav className="NavBarItems">
            <NavLink to='/'><img src={logo} alt="" className="logo" /></NavLink>
            <ul className="nav-menu">
                <li><NavLink exact to='/' activeClassName='paginaActual'>Inicio | </NavLink></li>
                <li><NavLink to='/category/menu' activeClassName='paginaActual'>Menu | </NavLink>
                    <div className='subMenu'>
                        <ul>
                            <li><NavLink to='/category/pizzas'>Pizzas</NavLink></li>
                            <li><NavLink to='/category/empanadas'>Empanadas</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink to='/conocenos' activeClassName='paginaActual'>Concenos | </NavLink></li>
                <li><NavLink to='/contacto' activeClassName='paginaActual'>Contacto | </NavLink></li>
                <>
                {items.length > 0 ? <CartWidget /> : <span></span>}
                </>
            </ul>
        </nav>
    )
}