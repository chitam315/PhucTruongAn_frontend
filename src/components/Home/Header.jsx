import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { BsBasket } from "react-icons/bs";
import { BiBox, BiLogOut, BiLogIn } from "react-icons/bi";
import "./HomePage.css";
import CategoryProduct from "./CategoryProduct";
import { useAuth } from "../AuthContext/index";
import Search from "../Search/Search";
import logo from "../../logo.jpg";
function Header() {
  const { user, logout } = useAuth();
console.log(user);
  return (
    <div className="bg-white d-block-none">
      <div className="text-center bg-[var(--main)] text-white">
        CÔNG TY TNHH ĐIỆN CÔNG NGHIỆP PHÚC TRƯỜNG AN
      </div>
      <div className="flex-center container-sm ">
        <Link to="/" className="p-0 block">
          <img src={logo} alt="" className="w-[100px] h-full" />
        </Link>

        <Search />
        <div className="flex-center cursor-pointer">
          <div className="border-gray rounded-full w-[40px] h-[40px] center-img">
            <LuPhoneCall className="text-[#00c6ee] animate-shake" />
          </div>
          <div className="text-[var(--mainColor)]  hover:text-[#00c6ee] font-bold ml-[10px]">
            Hotline: <br />
            0933 819 292
          </div>
        </div>
        {user ? (
          <>
            <Link to={"/list-order"} className="flex-center cursor-pointer">
              <div className="border-gray rounded-full w-[40px] h-[40px] center-img">
                <BiBox className="text-[#00c6ee]" />
              </div>
              <div className="text-[var(--mainColor)] hover:text-[#00c6ee] font-bold ml-[10px]">
                Đơn hàng
                <br />
                của bạn
              </div>
            </Link>
            <div onClick={logout} className="flex-center cursor-pointer">
              <div className="border-gray rounded-full w-[40px] h-[40px] center-img">
                <BiLogOut className="text-[#00c6ee]" />
              </div>
              <div className="text-[var(--mainColor)] hover:text-[#00c6ee] font-bold ml-[10px]">
              {user.full_name} <br/>
                <span className="text-red-500">Đăng xuất</span>
              </div>
            </div>
          </>
        ) : (
          <Link to={"/signin"} className="flex-center cursor-pointer">
            <div className="border-gray rounded-full w-[40px] h-[40px] center-img">
              <BiLogIn className="text-[#00c6ee]" />
            </div>
            <div className="text-[var(--mainColor)] hover:text-[#00c6ee] font-bold ml-[10px]">
              Đăng nhập
            </div>
          </Link>
        )}

        <div className="flex-center gap-2">
          
          <Link to={user ? "/admin-page" : "/signin"}>
            <VscAccount className="svg-main cursor-pointer text-[var(--mainColor)] text-[1.5em] block" />
          </Link>
          <Link to="/cart">
            <BsBasket className="svg-main cursor-pointer  text-[var(--mainColor)] text-[1.5em] block" />
          </Link>
        </div>
      </div>
      <div className="bg-[#00c6ee] text-[1.1em] font-bold ">
        <ul className="container-sm flex-center text-none text-white list-none header-navbar-session">
          <li className="flex items-center cursor-pointer hover:text-[var(--mainColor)] duration-500">
            <CategoryProduct />
          </li>
          <li>
            <Link to="/introduce">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/project">Dự án & hoạt động</Link>
          </li>
          <li>
            <Link to="/news">Tin tức</Link>
          </li>
          {/* <li>
            <a href="/">Khách hàng</a>
          </li> */}
          {/* <li>
            <a href="/">Tuyển đại lý</a>
          </li> */}
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <Link to="/guest/intro/chinh-sach-bao-hanh">
              Chính sách & hướng dẫn
            </Link>
          </li>
          {/* <li>
            <a href="/">Tuyển dụng</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
