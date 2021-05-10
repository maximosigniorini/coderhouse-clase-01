import React from 'react' 

export default function ButtonSignos({clase, handlerClick}){

    return(
        <span>
            <i class={clase} 
            onClick={handlerClick}
            style={{cursor: 'pointer'}}>
            </i>
            </span>
    )
}