import React from 'react'
import {Link} from 'react-router-dom'
import ButtonSignos from '../Buttons/ButtonSignos'
import './Item.css'

export default function Item(props) {

    return (
        <div className="item">
            <img src={props.img} alt='item'></img>
             <h2><Link to={`/item/${props.id}`}>{props.name}</Link></h2> 
            <p>{props.descripcion}</p>
            <p>${props.precio}</p>
            <Link to={`/item/${props.id}`}><ButtonSignos clase='fas fa-cart-plus btn' color='green' tamaño='2rem'></ButtonSignos></Link>
        </div>
    )
}