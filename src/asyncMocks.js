const products = [
  {
    id: "1",
    name: "Camiseta Spider-Man",
    category: "ropa",
    price: 1500,
    description: "Camiseta temática de Spider-Man.",
    image: "https://via.placeholder.com/150?text=Spider-Man",
  },
  {
    id: "2",
    name: "Figura Iron Man",
    category: "figuras",
    price: 3500,
    description: "Figura de colección de Iron Man.",
    image: "https://via.placeholder.com/150?text=Iron+Man",
  },
  {
    id: "3",
    name: "Mochila Avengers",
    category: "accesorios",
    price: 2500,
    description: "Mochila con diseño de los Avengers.",
    image: "https://via.placeholder.com/150?text=Avengers",
  },
  {
    id: "4",
    name: "Figura Thor",
    category: "figuras",
    price: 3000,
    description: "Figura de colección de Thor con el Mjolnir.",
    image: "https://via.placeholder.com/150?text=Thor",
  },
  {
    id: "5",
    name: "Gorra Capitán América",
    category: "accesorios",
    price: 1200,
    description: "Gorra del escudo del Capitán América.",
    image: "https://via.placeholder.com/150?text=Cap+America",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 500);
  });
};
