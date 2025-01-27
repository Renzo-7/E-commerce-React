const products = [
  {
    id: "1",
    name: "Camiseta Spider-Man",
    category: "ropa",
    price: 1500,
    description: "Camiseta temática de Spider-Man.",
    image:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1737990924970-77ff45443a59image",
  },
  {
    id: "2",
    name: "Figura Iron Man",
    category: "figuras",
    price: 3500,
    description: "Figura de colección de Iron Man.",
    image:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1737990931948-1cc67c908374image",
  },
  {
    id: "3",
    name: "Mochila Avengers",
    category: "accesorios",
    price: 2500,
    description: "Mochila con diseño de los Avengers.",
    image:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1737990959010-3414f8529af4image",
  },
  {
    id: "4",
    name: "Figura Thor",
    category: "figuras",
    price: 3000,
    description: "Figura de colección de Thor con el Mjolnir.",
    image:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1737990939843-ac21ecb8342cimage",
  },
  {
    id: "5",
    name: "Gorra Capitán América",
    category: "accesorios",
    price: 1200,
    description: "Gorra del escudo del Capitán América.",
    image:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1737990952426-917b6f6761ccimage",
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
