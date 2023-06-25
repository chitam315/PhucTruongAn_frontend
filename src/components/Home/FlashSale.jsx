import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../App.css";
import ItemProductSale from "../Items/ItemProductSale";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function FlashSale() {
  const text1 = "miễn phí giao hàng tận nhà";
  const text2 = "giảm ngay 100.000đ khi mua từ 2 đèn trở lên";

  return (
    <>
      <div>
        <div className="container">
          <div className="bg-flash pb-[15px] rounded-[10px]">
            <div className="flex-center py-[10px] px-[15px] d-tbs-block text-center">
              <div className="flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/flash.gif?1685679333702"
                  alt=""
                  className="w-[55px]"
                />
                <p className="pt-0 uppercase text-[1.6em] cl-orange ml-[5px] font-bold f-cl-orange ">
                  flash sale
                </p>
              </div>
              <div className="flex-center banner-flash relative w-auto justify-center">
                <p className="uppercase text-[1em] text-white">{text1}</p>
              </div>
              <div className="w-[200px]"></div>
            </div>
            <div className="select-none">
              <Carousel
                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                keyBoardControl={true}
                renderButtonGroupOutside={true}
                removeArrowOnDeviceType={["desktop"]}
              >
                <ItemProductSale />
                <ItemProductSale />
                <ItemProductSale />
                <ItemProductSale />
                <ItemProductSale />
              </Carousel>
              {/* <div className="flex flex-wrap">
                <ItemProductSale />
                <ItemProductSale />
                <ItemProductSale />
                <ItemProductSale />
                <ItemProductSale />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
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
    items: 5,
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
