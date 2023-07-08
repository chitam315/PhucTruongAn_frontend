import { NavLink } from "react-router-dom";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { TiFlashOutline } from "react-icons/ti";
import { BiCategoryAlt, BiLogOut } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Dashboard.css";

function Dashboard({ children }) {
  return (
    <div className="flex relative">
      <input type="checkbox" id="menu" className="hidden" />

      <div className="admin-sidebar">
        <label
          for="menu"
          className="relative justify-end pr-4 admin-none-flex cursor-pointer"
        >
          <AiOutlineClose className="text-white text-[1.2em]" />
        </label>
        <NavLink
          to="/admin/product"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <RiLightbulbFlashLine />
          <span>Quản lý sản phẩm</span>
        </NavLink>
        <NavLink
          to="/admin/flashsale"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <TiFlashOutline />
          <span>Quản lý flash sale</span>
        </NavLink>
        <NavLink
          to="/admin/category"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <BiCategoryAlt />
          <span>Quản lý phân loại</span>
        </NavLink>

        <NavLink
          to="/admin/order"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <BsBox2 />
          <span>Quản lý đơn hàng</span>
        </NavLink>
        <div>
          <BiLogOut />
          <span>Đăng xuất</span>
        </div>
      </div>

      <div className="w-full h-[100vh] p-2 overflow-auto">
        <label for="menu" className="cursor-pointer">
          <HiMenuAlt2 className="text-black text-[1.5em]" />
        </label>
        <>{children}</>
      </div>
    </div>
  );
}

export default Dashboard;
