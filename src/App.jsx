import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Trending from "./pages/Trending";
import Offers from "./pages/Offers";
import Discount from "./pages/Discount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="trending" element={<Trending />} />
          <Route path="offers" element={<Offers />} />
          <Route path="discount" element={<Discount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
