import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import "../components/ItemDetail/ItemDetail.css";
import ItemDetail from "../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer(props) {
  const { id } = useParams();

  const [item, getItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productos = db.collection("productos");
    productos
      .get()
      .then((querySnapshot) => {
        let documentos = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
          doc.data();
        });
        for (let i = 0; i < documentos.length; i++) {
          if (documentos[i].id === id) {
            documentos = documentos[i];
          }
        }
        getItem(documentos);
      })
      .catch((err) => console.log("ocurrio un error", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div class="fas fa-circle-notch fa-spin spin-detail"></div>
      ) : (
        <div className="itemContainer">
          <ItemDetail
            id={id}
            titulo={item.nombre}
            desc={item.descripcion}
            precio={item.precio}
            img={item.imgUrl}
          />
        </div>
      )}
    </>
  );
}
