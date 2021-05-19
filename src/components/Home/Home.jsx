import React from 'react'
import './Home.css'
import logo from './../../assets/imgs/logo.png'

export default function Home(props){
    return(
        <div className='container'>
            <h1>{props.titulo}</h1>
            <img src={logo} className='mainLogo'></img>
            <p className='homeDesc'>Somos una empresa con 40 años de trayectoria. Atendemos al público en general con trato personalizado. Visite nuestra pizzería y nuestro local de platos gourmet para llevar, lo esperamos en Villa Urquiza.</p>
        </div>
    )
}