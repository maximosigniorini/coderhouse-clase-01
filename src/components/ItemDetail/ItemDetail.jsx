import React from 'react'
import ItemCount from './ItemCount'


export default function ItemDetail(props) {

    return (
        <div>
            <img src={props.img} className='itemFoto'></img>
            <div className="info">
                <h1 className="tituloItem">{props.titulo}</h1>
                <p>{props.precio}</p>
                <p>{props.desc}</p>
                <ItemCount props={props}/>
            </div>
        </div>
    )
}