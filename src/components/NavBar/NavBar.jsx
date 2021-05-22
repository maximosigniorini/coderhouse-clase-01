import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { getFirestore } from '../../firebase'
import { CartContext } from '../../context/CartContext'
import './NavBar.css'
import logo from './../../assets/imgs/logo.png'
import CartWidget from './CartWidget'


export default function NavBar() {

    const { items } = useContext(CartContext)
    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const categorias = db.collection('categorias');
        categorias.get()
            .then((querySnapshot) => {
                const documentos = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                    doc.data();
                })
                console.log(documentos);
                setCategoria(documentos)
            })
    }, [])

    return (
        <nav className="NavBarItems">
            <NavLink to='/'><img src={logo} alt="" className="logo" /></NavLink>
            <ul className="nav-menu">
                <li><NavLink exact to='/' activeClassName='paginaActual'>Inicio | </NavLink></li>
                <li><NavLink to='/category/menu' activeClassName='paginaActual'>Menu | </NavLink>
                    <div className='subMenu'>
                        <ul>
                            {categoria.map((cat) =>
                                <li><NavLink to={`/category/${cat.id}`}>{cat.nombre}</NavLink></li>
                            )}
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