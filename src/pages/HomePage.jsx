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
>>>>>>> d443b7b9f7887d0ce8f0e960801944bd7e1ed967
import Header from "../components/Header/Header";
import CarouselSlice from "../components/Carousel/CarouselSlice";

import Slidebar from "../components/Slidebar/Slidebar";
import Banner from "../components/Banner/Banner";
import Slidebarnew from "../components/Slidebar/Slidebarnew";
import { CategoryHome } from "../components/CategoryHome/CategoryHome";

<<<<<<< HEAD
=======

>>>>>>> d443b7b9f7887d0ce8f0e960801944bd7e1ed967
export default function HomePage() {
  return (
    <div className="bg-main">
      <Header />
      <CarouselSlice />
      {/* <Slidebar /> */}
      <Slidebarnew/>
      <Banner/>
<CategoryHome/>
      <FlashSale />
      <Category />
      <Media />
      <Feedback />
      <CustomerUsed />
      <News />
      <Footer />
<<<<<<< HEAD
      <NavigationBottom />
=======
>>>>>>> d443b7b9f7887d0ce8f0e960801944bd7e1ed967
    </div>
  );
}
