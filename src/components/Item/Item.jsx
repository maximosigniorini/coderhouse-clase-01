import React from 'react'
import {Link} from 'react-router-dom'
import ButtonSignos from '../Buttons/ButtonSignos'

export default function Item(props) {

    return (
        <div className="item w-72 h-94 ml-16 bg-red-500 rounded-md">
            <img src={props.img} alt='item' className='w-24 mx-auto mt-2'></img>
             <h2 className='text-2xl text-center'><Link to={`/item/${props.id}`}>{props.name}</Link></h2> 
            <p className='mt-2 ml-2 italic'>{props.descripcion}</p>
            <p className='text-center font-bold'>${props.precio}</p>
            <Link to={`/item/${props.id}`}><ButtonSignos clase='fas fa-cart-plus mt-4 flex items-center justify-center' color='green' tamaño='2rem'></ButtonSignos></Link>
        </div>
    )
}