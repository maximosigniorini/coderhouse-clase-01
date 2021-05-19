import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import '../components/ItemDetail/ItemDetail.css'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import grandeMuzza from '../assets/imgs/grande-muzza.png'
import grandeNapo from '../assets/imgs/grande-napo.png'
import grandeFuga from '../assets/imgs/grande-fuga.png'
import empaJYQ from '../assets/imgs/empanada-jamon-y-queso.webp'
import empaCarne from '../assets/imgs/empanada-carne.webp'
import empaPollo from '../assets/imgs/empanada-pollo.webp'


export default function ItemDetailContainer(props){

    const {id} = useParams()

    const [item, getItem] = useState([])

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
            for(let i = 0; i < res.length;i++){
                if(res[i].id == id){
                    res = res[i]
                }
            }
            getItem(res)
        })
    }, [])
    

    return(
        <div className="itemContainer">
            <ItemDetail 
            id={id} 
            titulo={item.nombre}
            desc={item.descripcion} 
            precio={item.precio} 
            img={item.imgUrl}
            /*item={item}*//>
        </div>
    )
}