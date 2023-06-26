import Cart from "../components/Cart/Cart";
import "../components/Home/HomePage.css";
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";

export default function CartPage() {
  return (
    <div className="bg-main">
      <Cart />
      <NavigationBottom/>
    </div>
  );
}
