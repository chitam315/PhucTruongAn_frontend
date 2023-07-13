import React from "react";
import "../Guarantee/Guarantee.css";
import ModalTraCuuHanBaoHanh from "../Modal/ModalTraCuuHanBaoHanh";
import ModalTraCuuBaoHanh from "../Modal/ModalTraCuuBaoHanh";
import ModalActiveGuarantee from "../Modal/ModalActiveGuarantee";
import ModalWarrantyClaim from "../Modal/ModalWarrantyClaim";
import WarrantyStation from "../WarrantyStation/WarrantyStation";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg"
const HeaderGuarantee = () => {
  return (
    <>
      <div className="header max-w-[100%] bg-[#f2f2f4]">
        <div className="container w-[1200px] flex-center flex">
          <div className="logo h-[80px] w-[250px]  flex justify-start items-center">
            <Link to="/" title="TP Solar">
              <img
                className="max-h-[50px] max-w-[250px]"
                src={logo}
                title=""
                alt=""
              />
            </Link>
          </div>
          <h2 className="text-[32px] font-bold hover:underline ">
            <p className="hover:text-current">
              TRUNG TÂM BẢO HÀNH
            </p>
          </h2>

          <div
            style={{ border: "1px solid black" }}
            className="phone hover:underline text-[18px] font-bold p-[10px] rounded-[10px]"
          >
            <a href="tel:0933 819 292" className="hover:text-current">
              Hotline: 0933 819 292
            </a>
          </div>
          <div
            style={{ border: "1px solid black" }}
            className="login text-[18px] font-bold hover:underline p-[10px] rounded-[10px]"
          >
            <Link to="/signin" className="hover:text-current">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <div className="menu ">
        <div className="container w-[1200px] ">
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
