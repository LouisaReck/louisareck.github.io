import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Qualifications from "./components/qualifications/Qualifications";
import Portfolio from "./components/work/Portfolio";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Exhale from "./components/exhale/Exhale";
import Bookit from "./components/bookit/Bookit";
import Pendeln from "./components/pendeln/Pendeln";
import Starbucks from "./components/starbucks/Starbucks";
import Skills from "./components/skills/Skills";
import Moviematch from "./components/moviematch/Moviematch";
import Podcaster from "./components/podcaster/Podcaster";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Portfolio />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Qualifications />
              <Skills />
            </>
          }
        />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/work/1" element={<Exhale />} />
        <Route path="/work/2" element={<Bookit />} />
        <Route path="/work/7" element={<Pendeln />} />
        <Route path="/work/8" element={<Starbucks />} />
        <Route path="/work/9" element={<Moviematch/>} />
        <Route path="/work/5" element={<Podcaster/>} />

      </Routes>
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
