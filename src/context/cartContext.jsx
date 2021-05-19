import React, { useState, useEffect } from 'react'

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
            const precioItem = subTotal(obj.props.precio, count)
            setItems([...items, { ...obj, cnt: count, subTotal: precioItem }]);
        }
    };


    const removeItems = (item) => {
        console.log('Borrando Item', item)
        const newItems = items.filter(x => x.props.id !== item);
        setItems(newItems);
        console.log('Item eliminado');
    };

    const clearItems = () => setItems([]);

    const sumarDuplicado = (obj, cantidad) => {
        const filtro = [...items];
        filtro.forEach(i => {
            if (i.props.id === obj.props.id) {
                i.cnt += cantidad
                const precioFinal = subTotal(i.props.precio, i.cnt)
                i.subTotal = precioFinal
            }
        })
        setItems(filtro);
    }

    //Calculo el precio de la cantidad de items que el usuario solicita
    const subTotal = (precio, count) => {
        return precio * count;
    }

    function total() {
        const precioFinal = items.reduce((a, b) => (a + (b.props.precio * b.cnt)), 0)

        return precioFinal;
    }

    function cantidadItems(){
        const itemsTotales = items.reduce((a, b) => (a +  (b.cnt)), 0)

        return itemsTotales;
    }

    return (
        <CartContext.Provider value={{ items, addItems, removeItems, clearItems, sumarDuplicado, total, cantidadItems }}>
            {children}
        </CartContext.Provider>
    )
}