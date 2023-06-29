import CustomerUsed from "../components/Home/CustomerUsed";
import FlashSale from "../components/Home/FlashSale";
import Media from "../components/Home/Media";
import Feedback from "../components/Home/Feedback";
// import Footer from "../components/Home/Footer";
import "../components/Home/HomePage.css";
import Category from "../components/Home/Category";
import News from "../components/Home/News";
import Footer from "../components/Footer/Footer";
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";
import SliderLeft from "../components/NavigationBottom/SliderLeft";
import Header from "../components/Header/Header";
import CarouselSlice from "../components/Carousel/CarouselSlice";
import Slidebar from "../components/Slidebar/Slidebar";
import Banner from "../components/Banner/Banner";
import Slidebarnew from "../components/Slidebar/Slidebarnew";
import CategoryHome from "../components/CategoryHome/CategoryHome";
import VideoReview from "../components/Home/VideoReview";


export default function HomePage() {
  return (
    <div className="bg-main w-100">
      {/* <Header /> */}
      <CarouselSlice />
      <Slidebarnew />
      <Banner />
    <CategoryHome/>
      <VideoReview/>
      <FlashSale />
      <Category />
      <Media />
      <Feedback />
      <CustomerUsed />
      <News />
      <Footer />
      <NavigationBottom />
    </div>
  );
}
