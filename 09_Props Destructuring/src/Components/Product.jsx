import React from "react";
import "./Product.css";

const Product = ({title, price}) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
    </div>
  );
};

export default Product;
