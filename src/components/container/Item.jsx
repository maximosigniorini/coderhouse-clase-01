import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ButtonSignos from '../Buttons/ButtonSignos'
import './Item.css'

export default function Item(props) {

    const [numero, setNumero] = useState(1)

    const sumar = () => {
        setNumero(numero + 1)
    }

    const restar = () => {
        if(numero > 0){
            setNumero(numero - 1)
        }
    }

    return (
        <div className="item">
            <img src={props.img}></img>
            <h2><Link to={`/item/${props.id}`}>{props.name}</Link></h2>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
            <ButtonSignos clase='fas fa-minus' handlerClick={restar}/>
            <span> {numero} </span>
            <ButtonSignos clase='fas fa-plus' handlerClick={sumar}/>
        </div>
    )
}