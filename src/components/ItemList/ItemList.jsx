import React, { useState, useEffect } from 'react'
import { getFirestore } from '../../firebase'
import Item from './../Item/Item'
import '../Item/Item.css'

export default function ItemList(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productos = db.collection('productos');
        const productosFiltrados = productos.where('categoria', '==', props.category);
        let query = props.category === undefined || props.category === 'menu' ? productos : productosFiltrados;

        query.get()
            .then((querySnapshot) => {
                querySnapshot.size === 0 ? console.log('No hay items :(') : console.log(`Hay ${querySnapshot.size} items`)
                const documentos = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                    doc.data();
                })
                console.log(documentos);
                setItems(documentos)
            })
            .catch((err) => console.log('ocurrio un error', err))
            .finally(() => setLoading(false))
            
    }, [props.category])

    return (
        <div className='items'>
            {loading ? <i class="fas fa-circle-notch fa-spin"></i> :
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
            }
        </div>
    )
}