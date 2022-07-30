import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Productlist from "./components/productList/Productlist";
import Contact from "./components/contact/Contact";






function App() {
  return (
    <>
      <div>
       
        <Intro/>
        <About/>
        <Productlist/>
        <Contact/>
        
        </div>
    </>
  );
}

export default App;
