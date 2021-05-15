import React from 'react'

export default function ButtonCompra({ clase, color, texto, handlerClick, disabled }) {

    return (
        <button className='btnCompra'
            onClick={(handlerClick)}
            disabled={disabled}
            style={
                {
                    backgroundColor: color
                }
            }>
            {texto}
        </button>

    )
}