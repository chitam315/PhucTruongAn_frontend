import { GrMenu } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { GrBasket } from "react-icons/gr";
import "./NavigationBottom.css"

function NavigationBottom() {
  return (
    <div className="z-[900] sticky-bottom bg-white d-lg-none d-sm-flex col-tb-12 shadow-top-10 radius-top">
      <div className="flex w-100">
        <div className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer">
          <div className="flex flex-col items-center">
            <GrMenu className="svg-nav-bot" />
            <span className="mt-[5px] text-[1em] font-semibold">Danh mục</span>
          </div>
        </div>
        <div className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer">
          <div className="flex flex-col items-center">
            <VscAccount className="svg-nav-bot text-[var(--mainColor)]" />
            <span className="mt-[5px] text-[1em] font-semibold">Nhắn tin</span>
          </div>
        </div>
        <div className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer">
          <div className="flex flex-col items-center">
            <FiPhoneCall className="svg-nav-bot" />
            <span className="mt-[5px] text-[1em] font-semibold">Liên hệ</span>
          </div>
        </div>
        <div className="p-[15px] w-[25%] flex items-center justify-center cursor-pointer">
          <div className="flex flex-col items-center relative">
            <GrBasket className="svg-nav-bot" />
            <span className="mt-[5px] text-[1em] font-semibold">Giỏ hàng</span>
            <span className="block w-[20px] h-[20px] text-center absolute top-[-19%] right-[0%] rounded-[50%] bg-[#ff0000] text-[0.8em] text-white">
              20
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBottom;
