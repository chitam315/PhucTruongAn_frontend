import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
<<<<<<< HEAD
import News from "./components/News/News";
=======
import AdminUser from "./pages/AdminUser";
import { VideoReview } from "./pages/VideoReview";
import News from "./components/News/News";

>>>>>>> 4a101731b3cf1a74775024d303770f9c3c1f3ca9

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<HomePage />} />
<<<<<<< HEAD
        <Route index path="/see-more" element={<SeeMorePage />} />
        <Route index path="/detail" element={<DetailProductPage />} />
        <Route index path="/baohanh" element={<Guarantee />}></Route>
        <Route index path="/cart" element={<CartPage />} />
        <Route index path="/paying" element={<PayingPage />} />
        <Route index path="/project" element={<Project />} />
        <Route index path="/guest/support" element={<WarrantyStation />} />
        <Route index path="/guest/intro" element={<WarrantyPolicyHome />} />
        <Route index path="/admin-page" element={<AdminPage />} />
        <Route index path="/introduce" element={<IntroducePage />} />
        <Route index path="/news" element={<News />} />
=======
        <Route  path="/see-more" element={<SeeMorePage />} />
        <Route  path="/detail" element={<DetailProductPage />} />
        <Route  path="/baohanh" element={<Guarantee />}></Route>
        <Route  path="/cart" element={<CartPage />} />
        <Route  path="/paying" element={<PayingPage />} />
        <Route  path="/project" element={<Project />} />
        <Route  path="/news" element={<News/>} />
        <Route  path="/Guest/Support" element={<WarrantyStation />} />
        <Route  path="/Guest/intro" element={<WarrantyPolicyHome />} />
        <Route  path="/admin-page" element={<AdminPage />} />
        <Route  path="/introduce" element={<IntroducePage />} />
        <Route  path="/admin-users" element={<AdminUser />} />
        <Route  path="/video-review" element={<VideoReview />} />
        


>>>>>>> 4a101731b3cf1a74775024d303770f9c3c1f3ca9
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

        <Route
          index
          path="/guest/intro/chinh-sach-thanh-toan"
          element={<PaymentPolicy />}
        />
        <Route index path="/signup" element={<SignUp />} />
        <Route index path="/baohanh" element={<Guarantee />} />
        <Route index path="/cart" element={<CartPage />} />
        <Route index path="/paying" element={<PayingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
