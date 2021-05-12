import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import ButtonSignos from '../Buttons/ButtonSignos'
import {CantContext} from '../../context/cartContext'
import './Item.css'

export default function Item(props) {

    // const [numero, setNumero] = useState(1)
    const [cant, setCant] = useContext(CantContext)

    const sumar = () => {
        setCant(cant + 1)
    }

    const restar = () => {
        if(cant > 0){
            setCant(cant - 1)
        }
    }

    const agregar = () => {
        console.log(cant);
    }

    return (
        <div className="item">
            <img src={props.img}></img>
            <h2><Link to={`/item/${props.id}`}>{props.name}</Link></h2>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
            <ButtonSignos clase='fas fa-minus btn' handlerClick={restar}/>
            <span>{cant}</span>
            <ButtonSignos clase='fas fa-plus btn' handlerClick={sumar}/>
            <br /> <br />
            <ButtonSignos clase='fas fa-cart-plus btn' color='green' tamaño='2rem' handlerClick={agregar}/>
        </div>
    )
}