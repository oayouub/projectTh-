import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produit from "./pages/Produit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit" element={<Produit />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
