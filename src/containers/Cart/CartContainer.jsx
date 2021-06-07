import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ButtonCompra from "../../components/Buttons/ButtonCompra";

export default function CartContainer() {
  const { items, removeItems, total, clearItems, finalizarCompra, idCompra } = useContext(CartContext);
  const [loading, setLoading] = useState(false)
  return (
    <>
      {items.length > 0 && !loading ? (
        <div className="w-10/12 lg:w-3/4 lg:m-2 h-96 lg:h-72 shadow-sm flex flex-col mt-8 lg:mt-16 ml-12 lg:ml-56 overflow-scroll">
          {items.map((item) => (
            <div className="p-2 h-32 flex mt-4" key={item.id}>
              <div className="relative pt-2 mr-4">
                <span
                  className="fas fa-minus-circle inline-block cursor-pointer text-lg lg:text-xl rounded text-gray-800 hover:text-gray-500 mt-8 mr-4"
                  onClick={() => removeItems(item.props.id)}
                >
                  {" "}
                </span>
              </div>
              <div className="hidden sm:block mr-8 lg:mr-24 mt-6 lg:mt-2">
                <img
                  src={item.props.img}
                  className="h-16 lg:h-20"
                  alt="foto-item"
                ></img>
              </div>
              <div className="h-8 p-2 font-normal pt-8 mr-4 lg:mr-8 w-28 lg:w-48 block text-md lg:text-lg mb-4">
                <h3 className="tituloCart">{item.props.titulo}</h3>
              </div>
              <div className="pt-8 lg:mr-28 w-32">
                <span>Cantidad {item.cnt} </span>
              </div>
              <div className="w-32 pt-8 lg:pt-9 text-center text-md">Subtotal ${item.subTotal} </div>
            </div>
          ))}
          <div className="absolute w-28 left-3/4 bottom-0 lg:bottom-16 mb-24 -ml-4 lg:ml-28 text-center">
            <b>Total: ${total()}</b>
          </div>
          <div className="absolute w-48 bottom-0 lg:bottom-16 mb-24 cursor-pointer" onClick={() => clearItems()}>
            <i className="fas fa-trash"></i> Limpiar Carrito
          </div>
          <ButtonCompra
            clase="absolute bottom-0 lg:bottom-16 lg:mt-20 mb-4 -ml-12 lg:ml-20 left-3/4 w-36 h-12 rounded shadow bg-green-700 hover:bg-green-400"
            texto="Finalizar Compra"
            handlerClick={() => {
              finalizarCompra();
              setLoading(true);
            }}
          />
        </div>
      ) : loading === false ?
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
        ) :
        <div className="mx-auto p-5 mb-3.5 bg-green-500 w-6/12 mt-48 text-center text-white rounded-xl">
            {`¡Gracias por comprar en Signiorini!\n Su numero de orden es: ${idCompra}`}
        </div>
      }
    </>
  );
}
