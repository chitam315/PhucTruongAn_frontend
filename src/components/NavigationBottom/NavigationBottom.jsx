import { GrMenu } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { GrBasket } from "react-icons/gr";
import "./NavigationBottom.css";
import SliderLeft from "./SliderLeft";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBottom() {
  const [sliderLeft, setSliderLeft] = useState(false);
  function showSliderLeft() {
    if (sliderLeft) {
      setSliderLeft(false);
    } else {
      setSliderLeft(true);
    }
  }
  return (
    <div>
      <div className="sticky-bottom fixed bg-white d-none-flex col-tb-12 shadow-top-10 radius-top z-700">
        <div className="flex w-100">
          <div
            className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer"
            onClick={showSliderLeft}
          >
            <div className="flex flex-col items-center">
              <GrMenu className="svg-nav-bot" />
              <span className="mt-[5px] text-[1em] font-semibold select-none">
                Danh mục
              </span>
            </div>
          </div>
          <div className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer">
            <div className="flex flex-col items-center">
              <VscAccount className="svg-nav-bot text-[var(--mainColor)]" />
              <span className="mt-[5px] text-[1em] font-semibold select-none">
                Nhắn tin
              </span>
            </div>
          </div>
          <div className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer">
            <div className="flex flex-col items-center">
              <FiPhoneCall className="svg-nav-bot" />
              <span className="mt-[5px] text-[1em] font-semibold select-none">
                Liên hệ
              </span>
            </div>
          </div>
          <Link
            to="/cart"
            className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col items-center relative">
              <GrBasket className="svg-nav-bot" />
              <span className="mt-[5px] text-[1em] font-semibold select-none">
                Giỏ hàng
              </span>
              <span className="block w-[20px] h-[20px] text-center absolute top-[-19%] right-[0%] rounded-[50%] bg-[#ff0000] text-[0.8em] text-white">
                {/* 20 */}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* {sliderLeft ? (
        <div className="absolute">
          <SliderLeft />
        </div>
      ) : (
        <></>
      )} */}
      <div
        className={
          sliderLeft
            ? "d-none-block slider-left-main z-9000"
            : "hidden slider-left-main"
        }
      >
        <div className="relative z-9000">
          <div
            className={
              sliderLeft
                ? "slider-left-animation left-0 "
                : "slider-left-animation left-[-100%] z-9000"
            }
          >
            <SliderLeft />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBottom;
