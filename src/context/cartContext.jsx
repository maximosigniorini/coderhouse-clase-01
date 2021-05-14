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
        const precioItem = precio;
        const precioItemStr = parseFloat(precioItem.substring(1));
        const precioItemFinal = precioItemStr * count

        return precioItemFinal;
    }

    function total (){
        // const precioTotal = items.reduce((a,b)=>(a + (b.props.precio * b.cnt)),0)
        const precios = []
        let precioFinal = 0;
        items.map((item) => {
            const preciosStr = item.props.precio;
            const preciosNum = parseFloat(preciosStr.substring(1))
            precios.push(preciosNum);
            precioFinal = precios.reduce((a, b) => { 
                return a + b;
            })
        })

        return precioFinal;
      }


    return (
        <CartContext.Provider value={{ items, addItems, removeItems, clearItems, sumarDuplicado, total }}>
            {children}
        </CartContext.Provider>
    )
}