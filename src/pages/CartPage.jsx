import Cart from "../components/Cart/Cart";
import "../components/Home/HomePage.css";
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";
import Header from "../components/Home/Header";
import Footer from "../components/Footer/Footer";
import HeaderResponsive from "../components/Home/HeaderResponsive"

export default function CartPage() {
  return (
    <div className="bg-main">
      <HeaderResponsive/>
      <Header/>
      <Cart />
      <NavigationBottom />
      <Footer/>
    </div>
  );
}