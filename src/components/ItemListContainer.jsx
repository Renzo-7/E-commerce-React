import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.greeting}>{greeting}</h2>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  greeting: {
    fontSize: "1.5rem",
    color: "#4a4a4a",
  },
};

export default ItemListContainer;
