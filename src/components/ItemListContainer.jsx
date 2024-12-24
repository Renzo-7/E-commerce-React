import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncMocks";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        if (id) {
          const productsByCategory = await getProductsByCategory(id);
          setProducts(productsByCategory);
        } else {
          const allProducts = await getProducts();
          setProducts(allProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="box">
      <h2 className="title is-4 has-text-primary-light">{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length ? (
        <div className="columns is-multiline is-centered">
          {products.map((product) => (
            <div key={product.id} className="column is-one-quarter">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={product.image} alt={product.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-5">{product.name}</h3>
                  <p className="subtitle is-6">{product.description}</p>
                  <p className="has-text-weight-bold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
