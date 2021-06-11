import React, { useState, useEffect } from 'react'
import { getFirestore } from '../../firebase'
import { Link } from "react-router-dom";

export default function Home(props) {

    const [item, getItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const productos = db.collection('categorias');

        productos.get()
            .then((querySnapshot) => {
                let documento = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                    doc.data();
                });
                getItem(documento)
            })
            .catch((err) => console.log("ocurrio un error", err))
            .finally(() => setLoading(false));
    }, [])

    return (
        <>
            { loading ? <i className="fas fa-circle-notch fa-spin flex items-center justify-center text-6xl mt-8"></i> :
                <div className='h-screen mt-16'>
                    <div className='w-full max-w-lg m-auto rounded-lg shadow-xl py-10 px-16'>
                        <h1 className='text-5xl text-center'>{props.titulo}</h1>
                        <div className="relative max-w-xl">
                            <Link to={`/category/${item[1].id}`}><img src={item[1].imgUrl} className="absolute w-24 bottom-0 left-0 top-8" alt='foto-item' /></Link>
                            <Link to={`/category/${item[0].id}`}><img src={item[0].imgUrl} className="absolute w-24 bottom-0 right-0 top-4" alt='foto-item' /></Link>
                        </div>
                        <div className="text-center mt-32">
                            <Link to="/category/menu">
                                <button
                                    className={`bg-green py-2 px-4 text-sm text-white rounded bg-green-500 focus:outline-none focus:border-green-dark hover:bg-green-200`}
                                >
                                    Conoce nuestros productos
                                    </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}