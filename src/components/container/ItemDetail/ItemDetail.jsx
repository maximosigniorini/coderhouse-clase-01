import React, { useContext } from 'react'
import ButtonSignos from '../../Buttons/ButtonSignos'
import ButtonCompra from '../../Buttons/ButtonCompra'
import { CantContext } from '../../../context/cartContext'


export default function ItemDetail(props) {

    const [cant, setCant] = useContext(CantContext)

    const sumar = () => {
        setCant(cant + 1)
    }

    const restar = () => {
        if (cant > 0) {
            setCant(cant - 1)
        }
    }

    const agregar = () => {
        console.log(props.item, cant);
    }

    return (
        <div>
            <img src={props.img} className='itemFoto'></img>
            <div className="info">
                <h1 className="tituloItem">{props.titulo}</h1>
                <p>{props.precio}</p>
                <p>{props.desc}</p>
                <div className='botones'>
                    <ButtonSignos clase='fas fa-minus btn' handlerClick={restar} />
                    <span> {cant} </span>
                    <ButtonSignos clase='fas fa-plus btn' handlerClick={sumar} />
                    <ButtonCompra color='green' texto='Comprar' handlerClick={agregar} />
                </div>
            </div>
        </div>
    )
}