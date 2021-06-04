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
        cant === 0 ? setBotonActivo(false) : setBotonActivo(true);
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
        <div className='mt-8 flex items-center'>
            <ButtonSignos clase='fas fa-minus btn mr-4 text-xl' handlerClick={restar} />
            <span className='mr-4 lg:float-right text-xl'> {cant} </span>
            <ButtonSignos clase='fas fa-plus btn mr-4 text-xl' handlerClick={sumar} />
            <>
                {botonActivo ? <ButtonCompra clase='rounded-lg h-14 w-24 text-xl ml-10 mb-4 bg-green-600 hover:bg-green-400' texto='Comprar' handlerClick={onAdd} />
                    :
                    <NavLink to='/cart'><ButtonCompra clase='rounded-lg h-14 w-40 text-xl ml-10 mb-4 bg-red-500 hover:bg-red-300' texto='Terminar Compra' /></NavLink>
                }
            </>
        </div>
    )
}