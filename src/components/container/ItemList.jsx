import React, { useState, useEffect } from 'react'
import Item from './Item'
import './Item.css'
import grandeMuzza from '../../grande-muzza.png'
import grandeNapo from '../../grande-napo.png'
import grandeFuga from '../../grande-fuga.png'

export default function ItemList() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            const productos = [
                {
                    id: '01',
                    nombre: 'Grande Muzzarella',
                    imgUrl: grandeMuzza,
                    descripcion: 'Pizza grande de muzzarella',
                    precio: '$200'
                },
                {
                    id: '02',
                    nombre: 'Grande Napolitana',
                    imgUrl: grandeNapo,
                    descripcion: 'Pizza grande a la napolitana',
                    precio: '$300'
                },
                {
                    id: '03',
                    nombre: 'Grande Fugazzeta',
                    imgUrl: grandeFuga,
                    descripcion: 'Pizza grande de fugazzeta',
                    precio: '$300'
                }
            ]
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        task.then((res) => {
            setItems(res)
        })
    }, [])

    return (
        <section className="items">
            
                {items.map((item) =>
                    <Item
                        name={item.nombre}
                        descripcion={item.descripcion}
                        precio={item.precio}
                        img={item.imgUrl}
                    />)}
            
        </section>
    )
}