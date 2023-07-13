import "../components/Home/HomePage.css";
import SeeMore from "../components/SeeMore/SeeMore";
import Footer from "../components/Footer/Footer";
import Header from "../components/Home/Header";

export default function SeeMorePage() {
  return (
    <div className="bg-main">
      <Header/>
      <SeeMore />
      <Footer/>
    </div>
  );
}
