import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail(props) {

    return (
        <div>
            <div className="imgDetail">
                <img src={props.img} className='itemFoto' alt='foto-item'></img>
            </div>
            <div className="info">
                <h1 className="tituloItem">{props.titulo}</h1>
                <p>${props.precio}</p>
                <p>{props.desc}</p>
                <ItemCount props={props} />
            </div>
        </div>
    )
}