import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = (props) => {

    const {id} = useParams();

    return (
        <div>
            <h1 className="text-4xl text-center mt-16">{props.titulo}</h1>
            <ItemList category={id}/>
        </div>
    )
}

export default ItemListContainer