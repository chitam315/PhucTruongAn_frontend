import CustomerUsed from "../components/Home/CustomerUsed";
import FlashSale from "../components/Home/FlashSale";
import Media from "../components/Home/Media";
import Feedback from "../components/Home/Feedback";
// import Footer from "../components/Home/Footer";
import "../components/Home/HomePage.css";
import Category from "../components/Home/Category";
import News from "../components/Home/News";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="bg-main">
      <FlashSale />
      <Category />
      <Media />
      <Feedback />
      <CustomerUsed />
      <News />
      <Footer/>
    </div>
  );
}
