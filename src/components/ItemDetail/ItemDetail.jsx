import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail(props) {

    return (
        <div>
            <div className="w-36 md:w-48 lg:w-64 mt-16 ml-12 lg:ml-24 inline-block">
                <img src={props.img} className='itemFoto' alt='foto-item'></img>
            </div>
            <div className="lg:float-right ml-8 mr-48 mt-4 lg:mt-28 inline-block">
                <h1 className="text-4xl">{props.titulo}</h1>
                <p className='mt-4 text-xl font-bold'>${props.precio}</p>
                <p className='mt-8 text-lg italic'>{props.desc}</p>
                <ItemCount props={props} />
            </div>
        </div>
    )
}