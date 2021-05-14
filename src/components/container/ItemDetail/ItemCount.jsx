import React, {useContext, useEffect, useState} from 'react' 
import { CartContext } from '../../../context/CartContext'
import ButtonSignos from '../../Buttons/ButtonSignos'
import ButtonCompra from '../../Buttons/ButtonCompra'

export default function ItemCount(props){
    
    const { addItems } = useContext(CartContext)
    const [cant, setCant] = useState(1)

    useEffect(() => {

    }, [cant])

    const sumar = () => {
        setCant(cant + 1)
    }

    const restar = () => {
        if (cant > 0) {
            setCant(cant - 1)
        }
    }

    const onAdd = () => {
        addItems(cant, props)
    }

    return(
        <div className='botones'>
                    <ButtonSignos clase='fas fa-minus btn' handlerClick={restar} />
                    <span> {cant} </span>
                    <ButtonSignos clase='fas fa-plus btn' handlerClick={sumar} />
                    <ButtonCompra color='green' texto='Comprar' handlerClick={onAdd} />
                </div>
    )
}