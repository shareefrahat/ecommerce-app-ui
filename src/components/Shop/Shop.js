import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Products from "../Products/Products";
import "./shop.css";

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
      <span className="cart-icon m-5">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-daraz-primary">
          {cart.length}
        </span>
        <FontAwesomeIcon
          className="fs-3  text-secondary"
          icon={faCartShopping}
        />
      </span>

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
