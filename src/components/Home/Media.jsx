import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MediaData } from "./DataPageHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Media() {
  const arr = MediaData;
  console.log(arr[1]);
  return (
    <div className=" mt-[25px]">
      <div className="container-sm pt-[20px]">
        <div className=" bg-white rounded-[15px] p-[1.5em]">
          <h2 className="uppercase font-bold relative text-[1.5em] mb-[15px]">
            <a
              href="den-duong-lien-the-nang-luong-mat-troi"
              title="Đèn đường liền thể"
            >
              Báo đài nói gì chúng tôi ?
            </a>
          </h2>
          <Carousel
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["desktop"]}
            // dotListclassName="custom-dot-list-style"
            // itemclassName="carousel-item-padding-40-px"
          >
            {arr.map((item, index) => (
              <a href="/" key={index} className="w-100 h-auto p-[15px]">
                <img
                  src={require(`../../assets/Media/${item.url}`)}
                  alt=""
                  className="w-100"
                />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
