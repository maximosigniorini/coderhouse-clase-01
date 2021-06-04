import React from 'react'
import { Link } from 'react-router-dom'
import ButtonSignos from '../Buttons/ButtonSignos'

export default function Item(props) {
    //w-72 h-80
    return (
        <Link to={`/item/${props.id}`}>
            <div className="item w-72 h-72 ml-16 bg-red-500 rounded-md">
                <h2 className='text-xl font-bold text-center mt-4 p-2'>{props.name}</h2>
                <img src={props.img} alt='item' className='w-24 mx-auto'></img>
                <p className='mt-2 ml-4 mt-4 w-48 italic inline-block'>{props.descripcion}</p>
                <p className='font-bold inline-block float-right mr-4 mt-6 text-xl'>${props.precio}</p>
                <Link to={`/item/${props.id}`}><ButtonSignos clase='fas fa-cart-plus mt-4 flex items-center justify-center' color='green' tamaño='2rem'></ButtonSignos></Link>
            </div>
        </Link>
    )
}