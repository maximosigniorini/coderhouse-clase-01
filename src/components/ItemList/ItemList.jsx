import React, { useState, useEffect } from 'react'
import { getFirestore } from '../../firebase'
import Item from './../Item/Item'

export default function ItemList(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productos = db.collection('productos');
        const productosFiltrados = productos.where('categoria', '==', props.category);
        //Si selecciono 'menu' en la navbar en vez de alguna categoria me muestra todos los productos
        let query = props.category === undefined || props.category === 'menu' ? productos : productosFiltrados;

        query.get()
            .then((querySnapshot) => {
                const documentos = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                    doc.data();
                })
                setItems(documentos)
            })
            .catch((err) => console.log('ocurrio un error', err))
            .finally(() => setLoading(false))
            
    }, [props.category])

    return (
        <div className='items'>
            {loading ? <i className="fas fa-circle-notch fa-spin flex items-center justify-center text-6xl mt-8"></i> :
                <section className="flex flex-wrap items-center justify-center mt-8">
                    {items.map((item) =>
                        <Item
                            name={item.nombre}
                            descripcion={item.descripcion}
                            precio={item.precio}
                            img={item.imgUrl}
                            id={item.id}
                            key={item.id}
                        />
                    )}
                </section>
            }
        </div>
    )
}