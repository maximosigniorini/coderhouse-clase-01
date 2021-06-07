import React from "react";

export default function ButtonSignos({ clase, tamaño, color, handlerClick }) {
  return (
    <span>
      <i
        className={clase}
        onClick={handlerClick}
        style={{ cursor: "pointer", color: color, fontSize: tamaño }}
      ></i>
    </span>
  );
}
