import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Provideers from "./pages/provideers.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/provideers" element={<Provideers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
