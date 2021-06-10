import React from 'react'
import logo from './../../assets/imgs/logo.png'

export default function Conocenos() {
    return (
        <div className='grid place-items-center'>
            <div className="mt-8 mb-8">
                <img src={logo} className='w-56' alt='logo-signiorini'></img>
            </div>
                <p className='text-center w-8/12 lg:w-4/12 mx-auto'>Somos una empresa con 40 años de trayectoria. Atendemos al público en general con trato personalizado. Visite nuestra pizzería y nuestro local de platos gourmet para llevar, lo esperamos en Villa Urquiza.</p>
        </div>
    )
}