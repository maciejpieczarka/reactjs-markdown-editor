import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Generator from "./pages/Generator/Index";
import About from "./pages/About/Index";
import Error from "./pages/Error/Index";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Navigation Component */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Generator />} />
        <Route path="About" element={<About/>}/>
      </Routes>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
