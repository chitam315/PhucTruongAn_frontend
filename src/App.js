import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import HomePage from "./pages/HomePage";
import SeeMorePage from "./pages/SeeMorePage";
import DetailProductPage from "./pages/DetailProductPage";
import Guarantee from "./components/Guarantee/Guarantee";
import CartPage from "./pages/CartPage";
import PayingPage from "./pages/PaymentPage";
import WarrantyStation from "./components/WarrantyStation/WarrantyStation";
import WarrantyPolicyHome from "./components/WarrantyPolicy/WarrantyPolicyHome";
import AdminPage from "./pages/AdminPage";
import WarrantyPolicy from "./components/WarrantyPolicy/WarrantyPolicy";
import PrivacyPolicy from "./components/WarrantyPolicy/PrivacyPolicy";
import ShippingPolicy from "./components/WarrantyPolicy/ShippingPolicy";
import ReturnPolicy from "./components/WarrantyPolicy/ReturnPolicy";
import Rules from "./components/WarrantyPolicy/Rules";
import PaymentPolicy from "./components/WarrantyPolicy/PaymentPolicy";
import InspectionPolicy from "./components/WarrantyPolicy/InspectionPolicy";
import Project from "./components/Project/Project";
import SignUp from "./components/SignUp/SignUp";
import IntroducePage from "./components/IntroducePage/IntroducePage";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Signin from "./components/Singin/Singin";
import ForgetPassword from "./components/Singin/ForgetPassword";
import AdminProduct from "./components/Admin/AdminProduct";
import AdminUser from "./pages/AdminUser"
import Product from "./components/Admin/Product";
import AddProduct from "./components/Admin/AddProduct";
import Dashboard from "./components/Admin/Dashboard";
import AddImage from "./components/Admin/AddImage";
import SearchPage from "./components/Search/SearchPage";

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route index path="" element={<HomePage />} />
      <Route path="/see-more" element={<SeeMorePage />} />
      <Route path="/detail/:id" element={<DetailProductPage />} />
      <Route path="/baohanh" element={<Guarantee />}></Route>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paying" element={<PayingPage />} />
      <Route path="/project" element={<Project />} />
      <Route path="/guest/support" element={<WarrantyStation />} />
      <Route path="/guest/intro" element={<WarrantyPolicyHome />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/introduce" element={<IntroducePage />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/admin/product" element={<Product />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/add-image" element={<AddImage />} />
      <Route
        path="/guest/intro/chinh-sach-bao-hanh"
        element={<WarrantyPolicy />}
      />
      <Route
        path="/guest/intro/chinh-sach-bao-mat"
        element={<PrivacyPolicy />}
      />
      <Route
        path="/guest/intro/chinh-sach-van-chuyen"
        element={<ShippingPolicy />}
      />
      <Route
        path="/guest/intro/chinh-sach-doi-tra"
        element={<ReturnPolicy />}
      />
      <Route path="/guest/intro/dieu-khoan" element={<Rules />} />
      <Route
        path="/guest/intro/chinh-sach-kiem-hang"
        element={<InspectionPolicy />}
      />
=======
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route index path="/see-more" element={<SeeMorePage />} />
        <Route index path="/detail" element={<DetailProductPage />} />
        <Route index path="/baohanh" element={<Guarantee />}></Route>
        <Route index path="/cart" element={<CartPage />} />
        <Route index path="/paying" element={<PayingPage />} />
        <Route index path="/project" element={<Project />} />
        <Route index path="/guest/support" element={<WarrantyStation />} />
        <Route index path="/guest/intro" element={<WarrantyPolicyHome />} />
        <Route index path="/admin-page" element={<AdminPage />} />
        <Route index path="/admin-users" element={<AdminUser />} />
        <Route index path="/introduce" element={<IntroducePage />} />
        <Route index path="/news" element={<News />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/admin/product" element={<AdminProduct />} />
        <Route
          index
          path="/guest/intro/chinh-sach-bao-hanh"
          element={<WarrantyPolicy />}
        />
        <Route
          index
          path="/guest/intro/chinh-sach-bao-mat"
          element={<PrivacyPolicy />}
        />
        <Route
          index
          path="/guest/intro/chinh-sach-van-chuyen"
          element={<ShippingPolicy />}
        />
        <Route
          index
          path="/guest/intro/chinh-sach-doi-tra"
          element={<ReturnPolicy />}
        />
        <Route index path="/guest/intro/dieu-khoan" element={<Rules />} />
        <Route
          index
          path="/guest/intro/chinh-sach-kiem-hang"
          element={<InspectionPolicy />}
        />
>>>>>>> cd9483ea5e025f0417dd27745efd318b00e28f79

      <Route
        path="/guest/intro/chinh-sach-thanh-toan"
        element={<PaymentPolicy />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/baohanh" element={<Guarantee />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paying" element={<PayingPage />} />
    </Routes>
  );
}

export default App;
