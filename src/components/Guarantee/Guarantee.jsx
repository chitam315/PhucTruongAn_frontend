import React from "react";
import "./Guarantee.css";

import HeaderGuarantee from "../HeaderGuarantee/HeaderGuarantee";
import FooterGuarantee from "../FooterGuarantee/FooterGuarantee";
import { Link } from "react-router-dom";
export default function Guarantee() {
  return (
    <>
      <HeaderGuarantee />
      <div className="w-full">
        <img
          src="https://cdn.phanmembaohanh.vn/data/Site/1013E770-9601-46F0-8D17-B086C3790BB4/slide-img3444.jpg"
          alt=""
          className="w-full h-[80%] clear-both p-0"
        />
      </div>
      <div className="">
        <div className="container-sm py-[30px]">
          <div className="flex flex-wrap list-none">
            <div className="col-4 col-tb-6 col-tbs-12 h-full">
              <Link
                to="#"
                className="m-[8px] p-[15px] text-center bg-[#f6f6f6] rounded-[20px] flex flex-col items-center"
              >
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/tra-cuu-bao-hanh.png?h=82"
                  alt=""
                  className="w-[100px]"
                />

                <span className="font-bold text-[#101c2c] py-[10px] text-[1.5em] uppercase text-center">
                  Tra cứu hạn bảo hành
                </span>
                <p className="m-0 p-0 leading-2">
                  Tra cứu thông tin hạn bảo hành <br/>của một sản phẩm bằng mã bảo
                  hành
                </p>
              </Link>
            </div>
            <div className="col-4 col-tb-6 col-tbs-12 h-full">
              <Link
                to="#"
                className="m-[8px] p-[15px] text-center bg-[#f6f6f6] rounded-[20px] flex flex-col items-center"
              >
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/kich-hoat-bao-hanh.png?h=82"
                  alt=""
                  className="w-[100px]"
                />
                <span className="font-bold text-[#101c2c] py-[10px] text-[1.5em] uppercase text-center">
                  Kích hoạt bảo hành
                </span>

                <p className="m-0 p-0 leading-2">
                  Kích hoạt bảo hành cho các sản phẩm <br/>bằng mã bảo hành.
                </p>
              </Link>
            </div>
            <div className="col-4 col-tb-6 col-tbs-12 h-full">
              <Link className="m-[8px] p-[15px] text-center bg-[#f6f6f6] rounded-[20px] flex flex-col items-center">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/yeu-cau-bao-hanh-sua-chua.png?h=82"
                  alt=""
                  className="w-[100px]"
                />
                <span className="font-bold text-[#101c2c] py-[10px] text-[1.5em] uppercase text-center">
                  Yêu cầu bảo hành
                </span>

                <p className="m-0 p-0 leading-2">
                  Yêu cầu bảo hành hoặc sửa chữa cho sản phẩm <br/>khi có phát sinh
                  bảo hành hoặc sửa chữa
                </p>
              </Link>
            </div>
            <div className="col-4 col-tb-6 col-tbs-12 h-full">
              <div className="m-[8px] p-[15px] text-center bg-[#f6f6f6] rounded-[20px] flex flex-col items-center">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/tra-cuu-yeu-cau-sua-chua-bao-hanh.png?h=82"
                  alt=""
                  className="w-[100px]"
                />

                <span className="font-bold text-[#101c2c] py-[10px] text-[1.5em] uppercase text-center">
                  Tra cứu bảo hành
                </span>

                <p className="m-0 p-0 leading-2">
                  Tra cứu tình trạng yêu cầu bảo hành, <br/>sửa chữa bằng mã bảo hành
                </p>
              </div>
            </div>
            <div className="col-4 col-tb-6 col-tbs-12 h-full">
              <Link
                to="/Guest/Support"
                className="m-[8px] p-[15px] text-center bg-[#f6f6f6] rounded-[20px] flex flex-col items-center"
              >
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/tram-bao-hanh.png?h=82"
                  alt=""
                  className="w-[100px]"
                />
                <span className="font-bold text-[#101c2c] py-[10px] text-[1.5em] uppercase text-center">
                  Trạm bảo hành
                </span>

                <p className="m-0 p-0 leading-2">
                  Địa chỉ các trung tâm bảo hành <br/>trên toàn quốc.
                </p>
              </Link>
            </div>
            <div className="col-4 col-tb-6 col-tbs-12 h-full">
              <Link
                to="/Guest/Intro/chinh-sach-bao-hanh"
                className="m-[8px] p-[15px] text-center bg-[#f6f6f6] rounded-[20px] flex flex-col items-center"
              >
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/huong-dan.png?h=82"
                  alt=""
                  className="w-[100px]"
                />
                <span className="font-bold text-[#101c2c] py-[10px] text-[1.5em] uppercase text-center">
                  Chính sách và hướng dẫn
                </span>

                <p className="m-0 p-0 leading-2">
                  Thông tin về chính sách bảo hành <br/>và Hướng dẫn sử dụng website
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterGuarantee />
    </>
  );
}
