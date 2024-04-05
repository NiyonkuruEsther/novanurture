import React from "react";
import About from "./About";
import Home from "./Home";
import Quote from "../../components/Quote";
import Gallery from "./Gallery";
import Subscribe from "../../components/Subscribe";
import Testimonies from "./Testimonies";
import FAQ from "./FAQ";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Home />
      <About />
      <Quote />
      <Gallery />
      <Subscribe />
      <Testimonies />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
