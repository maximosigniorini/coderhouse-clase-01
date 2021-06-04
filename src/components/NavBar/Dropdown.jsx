import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { getFirestore } from "../../firebase";

export default function Dropdown() {

    const [show, setShow] = useState(false);
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const categorias = db.collection("categorias");
        categorias.get().then((querySnapshot) => {
            const documentos = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
                doc.data();
            });
            setCategoria(documentos);
        });
    }, []);

    return (
        <div className='flex ml-16 lg:ml-0 order-2 clear-both'>
            <button
                className="focus:outline-none focus:shadow-solid px-3 py-2 flex items-center text-s uppercase leading-snug text-black hover:opacity-75"
                onClick={() => setShow(!show)}
            ><span className="flex-1 text-right">Menú</span></button>

            <>
                {show ?
                    <div className="absolute w-28 py-2 mt-8 -ml-8 bg-red-800 rounded shadow-md">
                        <ul>
                            {categoria.map((cat) =>
                                <li><NavLink to={`/category/${cat.id}`} className="block px-4 py-2 hover:text-red-100">{cat.nombre}</NavLink></li>
                            )}
                        </ul>
                    </div>
                    : <></>}
            </>
        </div>
    )
}