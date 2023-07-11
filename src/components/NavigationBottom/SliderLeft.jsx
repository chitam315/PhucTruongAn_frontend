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
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/gioithieu.png")} alt="" />
          <span>Giới thiệu</span>
        </div>
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/duanhoatdong.png")} alt="" />
          <span>Dự án & hoạt động</span>
        </div>
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/tintuc.png")} alt="" />
          <span>Tin tức</span>
        </div>
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/khachhang.png")} alt="" />
          <span>Khách hàng</span>
        </div>
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/tuyendaily.png")} alt="" />
          <span>Tuyển đại lý</span>
        </div>
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/lienhe.png")} alt="" />
          <span>Liên hệ</span>
        </div>
        <div className="slider-left-scroll-item">
          <img src={require("../../assets/Icon/baohanh.png")} alt="" />
          <span>Bảo hành</span>
        </div>
        <div className="slider-left-scroll-item mb-[150px]">
          <img src={require("../../assets/Icon/tuyendung.png")} alt="" />
          <span>Tuyển dụng</span>
        </div>
      </div>

      <div className="slider-left-category overflow-y-scroll">
        <p>Danh mục sản phẩm</p>
        <Link to="#">Đèn đường liền thể năng lượng mặt trời</Link>
        <Link to="#">Đèn UFO năng lượng mặt trời</Link>
        <Link to="#">Đèn bàn chải năng lượng mặt trời</Link>
        <Link to="#">Đèn pha năng lượng mặt trời</Link>
        <Link to="#">Đèn trụ cổng & sân vườn</Link>
        <Link to="#">Đèn áp trần & Đèn thả hình loa</Link>
        <Link to="#">Đèn cầm tay năng lượng mặt trời</Link>
        <Link to="#">Quạt năng lượng mặt trời</Link>
        <Link to="#">Phụ kiện đèn năng lượng mặt trời</Link>
      </div>
    </>
  );
}

export default SliderLeft;
