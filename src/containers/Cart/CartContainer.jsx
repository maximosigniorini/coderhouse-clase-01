import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ButtonCompra from "../../components/Buttons/ButtonCompra";

export default function CartContainer() {
  const { items, removeItems, total, clearItems, finalizarCompra, orderFinished } = useContext(CartContext);
  const [loading, setLoading] = useState(false)

  return (
    <>
      {items.length > 0 && !loading ? (
        <div className="w-3/4 m-2 h-2/4 shadow-sm flex flex-col mt-16 ml-56 overflow-scroll">
          {items.map((item) => (
            <div className="p-2 h-32 flex mt-4">
              <div className="relative pt-2 mr-4">
                <span
                  className="fas fa-minus-circle inline-block cursor-pointer text-xl rounded text-gray-800 hover:text-gray-500 mt-8 mr-4"
                  onClick={() => removeItems(item.props.id)}
                >
                  {" "}
                </span>
              </div>
              <div className="mr-24 mt-2">
                <img
                  src={item.props.img}
                  className="h-20"
                  alt="foto-item"
                ></img>
              </div>
              <div className="h-8 p-2 font-normal pt-8 mr-8 w-48 block text-xl mb-4">
                <h3 className="tituloCart">{item.props.titulo}</h3>
              </div>
              <div className="pt-8 mr-28">
                <span> Cantidad: {item.cnt} </span>
              </div>
              <div className="w-32 pt-9 text-center text-md">Subtotal ${item.subTotal} </div>
            </div>
          ))}
          <div className="absolute w-28 left-3/4 top-3/4 ml-16 text-center">
            <b>Total: ${total()}</b>
          </div>
          <div className="absolute w-48  top-3/4 cursor-pointer" onClick={() => clearItems()}>
            <i class="fas fa-trash"></i> Limpiar Carrito
          </div>
          <ButtonCompra
            clase="absolute top-3/4 mt-20 ml-16 left-3/4 w-36 h-12 rounded shadow bg-green-700 hover:bg-green-400"
            texto="Finalizar Compra"
            handlerClick={() => {
              finalizarCompra();
              setLoading(true);
            }}
          />
        </div>
      ) : 
      (
        <div className="mt-28 text-center">
          <h2 className="text-3xl">
            No hay items <i className="fas fa-heart-broken text-4xl"></i>
          </h2>
          <div className="mt-16 text-center text-2xl">
            <NavLink to="/">
              <ButtonCompra clase='bg-gray-500 rounded h-10 w-52' texto="Agregar Items" />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
