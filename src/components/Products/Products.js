import React from "react";
import "./products.css";

const Products = ({ product, addToCart }) => {
  const { title, price, category, image } = product;
  return (
    <div className="card-group">
      <div className="card col shadow rounded">
        <img
          src={image}
          className="card-img-top p-4"
          alt="..."
          width="350px"
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="text-danger">${price}</h6>
          <p className="card-text text-muted">{category}</p>
        </div>
        <div>
          <button
            onClick={() => addToCart(product)}
            className="btn bg-daraz-primary addToCart-btn w-100"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
