import React, { useState } from 'react'
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
            <h2>{props.name}</h2>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
            <span><a href="#" onClick={restar}><i class="fas fa-minus"></i></a></span>
            <span> {numero} </span>
            <span><a href="#" onClick={sumar}><i class="fas fa-plus"></i></a></span>
        </div>
    )
}