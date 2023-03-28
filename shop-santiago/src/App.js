import logo from "./assets/img/patterson-agency-logo.png";
import carrito from "./assets/img/carrito.svg";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Carrito from "./pages/Carrito";
import Productos from "./pages/Productos";
import React from "react";
import Footer from "./pages/Footer";


function App() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <a href='/'>
            <img id="logo" src={logo} alt="Patterson Agency" />
          </a>

          <a href='/carrito'>
            <img id="carrito" src={carrito} alt="Carrito" />
          </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Productos/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;







