import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import HomePage from "./pages/HomePage";
import SeeMorePage from "./pages/SeeMorePage";
import DetailProductPage from "./pages/DetailProductPage";
import Guarantee from "./components/Guarantee/Guarantee";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
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
import AdminUser from "./pages/AdminUser";
import AdminOrder from "./pages/AdminOrder"
import Product from "./components/Admin/Product";
import SearchPage from "./components/Search/SearchPage";
import Payment from "./pages/Payment";
import { ListOrderPage } from "./pages/ListOrderPage";
import {Page404} from "./pages/Page404"

function App() {
  return (
    <Routes>
      <Route index path="" element={<HomePage />} />
      <Route index path="/see-more/:id" element={<SeeMorePage />} />
      <Route index path="/detail/:id" element={<DetailProductPage />} />
      <Route index path="/baohanh" element={<Guarantee />}></Route>
      <Route index path="/cart" element={<CartPage />} />
      <Route index path="/order" element={<OrderPage />} />
      <Route index path="/project" element={<Project />} />
      <Route index path="/guest/support" element={<WarrantyStation />} />
      <Route index path="/guest/intro" element={<WarrantyPolicyHome />} />
      <Route index path="/admin-page" element={<AdminPage />} />
      <Route index path="/admin-users" element={<AdminUser />} />
      <Route index path="/admin-orders" element={<AdminOrder />} />
      <Route index path="/introduce" element={<IntroducePage />} />
      <Route index path="/news" element={<News />} />
      <Route index path="/contact" element={<Contact />} />
      <Route index path="/search" element={<SearchPage />} />
      <Route index path="/admin/product" element={<Product />} />
      <Route index path="/list-order" element={<ListOrderPage />} />
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

      <Route
        path="/guest/intro/chinh-sach-thanh-toan"
        element={<PaymentPolicy />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/baohanh" element={<Guarantee />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment/:order_id" element={<Payment />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
