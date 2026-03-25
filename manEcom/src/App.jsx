import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tshirts from "./pages/tshirts";
import Jeans from "./pages/Jeans";
import Shoes from "./pages/Shoes";
import Jackets from "./pages/Jackets";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/jeans" element={<Jeans />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;