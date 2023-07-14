import "../components/Home/HomePage.css";
import SeeMore from "../components/SeeMore/SeeMore";
import Footer from "../components/Footer/Footer";
import Header from "../components/Home/Header";
import HeaderResponsive from "../components/Home/HeaderResponsive"

export default function SeeMorePage() {
  return (
    <div className="bg-main">
      <HeaderResponsive/>
      <Header/>
      <SeeMore />
      <Footer/>
    </div>
  );
}
