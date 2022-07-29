import React from "react";
import "./productList.css"
import Product from "../product/Product"
;
import {products} from "../../data"

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Create & inspire. it's Rayan</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est commodi
          praesentium vero voluptatum harum distinctio atque numquam facere
          accusantium,
        </p>
      </div>
      <div className="pl-lists">
       {products.map((item)=>(
        <Product key={item.id} img={item.img}
        link={item.link}/>
       ))}
      </div>
    </div>
  );
}

export default ProductList;
