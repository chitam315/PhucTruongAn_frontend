import Cart from "../components/Cart/Cart";
import "../components/Home/HomePage.css";
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";
import Header from "../components/Home/Header";
import Footer from "../components/Footer/Footer";

export default function CartPage() {
  return (
    <div className="bg-main">
      <Header/>
      <Cart />
      <NavigationBottom />
      <Footer/>
    </div>
  );
}