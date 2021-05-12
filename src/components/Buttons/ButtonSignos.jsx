import React from 'react' 

export default function ButtonSignos({clase, tamaño, color, handlerClick}){

    return(
        <span>
            <i class={clase} 
            onClick={(handlerClick)}
            style={
                {cursor: 'pointer',
                color: color,
                fontSize: tamaño
            }
                }>
            </i>
            </span>

    )
}