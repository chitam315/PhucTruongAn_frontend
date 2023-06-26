import { Col, Container, Row } from "react-bootstrap";
import CardHome from "../Card/CardHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CustomerUsed() {
  return (
    <CardHome title="+78.000 KHÁCH HÀNG ĐÃ SỬ DỤNG">
      <span className="w-100 h-[1px] bg-[#ccc] block"></span>
      <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          keyBoardControl={true}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["desktop","mobile","tablet"]}
        >
          {imgCustomer.map((image,index)=>(
            <a href="#feedback" className="p-[5px] block ban cursor-pointer" key={index}>
              <img src={image.url} alt={image.url} id={index} className="rounded-[10px]  cursor-pointer"/>
            </a>
          ))}
        </Carousel>
    </CardHome>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const imgCustomer = [
  {url:"https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/gallery_bn_11.png?1685679333702"},
  {url:"https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/gallery_bn_12.png?1685679333702"},
  {url:"https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/gallery_bn_13.png?1685679333702"},
  {url:"https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/gallery_bn_14.png?1685679333702"},
  {url:"https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/gallery_bn_15.png?1685679333702"},

]
