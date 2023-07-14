import React from "react";
import HeaderGuarantee from "../HeaderGuarantee/HeaderGuarantee";
import FooterGuarantee from "../FooterGuarantee/FooterGuarantee";
import "./WarrantyPolicyHome.css";
import { NavLink, Link } from "react-router-dom";

const WarrantyPolicyHome = ({ children, name, url }) => {
  return (
    <>
      <HeaderGuarantee />
      <div className="nav block bg-[#f9faf9]">
        <div className="container">
          <ul
            className="breadcrumb uppercase text-[14px] gap-2 items-center p-[5px] "
            itemscope=""
            itemtype="http://schema.org/BreadcrumbList"
          >
            <li
              className="hover:underline"
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <Link to="/">Trang chủ</Link>
              <meta itemprop="position" content="1" />
            </li>
            <span>/</span>
            <li
              className="hover:underline "
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <Link itemprop="item" to={`/guest/intro/${url}`} className="">
                {name}
              </Link>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>
      </div>
      <div className="intro">
        <div className="container">
          <ul className="list list-none uppercase text-[15px]">
            <li className="on">
              <NavLink
                to="/guest/intro/chinh-sach-bao-hanh"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Chính sách bảo hành
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/guest/intro/chinh-sach-bao-mat"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Chính sách bảo mật
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/guest/intro/chinh-sach-van-chuyen"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Chính sách vận chuyển
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/guest/intro/chinh-sach-doi-tra"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Chính sách đổi trả
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/guest/intro/dieu-khoan"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Điều khoản
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/guest/intro/chinh-sach-thanh-toan"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Chính Sách Thanh Toán
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/guest/intro/chinh-sach-kiem-hang"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:underline hover:text-black"
                    : "font-medium hover:underline hover:text-black"
                }
              >
                Chính Sách Kiểm Hàng
              </NavLink>
            </li>
          </ul>
          <div className="detail">{children}</div>
        </div>
      </div>

      <FooterGuarantee />
    </>
  );
};

export default WarrantyPolicyHome;
