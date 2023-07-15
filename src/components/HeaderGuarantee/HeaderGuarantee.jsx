import React from "react";
import "../Guarantee/Guarantee.css";
import ModalTraCuuHanBaoHanh from "../Modal/ModalTraCuuHanBaoHanh";
import ModalTraCuuBaoHanh from "../Modal/ModalTraCuuBaoHanh";
import ModalActiveGuarantee from "../Modal/ModalActiveGuarantee";
import ModalWarrantyClaim from "../Modal/ModalWarrantyClaim";
import WarrantyStation from "../WarrantyStation/WarrantyStation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
const HeaderGuarantee = () => {
  return (
    <>
      <div className="header max-w-[100%] bg-[#f2f2f4]">
        <div className="container-sm flex-center py-[10px]">
          <Link to="/" title="TP Solar">
            <img className="h-[70px] w-[70px]" src={logo} alt="" />
          </Link>

          <h2 className="text-[2em] font-bold">TRUNG TÂM BẢO HÀNH</h2>

          <div className="flex items-center gap-3">
            <div
              style={{ border: "1px solid black" }}
              className="d-block-none hover:underline text-[18px] font-bold p-[10px] rounded-[10px] cursor-pointer"
            >
              Hotline: 0933 819 292
            </div>

            <Link
              to="/signin"
              className="d-block-none text-[18px] font-bold hover:underline p-[10px] rounded-[10px] text-black"
              style={{ border: "1px solid black" }}
            >
              Đăng nhập
            </Link>
          </div>
          <div className="d-none-block relative hover-show-dropdown">
            <GiHamburgerMenu className="text-[1.3em] cursor-pointer " />
            <div className="absolute top-[100%] right-0 bg-white border-gray w-[250px] cursor-pointer rounded-[10px] p-2 gap-2 show-dropdown">
              <ModalTraCuuHanBaoHanh
                name={"Tra cứu hạn bảo hành"}
                content={"test content"}
              />
              <ModalActiveGuarantee
                name={"Kích hoạt bảo hành"}
                content={"test content"}
              />
              <ModalWarrantyClaim
                name={"Yêu cầu bảo hành"}
                content={"test content"}
              />
              <ModalTraCuuBaoHanh
                name={"Tra cứu bảo hành"}
                content={"test content"}
              />
              <Link
                to="/guest/support"
                onClick={WarrantyStation}
                className="hover:text-[green] uppercase block"
              >
                Trạm bảo hành
              </Link>
              <Link
                to="/guest/intro/chinh-sach-bao-hanh"
                className="hover:text-[green] uppercase block"
              >
                Chính sách và hướng dẫn
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block-none">
        <div className="container-sm">
          <ul className="flex justify-between h-[50px] items-center uppercase text-[16px] font-bold text-[#101C2C] list-none hover:text-[green]">
            <li>
              <a href="#0" data-type="warrantylookup">
                <ModalTraCuuHanBaoHanh
                  name={"Tra cứu hạn bảo hành"}
                  content={"test content"}
                />
              </a>
            </li>
            <li>
              <a href="#0" data-type="warrantyactive">
                <ModalActiveGuarantee
                  name={"Kích hoạt bảo hành"}
                  content={"test content"}
                />
              </a>
            </li>
            <li>
              <a href="#0" data-type="warrantysend">
                <ModalWarrantyClaim
                  name={"Yêu cầu bảo hành"}
                  content={"test content"}
                />
              </a>
            </li>
            <li>
              <a href="#0" data-type="warrantyrepair">
                <ModalTraCuuBaoHanh
                  name={"Tra cứu bảo hành"}
                  content={"test content"}
                />
              </a>
            </li>
            <li>
              <Link
                to="/guest/support"
                onClick={WarrantyStation}
                className="hover:text-[green]"
              >
                Trạm bảo hành
              </Link>
            </li>
            <li>
              <Link
                to="/guest/intro/chinh-sach-bao-hanh"
                className="hover:text-[green]"
              >
                Chính sách và hướng dẫn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderGuarantee;
