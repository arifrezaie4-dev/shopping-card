import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Products } from "./pages/products";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/products" element = {<Products />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
