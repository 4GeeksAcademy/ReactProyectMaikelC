import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Carousel from "./Carousel";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <div className="container mt-5">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
