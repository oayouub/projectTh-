import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produit from "./pages/Produit";
import FilterProduit from "./pages/FilterProduit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit/:id" element={<Produit />} />
        <Route path="/filterproduit" element={<FilterProduit />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
