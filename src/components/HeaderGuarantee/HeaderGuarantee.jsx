import React from "react";
import "../Guarantee/Guarantee.css";
import ModalTraCuuHanBaoHanh from "../Modal/ModalTraCuuHanBaoHanh";
import ModalTraCuuBaoHanh from "../Modal/ModalTraCuuBaoHanh";
import ModalActiveGuarantee from "../Modal/ModalActiveGuarantee";
import ModalWarrantyClaim from "../Modal/ModalWarrantyClaim";
import WarrantyStation from "../WarrantyStation/WarrantyStation";
const HeaderGuarantee = () => {
  return (
    <>
      <div className="header max-w-[100%] bg-[#f2f2f4]">
        <div className="container w-[1200px] flex-center flex">
          <div className="logo h-[80px] w-[250px]  flex justify-start items-center">
            <a href="http://tpsolar.vn" title="TP Solar">
              <img
                className="max-h-[50px] max-w-[250px]"
                src="https://cdn.phanmembaohanh.vn/data/Organization/D1C0182A-0F28-43F3-99D9-9E73BC31CE9F/tpsolar.png?h=100"
                title="TP Solar"
                alt="TP Solar"
              />
            </a>
          </div>
          <h2 className="text-[32px] font-bold hover:underline ">
            <a href="/" className="hover:text-current">
              TRUNG TÂM BẢO HÀNH
            </a>
          </h2>

          <div
            style={{ border: "1px solid black" }}
            className="phone hover:underline text-[18px] font-bold p-[10px] rounded-[10px]"
          >
            <a href="tel:1800 64 64 50" className="hover:text-current">
              Hotline: 1800 64 64 50
            </a>
          </div>
          <div
            style={{ border: "1px solid black" }}
            className="login text-[18px] font-bold hover:underline p-[10px] rounded-[10px]"
          >
            <a href="/?c=login" className="hover:text-current">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
      <div className="menu ">
        <div className="container w-[1200px] ">
          <ul className="flex justify-between h-[50px] items-center uppercase text-[16px] font-bold text-[#101C2C] list-none">
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
              <a href="/Guest/Support" onClick={WarrantyStation}>
                Trạm bảo hành
              </a>
            </li>
            <li>
              <a href="/Guest/Intro">Chính sách và hướng dẫn</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderGuarantee;
