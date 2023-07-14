import DetailProduct from "../components/Detail/DetailProduct";
import "../components/Home/HomePage.css";
import Header from "../components/Home/Header";
import Footer from "../components/Footer/Footer";
import HeaderResponsive from "../components/Home/HeaderResponsive"

export default function DetailProductPage() {
  return (
    <div className="bg-main">
      <HeaderResponsive/>
      <Header/>
      <DetailProduct />
      <Footer/>
    </div>
  );
}
