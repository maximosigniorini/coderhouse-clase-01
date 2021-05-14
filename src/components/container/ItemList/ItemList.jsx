import React, { useState, useEffect } from 'react'
import Item from './../Item'
import '../Item.css'
import grandeMuzza from '../../../assets/imgs/grande-muzza.png'
import grandeNapo from '../../../assets/imgs/grande-napo.png'
import grandeFuga from '../../../assets/imgs/grande-fuga.png'
import empaJYQ from '../../../assets/imgs/empanada-jamon-y-queso.webp'
import empaCarne from '../../../assets/imgs/empanada-carne.webp'
import empaPollo from '../../../assets/imgs/empanada-pollo.webp'

export default function ItemList(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            const productos = [
                {
                    id: '01',
                    nombre: 'Grande Muzzarella',
                    categoria: 'pizzas',
                    imgUrl: grandeMuzza,
                    descripcion: 'Pizza grande de muzzarella',
                    precio: '$200'
                },
                {
                    id: '02',
                    nombre: 'Grande Napolitana',
                    categoria: 'pizzas',
                    imgUrl: grandeNapo,
                    descripcion: 'Pizza grande a la napolitana',
                    precio: '$300'
                },
                {
                    id: '03',
                    nombre: 'Grande Fugazzeta',
                    categoria: 'pizzas',
                    imgUrl: grandeFuga,
                    descripcion: 'Pizza grande de fugazzeta',
                    precio: '$300'
                },
                {
                    id: '04',
                    nombre: 'Empanada de Jamon y Queso',
                    categoria: 'empanadas',
                    imgUrl: empaJYQ,
                    descripcion: 'Empanada al horno de jamon y queso',
                    precio: '$90'
                },
                {
                    id: '05',
                    nombre: 'Empanada de Carne',
                    categoria: 'empanadas',
                    imgUrl: empaCarne,
                    descripcion: 'Empanada al horno de carne cortada al cuchillo',
                    precio: '$90'
                },
                {
                    id: '06',
                    nombre: 'Empanada de Pollo',
                    categoria: 'empanadas',
                    imgUrl: empaPollo,
                    descripcion: 'Empanada al horno de pollo cortada al cuchillo',
                    precio: '$90'
                }
            ]
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        task.then((res) => {
            const newItems = res.filter(i => i.categoria === `${props.category}`)
            props.category === undefined || props.category === 'menu' ? setItems(res) : setItems(newItems)
        })
    }, [props.category])

    return (
        <section className="items">
            {items.map((item) =>
                <Item
                    name={item.nombre}
                    descripcion={item.descripcion}
                    precio={item.precio}
                    img={item.imgUrl}
                    id={item.id}
                />
            )}
        </section>
    )
}