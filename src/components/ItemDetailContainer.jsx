import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMocks";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
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
