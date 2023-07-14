import CustomerUsed from "../components/Home/CustomerUsed";
import FlashSale from "../components/Home/FlashSale";
import Media from "../components/Home/Media";
import Feedback from "../components/Home/Feedback";
import "../components/Home/HomePage.css";
import Category from "../components/Home/Category";
import News from "../components/Home/News";
import Footer from "../components/Footer/Footer";
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";
import Header from "../components/Home/Header";
import Banner from "../components/Home/Banner";
import VideoReview from "../components/Home/VideoReview";
import HeaderResponsive from "../components/Home/HeaderResponsive"


export default function HomePage() {
  return (
    <div className="bg-main w-100">
      <HeaderResponsive/>
      <Header />
      <Banner />
      <VideoReview />
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
