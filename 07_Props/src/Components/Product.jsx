import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <h5>Price : {props.price}</h5>
    </div>
  );
};

export default Product;
