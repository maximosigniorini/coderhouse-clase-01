import React, {useState} from 'react'

export const CantContext = React.createContext([]);

export const Cant = ({children}) => {
    
    const [cant, setCant] = useState(1)
    
    return(
        <CantContext.Provider value={[cant, setCant]}>
            {children}
        </CantContext.Provider>
    )
}