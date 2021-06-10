import React from 'react'; 
import { NavLink } from "react-router-dom";
import ButtonCompra from "../Buttons/ButtonCompra";

export default function NoItems(){
    return(
        <div className="mt-28 text-center">
          <h2 className="text-3xl">
            No hay items <i className="fas fa-heart-broken text-4xl"></i>
          </h2>
          <div className="mt-16 text-center text-2xl">
            <NavLink to="/category/menu">
              <ButtonCompra clase='bg-gray-500 rounded h-10 w-52' texto="Agregar Items" />
            </NavLink>
          </div>
        </div>
    )
}