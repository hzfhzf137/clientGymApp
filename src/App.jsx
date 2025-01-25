import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
// import { About, Banner, Footer, Header, Pricing, Workouts } from "./components";
import About from "../src/components/About";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Pricing from "../src/components/Pricing";
import Workouts from "../src/components/Workouts";





const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="workouts">
        <Workouts />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Footer />
    </div>
  );
};

export default App;
