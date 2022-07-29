import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Productlist from "./components/productList/Productlist";




function App() {
  return (
    <>
      <div>
        <Intro/>
        <About/>
        <Productlist/>
        </div>
    </>
  );
}

export default App;
