import "./app.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

