import { Routes, Route } from "react-router-dom";  // ❌ Remove BrowserRouter here
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <h1>Welcome to My E-Commerce Site</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;




