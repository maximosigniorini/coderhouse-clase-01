import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ButtonCompra from "../../components/Buttons/ButtonCompra";
import CartForm from "../../components/CartForm/CartForm"
import NoItems from '../../components/NoItems/NoItems'

export default function CartContainer() {
  const { items, removeItems, total, clearItems } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {items.length > 0 && !showForm ? (
        <div className="w-10/12 lg:w-3/4 lg:m-2 h-96 lg:h-72 shadow-lg flex flex-col mt-8 lg:mt-16 ml-12 lg:mx-auto overflow-scroll">
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
          <div className="absolute w-28 left-3/4 bottom-0 lg:bottom-16 mb-24 -ml-4 lg:ml-14 text-center">
            <b>Total: ${total()}</b>
          </div>
          <div className="absolute w-48 bottom-0 lg:bottom-16 mb-24 cursor-pointer" onClick={() => clearItems()}>
            <i className="fas fa-trash"></i> Limpiar Carrito
          </div>
          <ButtonCompra
            clase="absolute bottom-0 lg:bottom-16 lg:mt-20 mb-4 -ml-12 lg:ml-2 left-3/4 w-36 h-12 rounded shadow bg-green-700 hover:bg-green-400"
            texto="Finalizar Compra"
            handlerClick={() => {
              setShowForm(true);
            }}
          />
        </div>
      ) : showForm ? (
        <CartForm/>
      ) :
        <NoItems />
      }
    </>
  );
}
