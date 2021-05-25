import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = (props) => {

    const {id} = useParams();

    return (
        <div>
            <h1 className="titulo">{props.titulo}</h1>
            <ItemList category={id}/>
        </div>
    )
}

export default ItemListContainer