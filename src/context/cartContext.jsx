import React, { useState, useEffect, useContext } from 'react'

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]) 

    useEffect(() => {
        console.log(items);
    }, [items]);

    const isInCart = (id) => {
        const estaEnCart = items.some(x => x.props.id === id);
        return estaEnCart;
    }

    const addItems = (count, obj) => {
        if (isInCart(obj.props.id)) {
            sumarDuplicado(obj, count)
            console.log('Ya tengo eso!');
        }
        else {
            setItems([...items, { ...obj, qty: count }]);
        }
    };


    const removeItems = (item) => {
        console.log('Borrando Item', item)
        const newItems = items.filter(x => x.id !== item);
        setItems(newItems);
        console.log('Item eliminado');
    };

    const clearItems = () => setItems([]);

    const sumarDuplicado = (obj, cantidad) => {
        const filtro = [...items];
        filtro.forEach(i => {
          if(i.props.id === obj.props.id){
            i.qty += cantidad
          }  
      })
      setItems(filtro);
    }


    return (
        <CartContext.Provider value={{ items, addItems, removeItems, clearItems, sumarDuplicado }}>
            {children}
        </CartContext.Provider>
    )
}