import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ButtonCompra from "../../components/Buttons/ButtonCompra";
import "./CartContainer.css";

export default function CartContainer() {
  const { items, removeItems, total, clearItems, finalizarCompra, orderFinished } = useContext(CartContext);
  const [loading, setLoading] = useState(false)

  return (
    <>
      {items.length > 0 && !loading ? (
        <div className="itemsCart">
          {items.map((item) => (
            <div className="itemCart">
              <div className="quitarBtn">
                <span
                  className="fas fa-minus-circle"
                  onClick={() => removeItems(item.props.id)}
                >
                  {" "}
                </span>
              </div>
              <div className="image">
                <img
                  src={item.props.img}
                  className="fotoCart"
                  alt="foto-item"
                ></img>
              </div>
              <div className="tituloCartCont">
                <h3 className="tituloCart">{item.props.titulo}</h3>
              </div>
              <div className="buttons">
                <span> Cantidad: {item.cnt} </span>
              </div>
              <div className="subtotal">Subtotal ${item.subTotal} </div>
            </div>
          ))}
          <div className="total">
            <b>Total: ${total()}</b>
          </div>
          <div className="borrarTodo" onClick={() => clearItems()}>
            <i class="fas fa-trash"></i> Limpiar Carrito
          </div>
          <ButtonCompra
            clase="finalizar"
            color="green"
            texto="Finalizar Compra"
            handlerClick={() => {
              finalizarCompra();
              setLoading(true);
            }}
          />
        </div>
      ) : 
      (
        <div className="empty">
          <h2 className="emptyTitle">
            No hay items <i className="fas fa-heart-broken"></i>
          </h2>
          <div className="btn-volver">
            <NavLink to="/category/menu">
              <ButtonCompra color="grey" texto="Agregar Items" />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
