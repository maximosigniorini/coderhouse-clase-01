import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ButtonSignos from '../Buttons/ButtonSignos'
import ButtonCompra from '../Buttons/ButtonCompra'

export default function ItemCount(props, btnActivo) {

    const { addItems } = useContext(CartContext)
    const [cant, setCant] = useState(1)
    const [botonActivo, setBotonActivo] = useState(false);

    useEffect(() => {
        if (cant === 0) {
            setBotonActivo(false)
        } else {
            setBotonActivo(true)
        }
    }, [cant])

    const sumar = () => {
        setCant(cant + 1)
    }

    const restar = () => {
        if (cant > 0) {
            setCant(cant - 1)
        } else if (cant === 0) {
            setCant(0)
            setBotonActivo(false)
        }
    }

    const onAdd = () => {
        addItems(cant, props)
        setBotonActivo(false)
    }

    return (
        <div className='botones'>
            <ButtonSignos clase='fas fa-minus btn' handlerClick={restar} />
            <span> {cant} </span>
            <ButtonSignos clase='fas fa-plus btn' handlerClick={sumar} />
            <>
                {botonActivo ? <ButtonCompra color='green' texto='Comprar' handlerClick={onAdd} />
                    :
                    <NavLink to='/cart'><ButtonCompra color='green' texto='Terminar Compra' /></NavLink>
                }
            </>
        </div>
    )
}