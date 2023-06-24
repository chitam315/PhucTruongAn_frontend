import CustomerUsed from "../components/Home/CustomerUsed";
import FlashSale from "../components/Home/FlashSale";
import Media from "../components/Home/Media";
import Feedback from "../components/Home/Feedback";
// import Footer from "../components/Home/Footer";
import "../components/Home/HomePage.css";
import Category from "../components/Home/Category";
import News from "../components/Home/News";
import Footer from "../components/Footer/Footer";
<<<<<<< HEAD
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";
import SliderLeft from "../components/NavigationBottom/SliderLeft";
=======
import Header from "../components/Header/Header";
import CarouselSlice from "../components/Carousel/CarouselSlice";

import Slidebar from "../components/Slidebar/Slidebar";

>>>>>>> fc8228aa3f97efe8629f3abf9f04edcc2a366510

export default function HomePage() {
  return (
    <div className="bg-main">
      <Header />
      <CarouselSlice />
      <Slidebar />
      <FlashSale />
      <Category />
      <Media />
      <Feedback />
      <CustomerUsed />
      <News />
<<<<<<< HEAD
      <Footer/>
      <NavigationBottom/>
=======
      <Footer />
>>>>>>> fc8228aa3f97efe8629f3abf9f04edcc2a366510
    </div>
  );
}
