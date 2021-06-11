import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({
    name: "Usuario",
    phone: 123456,
    mail: "mail@mail.com",
  });

  const [idCompra, setIdCompra] = useState('');

  const isInCart = (id) => {
    const estaEnCart = items.some((x) => x.props.id === id);
    return estaEnCart;
  };

  const addItems = (count, obj) => {
    if (isInCart(obj.props.id)) {
      sumarDuplicado(obj, count);
    } else {
      const precioItem = subTotal(obj.props.precio, count);
      setItems([...items, { ...obj, cnt: count, subTotal: precioItem }]);
    }
  };

  const removeItems = (item) => {
    const newItems = items.filter((x) => x.props.id !== item);
    setItems(newItems);
  };

  const clearItems = () => setItems([]);

  const sumarDuplicado = (obj, cantidad) => {
    const filtro = [...items];
    filtro.forEach((i) => {
      if (i.props.id === obj.props.id) {
        i.cnt += cantidad;
        const precioFinal = subTotal(i.props.precio, i.cnt);
        i.subTotal = precioFinal;
      }
    });
    setItems(filtro);
  };

  //Calculo el precio de la cantidad de items que el usuario solicita
  const subTotal = (precio, count) => {
    return precio * count;
  };

  function total() {
    const precioFinal = items.reduce((a, b) => a + b.props.precio * b.cnt, 0);

    return precioFinal;
  }

  function cantidadItems() {
    const itemsTotales = items.reduce((a, b) => a + b.cnt, 0);

    return itemsTotales;
  }

  function crearUsuario(form){
    setUser({
      name: form.name,
      phone: form.phone,
      mail: form.email,
    })
  }

  function finalizarCompra() {
    const compraFinal = {
      user,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      precio: total(),
    };

    const db = getFirestore();
    const orders = db.collection("orders");

    orders
      .add(compraFinal)
      .then(({ id }) => {
        setIdCompra(id)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(clearItems());
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItems,
        removeItems,
        clearItems,
        sumarDuplicado,
        total,
        cantidadItems,
        finalizarCompra,
        idCompra,
        crearUsuario
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
