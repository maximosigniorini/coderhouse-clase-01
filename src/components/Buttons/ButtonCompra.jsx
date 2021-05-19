import React from 'react'

export default function ButtonCompra({ clase, color, texto, handlerClick }) {

    return (
        <button className='btnCompra'
            onClick={(handlerClick)}
            style={
                {
                    backgroundColor: color
                }
            }>
            {texto}
        </button>

    )
}