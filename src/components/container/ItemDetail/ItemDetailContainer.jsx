import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './ItemDetail.css'
import ItemDetail from './ItemDetail'
import grandeMuzza from '../../../assets/imgs/grande-muzza.png'
import grandeNapo from '../../../assets/imgs/grande-napo.png'
import grandeFuga from '../../../assets/imgs/grande-fuga.png'


export default function ItemDetailContainer(props){

    const {itemId} = useParams()

    const [item, getItem] = useState([])

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
            for(let i = 0; i < res.length;i++){
                if(res[i].id == itemId){
                    res = res[i]
                }
            }
            console.log(res);
            getItem(res)
        })
    }, [])
    

    return(
        <div className="itemContainer">
            <ItemDetail 
            id={itemId} 
            titulo={item.nombre}
            desc={item.descripcion} 
            precio={item.precio} img={item.imgUrl}/>
        </div>
    )
}