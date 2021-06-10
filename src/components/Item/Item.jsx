import React from 'react'
import { Link } from 'react-router-dom'
import ButtonSignos from '../Buttons/ButtonSignos'

export default function Item(props) {
    return (
        <Link to={`/item/${props.id}`}>
            <div className="w-72 h-64 ml-16 bg-red-500 rounded-md">
                <h2 className='text-xl font-bold text-center mt-4 p-2'>{props.name}</h2>
                <img src={props.img} alt='item' className='w-24 mx-auto'></img>
                <p className='font-bold inline-block float-right mr-16 mt-6 text-xl'>${props.precio}</p>
                <ButtonSignos clase='fas fa-cart-plus mt-6 ml-16' color='green' tamaño='2rem'></ButtonSignos>
            </div>
        </Link>
    )
}