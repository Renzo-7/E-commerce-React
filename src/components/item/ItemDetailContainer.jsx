import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar el detalle del producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="box">
      {loading ? (
        <p>Cargando detalle del producto...</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
