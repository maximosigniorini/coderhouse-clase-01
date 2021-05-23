import React from "react";

export default function ButtonCompra({ clase, color, texto, handlerClick }) {
  return (
    <button
      className={`btnCompra ${clase}`}
      onClick={handlerClick}
      style={{
        backgroundColor: color,
      }}
    >
      {texto}
    </button>
  );
}
