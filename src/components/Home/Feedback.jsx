import { Container } from "react-bootstrap";
import { CustomerData } from "./DataPageHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteRight } from "react-icons/fa";

export default function Feedback() {
  const arr = CustomerData;
  return (
    <Container className="pt-[20px] ">
      <div className=" bg-white rounded-[15px] p-[1.5em] mt-[25px]">
        <h2 className="uppercase font-bold relative text-[1.5em] mb-[15px]">
          <a
            href="den-duong-lien-the-nang-luong-mat-troi"
            title="Đèn đường liền thể"
          >
            Khách hàng với TP Solar
          </a>
        </h2>
        <Carousel
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          keyBoardControl={true}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
        >
          {arr.map((item, key) => (
            <div className="card-shadow p-[20px] m-[5px] select-none">
              <div className="flex items-center">
                <img
                  src={item.avatar}
                  alt=""
                  className="rounded-full w-[80px] h-[80px] border-2 border-solid border-[var(--mainColor)]"
                />
                <div className="ml-[15px] text-[1.2em]">
                  <p className="text-[var(--mainColor)] font-bold ">
                    {item.name}
                  </p>
                  <p className="text-[#535353] ">{item.career}</p>
                </div>
              </div>
              <p className="mt-[20px] text-[1em] text-justify text-[#545454]">
                {item.content}
              </p>
              <div className="flex justify-end">
                <FaQuoteRight className="text-[2.5em] text-[#adadad]" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
