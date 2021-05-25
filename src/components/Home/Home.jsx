import React from 'react'
import logo from './../../assets/imgs/logo.png'

export default function Home(props) {
    return (
        <div className='container'>
            <h1 className='text-4xl text-center mt-16'>{props.titulo}</h1>
            <div className="flex items-center justify-center mt-8 mb-8">
                <img src={logo} className='w-56' alt='logo-signiorini'></img>
            </div>

            <p className='text-center w-6/12 mx-auto'>Somos una empresa con 40 años de trayectoria. Atendemos al público en general con trato personalizado. Visite nuestra pizzería y nuestro local de platos gourmet para llevar, lo esperamos en Villa Urquiza.</p>
        </div>
    )
}