import React, {useState} from 'react' 


export default function ItemDetail (props){

    const [numero, setNumero] = useState(1)

    const sumar = () => {
        setNumero(numero + 1)
    }

    const restar = () => {
        if(numero > 0){
            setNumero(numero - 1)
        }
    }

    return(
        <div>
            <img src={props.img} className='itemFoto'></img>
            <div className="info">
            <h1 className="tituloItem">{props.titulo}</h1>
            <p>{props.precio}</p>
            <p>{props.desc}</p>
            <span><a href="#" onClick={restar}><i class="fas fa-minus"></i></a></span>
            <span> {numero} </span>
            <span><a href="#" onClick={sumar}><i class="fas fa-plus"></i></a></span>
            </div>
        </div>
    )
}