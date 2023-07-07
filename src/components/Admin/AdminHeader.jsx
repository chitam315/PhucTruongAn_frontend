import { Link, NavLink } from "react-router-dom";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBox2 } from "react-icons/bs";
import { BiLogOut, BiCategoryAlt } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TiFlashOutline } from "react-icons/ti";
import "./Admin.css";
import { useState } from "react";

function AdminHeader({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const clickShowMenu = () => {
    setShowMenu(true);
  };
  const clickHideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="h-[100vh] w-100 flex relative">
      <div
        className={`col-3 admin-sidebar h-[100vh] max-h-[1pr] ${
          showMenu ? "admin-sidebar-show" : "admin-sidebar-none"
        }`}
      >
        <div className="p-[15px] bg-[var(--main)] h-full admin-sidebar-content">
          <div onClick={clickHideMenu} className="float-right admin-none">
            <AiOutlineClose className="text-white text-[1.3em]" />
          </div>
          <Link to="#" className="flex items-center w-full">
            <img
              src="https://media.npr.org/assets/img/2023/04/20/ap23110232960422-435b2d5c81607c8d067c7e014e6a83b8f6788b4b.jpg"
              alt=""
              className="w-[80px] h-[80px] rounded-full"
            />
            <span className="text-[1.3em] font-bold text-white ml-[8px]">
              Admin
            </span>
          </Link>
          <div className="admin-sidebar-menu mt-[25px]">
            <NavLink
              to="/admin/product"
              className={({ isActive }) =>
                isActive ? "admin-sidebar-menu-link-active" : ""
              }
            >
              <RiLightbulbFlashLine className="text-white w-[15%] text-[1.3em]" />
              <span>Quản lý sản phẩm</span>
            </NavLink>
            <NavLink
              to="/admin/flashsale"
              className={({ isActive }) =>
                isActive ? "admin-sidebar-menu-link-active" : ""
              }
            >
              <TiFlashOutline className="text-white w-[15%] text-[1.3em]" />
              <span>Quản lý flash sale</span>
            </NavLink>
            <NavLink
              to="/admin/category"
              className={({ isActive }) =>
                isActive ? "admin-sidebar-menu-link-active" : ""
              }
            >
              <BiCategoryAlt className="text-white w-[15%] text-[1.3em]" />
              <span>Quản lý phân loại</span>
            </NavLink>
            <NavLink
              to="/admin/staff"
              className={({ isActive }) =>
                isActive ? "admin-sidebar-menu-link-active" : ""
              }
            >
              <HiOutlineUserGroup className="text-white w-[15%] text-[1.3em]" />
              <span>Quản lý nhân sự</span>
            </NavLink>
            <NavLink
              to="/admin/order"
              className={({ isActive }) =>
                isActive ? "admin-sidebar-menu-link-active" : ""
              }
            >
              <BsBox2 className="text-white w-[15%] text-[1.3em]" />
              <span>Quản lý đơn hàng</span>
            </NavLink>
            <button className="bg-[var(--main)] text-white w-full hover:bg-[#ffacac] hover:rounded-[4px]">
              <BiLogOut className="text-[#ff0000] w-[15%] text-[1.3em]" />
              <span className="text-[#ff0000]">Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-9 col-admin-full overflow-auto">
        <div className="admin-header flex justify-between items-center w-full overflow-hidden">
          <div className="flex admin-header-left gap-3  relative">
            <div
              className="admin-header-show-menu h-full cursor-pointer admin-flex p-[10px]"
              onClick={clickShowMenu}
            >
              <HiMenuAlt2 className="text-[2em] font-bold text-[#999] block" />
            </div>
            <div className="admin-header-none flex">
              <NavLink
                to="/admin/add-product"
                className={({ isActive }) =>
                  isActive
                    ? "admin-header-left-link-click admin-header-left-link"
                    : "admin-header-left-link"
                }
              >
                Thêm sản phẩm
              </NavLink>
              <NavLink
                to="/admin/add-category"
                className={({ isActive }) =>
                  isActive
                    ? "admin-header-left-link-click admin-header-left-link"
                    : "admin-header-left-link"
                }
              >
                Thêm phân loại
              </NavLink>
              <NavLink
                to="/admin/add-staff"
                className={({ isActive }) =>
                  isActive
                    ? "admin-header-left-link-click admin-header-left-link"
                    : "admin-header-left-link"
                }
              >
                Thêm nhân sự
              </NavLink>
            </div>
          </div>
          <div className="admin-header-right flex rounded-[99px] items-center p-[4px] cursor-pointer hover:bg-[#e4e4e4]">
            <img
              src="https://media.npr.org/assets/img/2023/04/20/ap23110232960422-435b2d5c81607c8d067c7e014e6a83b8f6788b4b.jpg"
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <span className="text-[1.2em] text-black ml-[4px]">Admin</span>
          </div>
        </div>

        <div className="admin-main bg-white overflow-y-scroll py-0 px-[15px] mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
