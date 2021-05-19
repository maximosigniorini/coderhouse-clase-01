import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ButtonCompra from '../../components/Buttons/ButtonCompra'
import './CartContainer.css'

export default function CartContainer() {

    const { items, removeItems, total, clearItems } = useContext(CartContext)
    console.log(items);

    const [loading, setLoading] = useState(true)

    useEffect(() => {

    }, [])

    return (
        <>
            {items.length > 0 ?
                <div className='itemsCart'>
                    {items.map((item) =>
                        <div className='itemCart'>

                            <div className='quitarBtn'>
                                <span className='fas fa-minus-circle' onClick={() => removeItems(item.props.id)}> </span>
                            </div>

                            <div className="image">
                                <img src={item.props.img} className='fotoCart'></img>
                            </div>

                            <div className='tituloCartCont'>
                                <h3 className='tituloCart'>{item.props.titulo}</h3>
                            </div>

                            <div className="buttons">
                                {/* <ButtonSignos clase='fas fa-minus btn' /> */}
                                <span> Cantidad: {item.cnt} </span>
                                {/* <ButtonSignos clase='fas fa-plus btn' /> */}
                            </div>

                            <div className='subtotal'>Subtotal ${item.subTotal} </div>
                        </div>
                    )}
                    <div className='total'><b>Total: ${total()}</b></div>
                    <div className='borrarTodo' onClick={() => clearItems()}><i class='fas fa-trash'></i> Limpiar Carrito</div>
                </div>
                : <div className='empty'>
                    <h2 className='emptyTitle'>No hay items <i className='fas fa-heart-broken'></i></h2>
                    <div className='btn-volver'>
                        <NavLink to='/category/menu'><ButtonCompra color='grey' texto='Agregar Items' /></NavLink>
                    </div>
                </div>
            }
        </>
    )
}