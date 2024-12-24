import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMocks";

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
        <div>
          <h2 className="title is-3">{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p className="has-text-weight-bold">Precio: ${product.price}</p>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
