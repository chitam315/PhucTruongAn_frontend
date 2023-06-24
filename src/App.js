import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SeeMorePage from "./pages/SeeMorePage";
import DetailProductPage from "./pages/DetailProductPage";
import Guarantee from "./components/Guarantee/Guarantee";
import CartPage from "./pages/CartPage";
import PayingPage from "./pages/PayingPage";
import WarrantyStation from "./components/WarrantyStation/WarrantyStation";
import WarrantyPolicyHome from "./components/WarrantyPolicy/WarrantyPolicyHome";
import WarrantyPolicy from "./components/WarrantyPolicy/WarrantyPolicy";
import PrivacyPolicy from "./components/WarrantyPolicy/PrivacyPolicy";
import ShippingPolicy from "./components/WarrantyPolicy/ShippingPolicy";
import ReturnPolicy from "./components/WarrantyPolicy/ReturnPolicy";
import Rules from "./components/WarrantyPolicy/Rules";
import PaymentPolicy from "./components/WarrantyPolicy/PaymentPolicy";
import InspectionPolicy from "./components/WarrantyPolicy/InspectionPolicy";
import Project from "./components/Project/Project";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route index path="/see-more" element={<SeeMorePage />} />
        <Route index path="/detail" element={<DetailProductPage />} />
        <Route index path="/baohanh" element={<Guarantee />}></Route>
        <Route index path="/cart" element={<CartPage />} />
        <Route index path="/paying" element={<PayingPage />} />
        <Route index path="/project" element={<Project />} />
        <Route index path="/Guest/Support" element={<WarrantyStation />} />
        <Route
          index
          path="/Guest/Intro/chinh-sach-bao-hanh"
          element={<WarrantyPolicy />}
        />
        <Route
          index
          path="/Guest/Intro/chinh-sach-bao-mat"
          element={<PrivacyPolicy />}
        />
        <Route
          index
          path="/Guest/Intro/chinh-sach-van-chuyen"
          element={<ShippingPolicy />}
        />
        <Route
          index
          path="/Guest/Intro/chinh-sach-doi-tra"
          element={<ReturnPolicy />}
        />
        <Route index path="/Guest/Intro/dieu-khoan" element={<Rules />} />
        <Route
          index
          path="/Guest/Intro/chinh-sach-thanh-toan"
          element={<PaymentPolicy />}
        />
        <Route index path="/signup" element={<SignUp />} />
        <Route index path="/baohanh" element={<Guarantee />}/>
        <Route index path="/cart" element={<CartPage/>} />
        <Route index path="/paying" element={<PayingPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
