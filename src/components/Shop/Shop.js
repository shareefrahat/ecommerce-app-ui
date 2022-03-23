import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <section>
      <p>Selected Items: {cart.length}</p>
      <h1>Products</h1>
      <section className="container mx-auto g-5 row row-cols-1 row-cols-md-4">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Products>
        ))}
      </section>
    </section>
  );
};

export default Shop;
