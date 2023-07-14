import { Link } from "react-router-dom";
import "./NavigationBottom.css";

function SliderLeft() {
  return (
    <>
      <div className="slider-left-scroll-vertical overflow-y-scroll">
        <div className="slider-left-scroll-item bg-[var(--mainColor)]">
          <img src={require("../../assets/Icon/dmsp.png")} alt="" />
          <span className="text-white">Danh mục sản phẩm</span>
        </div>
        <Link to="/introduce" className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/gioithieu.png")} alt="" />
          <span>Giới thiệu</span>
        </Link>
        <Link to="/project" className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/duanhoatdong.png")} alt="" />
          <span>Dự án & hoạt động</span>
        </Link>
        <Link to="/news" className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/tintuc.png")} alt="" />
          <span>Tin tức</span>
        </Link>
        <Link to="/contact" className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/lienhe.png")} alt="" />
          <span>Liên hệ</span>
        </Link>
        <Link to="/baohanh" className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/baohanh.png")} alt="" />
          <span>Bảo hành</span>
        </Link>
      </div>

      <div className="slider-left-category overflow-y-scroll">
        <p>Danh mục sản phẩm</p>
        <Link to="/see-more/1">Đèn đường liền thể năng lượng mặt trời</Link>
        <Link to="/see-more/2">Đèn UFO năng lượng mặt trời</Link>
        <Link to="/see-more/3">Đèn bàn chải năng lượng mặt trời</Link>
        <Link to="/see-more/4">Đèn pha năng lượng mặt trời</Link>
        <Link to="/see-more/5">Đèn trụ cổng & sân vườn</Link>
        <Link to="/see-more/6">Đèn áp trần & Đèn thả hình loa</Link>
        <Link to="/see-more/7">Đèn cầm tay năng lượng mặt trời</Link>
        <Link to="/see-more/8">Quạt năng lượng mặt trời</Link>
        <Link to="/see-more/9">Phụ kiện đèn năng lượng mặt trời</Link>
      </div>
    </>
  );
}

export default SliderLeft;
