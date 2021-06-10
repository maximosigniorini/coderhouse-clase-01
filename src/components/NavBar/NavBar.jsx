import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import logo from "./../../assets/imgs/logo.png";
import CartWidget from "./CartWidget";
import Dropdown from './Dropdown'

export default function NavBar() {
    const { items } = useContext(CartContext);
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <NavLink to="/">
                        <img src={logo} alt="" className="logo w-14" />
                    </NavLink>

                    <button
                        className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex ml-auto order-2 clear-both" +
                        (navbarOpen ? "flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <NavLink exact to='/' className='px-3 py-2 flex items-center text-s uppercase leading-snug text-black hover:opacity-60'>
                                <span className="flex-1 text-right text-black hover:text-gray-500">Inicio</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Dropdown />
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/conocenos' className='px-3 py-2 flex items-center text-s uppercase leading-snug text-black hover:opacity-75'>
                                <span className="flex-1 text-right text-black hover:text-gray-500">Conocenos</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/contacto' className='px-3 py-2 flex items-center text-s uppercase leading-snug text-black hover:opacity-75'>
                                <span className="flex-1 text-right text-black hover:text-gray-500">Contacto</span>
                            </NavLink>
                        </li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
