import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Link } from "react-router-dom";
import CardHome from "../Card/CardHome";
import CardMain from "../Card/CardMain";

function Banner() {
  return (
    <div>
      <div>
        <img
          src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/big_bn_slide.png?1686880710266"
          alt=""
          className="p-0"
        />
      </div>

      <div className="container-sm sliderbar-banner mt-2">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          keyBoardControl={true}
          renderButtonGroupOutside={true}
          infinite={true}
        >
          {arrSlide.map((item, index) => (
            <div
              key={index}
              className=" rounded-[10px] overflow-hidden mt-3 mr-2"
            >
              <img src={item.url} alt="" className="w-100 h-full p-0" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container-sm flex flex-wrap mt-[30px]">
        <div className="col-3 col-tbs-6 p-[5px]">
          <div className="flex items-center bg-white rounded-[10px] p-[10px]">
            <img src={require("../../assets/Icon/ic_bhbn.webp")} alt="" />
            <span>Bảo hành 3 năm</span>
          </div>
        </div>
        <div className="col-3 col-tbs-6 p-[5px]">
          <div className="flex items-center bg-white rounded-[10px] p-[10px]">
            <img src={require("../../assets/Icon/ic_dvhd.webp")} alt="" />
            <span>Dịch vụ hàng đầu</span>
          </div>
        </div>
        <div className="col-3 col-tbs-6 p-[5px]">
          <div className="flex items-center bg-white rounded-[10px] p-[10px]">
            <img src={require("../../assets/Icon/ic_bhdt.webp")} alt="" />
            <span>Bảo hành điện tử</span>
          </div>
        </div>
        <div className="col-3 col-tbs-6 p-[5px]">
          <div className="flex items-center bg-white rounded-[10px] p-[10px]">
            <img src={require("../../assets/Icon/ic_vcmp.webp")} alt="" />
            <span>Vận chuyển miễn phí</span>
          </div>
        </div>
      </div>

      <CardMain className="container-sm bg-white">
        <h1 className="font-bold text-[1.4em] uppercase text-black">
          Danh mục sản phẩm
        </h1>

        <div className="home-carousel-category">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsiveCategory}
            keyBoardControl={true}
            renderButtonGroupOutside={true}
            infinite={true}
          >
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-1.webp")}
                  alt=""
                />
              </div>
          
              <span>Đèn đường liền thể năng lượng mặt trời</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-2.webp")}
                  alt=""
                />
              </div>
              <span>Đèn UFO năng lượng mặt trời</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-3.webp")}
                  alt=""
                />
              </div>
              <span>Đèn bàn chải năng lượng mặt trời</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-4.webp")}
                  alt=""
                />
              </div>
              <span>Đèn pha năng lượng mặt trời</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-5.webp")}
                  alt=""
                />
              </div>
              <span>Đèn trụ cổng và sân vườn</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-6.webp")}
                  alt=""
                />
              </div>
              <span>Đèn áp trần và đèn thả hình loa</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-7.webp")}
                  alt=""
                />
              </div>
              <span>Đèn cầm tay năng lượng mặt trời</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-8.webp")}
                  alt=""
                />
              </div>
              <span>Quạt năng lượng mặt trời</span>
            </Link>
            <Link to="" className="home-category-item">
              <div className="relative">
                <img
                  src={require("../../assets/Category/ic-9.webp")}
                  alt=""
                />
              </div>
              <span>Phụ kiện đèn năng lượng mặt trời</span>
            </Link>
          </Carousel>
        </div>
      </CardMain>
    </div>
  );
}
const arrSlide = [
  {
    url: "https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/slide-img1.png?1686880710266",
  },
  {
    url: "https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/slide-img2.png?1686880710266",
  },
  {
    url: "https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/slide-img3.png?1686880710266",
  },
  {
    url: "https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/slide-img1.png?1686880710266",
  },
  {
    url: "https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/slide-img2.png?1686880710266",
  },
  {
    url: "https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/slide-img3.png?1686880710266",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 771, min: 0 },
    items: 1,
  },
};

const responsiveCategory = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 772 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 771, min: 351 },
    items: 3,
  },
  mobileS: {
    breakpoint: { max: 350, min: 0 },
    items: 1,
  },
};

export default Banner;
