import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

    return(
        <div>
        <h1 className="titulo">{props.titulo}</h1>
        <ItemList />
        </div>
    )
}

export default ItemListContainer