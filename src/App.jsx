import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import { About, Banner, Footer, Header, Pricing, Workouts } from "./components";

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
