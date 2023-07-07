import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { BsBasket } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { TbMap2 } from "react-icons/tb";
import "./HomePage.css";
import CategoryProduct from "./CategoryProduct";
import {useAuth} from '../AuthContext/index'

function Header() {
  // window.addEventListener('scroll', function() {
  //   var header = document.getElementById('fixed-header');
  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   if (scrollTop > 100) {
  //     header.classList.add('show');
  //   } else {
  //     header.classList.remove('show');
  //   }
  // });
  const {user} = useAuth()
  
  console.log(user);
  return (
    <div className="bg-white d-block-none">
      <div className="text-center bg-[var(--main)] text-white">
        CÔNG TY TNHH ĐIỆN CÔNG NGHIỆP PHÚC TRƯỜNG AN
      </div>
      <div className="flex-center container-sm ">
        <Link
          to="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo.png?1686880710266"
          className="p-0 block"
        >
          <img
            src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo.png?1686880710266"
            alt=""
            className="w-[200px] h-full"
          />
        </Link>

        <div className="flex-center">
          <div className="flex border-1 border-solid border-[#ffb700] rounded-2">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-[350px] rounded-1 border-none p-[20px] header-text-search"
            />
            <span className="bg-[#ff9419] h-full flex-center p-[11px] cursor-pointer">
              <GrSearch className="text-[1.2em] text-white svg-white" />
            </span>
          </div>
        </div>
        <div className="flex-center cursor-pointer">
          <div className="border-gray rounded-full w-[40px] h-[40px] center-img">
            <LuPhoneCall className="svg-orange animate-shake" />
          </div>
          <div className="text-[var(--mainColor)]  hover:text-[#ff9419] font-bold ml-[10px]">
            Hotline: <br />
            0363 993 993
          </div>
        </div>
        <div className="flex-center cursor-pointer">
          <div className="border-gray rounded-full w-[40px] h-[40px] center-img">
            <TbMap2 className="text-[#ff9419]" />
          </div>
          <div className="text-[var(--mainColor)] hover:text-[#ff9419] font-bold ml-[10px]">
            Hệ thống
            <br />
            Đại lý
          </div>
        </div>
        <div className="flex-center gap-2">
          <span>{user ? user.full_name : "Username"}</span>
          <VscAccount className="svg-main cursor-pointer text-[var(--mainColor)] text-[1.5em] block" />
          <BsBasket className="svg-main cursor-pointer  text-[var(--mainColor)] text-[1.5em] block" />
        </div>
      </div>
      <div className="bg-[#ffb600] text-[1.1em] font-bold ">
        <ul className="container-sm flex-center text-none text-white list-none header-navbar-session">
          <li className="flex items-center cursor-pointer hover:text-[var(--mainColor)] duration-500">

            <CategoryProduct />

          </li>
          <li>
            <a href="#gioithieu">Giới thiệu</a>
          </li>
          <li>
            <a href="#gioithieu">Dự án & hoạt động</a>
          </li>
          <li>
            <a href="#gioithieu">Tin tức</a>
          </li>
          <li>
            <a href="#gioithieu">Khách hàng</a>
          </li>
          <li>
            <a href="#gioithieu">Tuyển đại lý</a>
          </li>
          <li>
            <a href="#gioithieu">Liên hệ</a>
          </li>
          <li>
            <a href="#gioithieu">Bảo hành</a>
          </li>
          <li>
            <a href="#gioithieu">Tuyển dụng</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
