import React from "react";
import "./productList.css"
import Product from "../product/Product"
;
import {products} from "../../data"

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Create & inspire. it's Mubeen</h1>
        <p className="pl-desc">
        A Front End Developer is a person who will use any of the frameworks or the packages such as Jquery, Angular JS, Angular JS 2, NodeJS, ReactJs, backboneJS, Bootstrap, etc
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
