import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import ButtonCompra from "../Buttons/ButtonCompra";

export default function CartForm() {

    const { crearUsuario, finalizarCompra, idCompra } = useContext(CartContext);
    const [finalizar, setFinalizar] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email?.value;
        let name = e.target.elements.name?.value;
        let phone = e.target.elements.phone?.value;

        let form = {
            name: name,
            phone: phone,
            email: email
        }
        crearUsuario(form);
        finalizarCompra();
        setFinalizar(true);
    }

    return (
        <div className='h-screen flex -mt-12'>
            <div className='w-full max-w-lg m-auto rounded-lg shadow-xl py-10 px-16'>
                {!finalizar ? (
                    <>
                        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                            Finaliza tu pedido 🍽
                </h1>

                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor='name'>Nombre</label>
                                <input
                                    type='text'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='name'
                                    placeholder='Tu nombre'
                                />
                            </div>
                            <div>
                                <label htmlFor='phone'>Telefono</label>
                                <input
                                    type='text'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='phone'
                                    placeholder='Tu telefono'
                                />
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='email'
                                    placeholder='Tu Email'
                                />
                            </div>

                            <div className='flex justify-center items-center mt-6'>
                                <button
                                    type="submit"
                                    className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                                >
                                    Finalizar Compra
                        </button>
                            </div>
                        </form>
                    </>
                ) :
                    <div className="mx-auto w-11/12 text-center text-white">
                        {`¡Gracias por comprar en Signiorini!\n Su numero de orden es: ${idCompra}`}
                    </div>
                }
            </div>
        </div>
    )
}