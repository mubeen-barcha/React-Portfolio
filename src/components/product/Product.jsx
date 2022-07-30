import React from "react";
import "./product.css";

function Product({ img, link }) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="img">
      <a href={link} target="blank">
        <img src={img} alt="" />
      </a>
      </div>
    </div>
  );
}

export default Product;
