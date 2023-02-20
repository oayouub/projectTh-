import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produit from "./pages/Produit";
import FilterProduit from "./pages/FilterProduit";
import { useState } from "react";

function App() {
  const [checkedColor, setCheckedColor] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home checkedColor={checkedColor} setCheckedColor={setCheckedColor}/>} />
        <Route path="/produit/:id" element={<Produit />} />
        <Route path="/filterproduit" element={<FilterProduit checkedColor={checkedColor} setCheckedColor={setCheckedColor}/>} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
