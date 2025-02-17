import React from "react";

const Product = ({ techStack }) => {
  return (
    <div>
      <h2>My Tech Stack</h2>
      <ul>
        {techStack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
