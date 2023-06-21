import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SeeMorePage from "./pages/SeeMorePage";
import DetailProductPage from "./pages/DetailProductPage";
<<<<<<< HEAD
import Guarantee from "./components/Guarantee/Guarantee";
=======
import CartPage from "./pages/CartPage";
import PayingPage from "./pages/PayingPage";
>>>>>>> b2c738e (update ui detail, cart)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route index path="/see-more" element={<SeeMorePage />} />
        <Route index path="/detail" element={<DetailProductPage />} />
<<<<<<< HEAD
        <Route index path="/baohanh" element={<Guarantee />}></Route>
=======
        <Route index path="/cart" element={<CartPage/>} />
        <Route index path="/paying" element={<PayingPage/>} />
>>>>>>> b2c738e (update ui detail, cart)
      </Routes>
    </BrowserRouter>
  );
}

export default App;
