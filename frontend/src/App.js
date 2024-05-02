import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import { Home } from "./Pages/Home/Home";
import { PlaceOrder } from "./Pages/PlaceOrder/PlaceOrder";
function App() {
  return (
    
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
