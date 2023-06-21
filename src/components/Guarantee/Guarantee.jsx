import React from "react";
import "./Guarantee.css";

import HeaderGuarantee from "../HeaderGuarantee/HeaderGuarantee";
import FooterGuarantee from "../FooterGuarantee/FooterGuarantee";
export default function Guarantee() {
  return (
    <>
      <HeaderGuarantee />
      <div className="slide">
        <img
          src="https://cdn.phanmembaohanh.vn/data/Site/1013E770-9601-46F0-8D17-B086C3790BB4/slide-img3444.jpg"
          alt=""
        />
      </div>
      <div className="feature p-[50px] ">
        <div className="container w-[1200px]">
          <ul className="flex justify-between flex-wrap list-none">
            <li className="w-4/12 m-[20px] p-[0 20px 20px]">
              <a href="#0" data-type="warrantylookup">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/tra-cuu-bao-hanh.png?h=82"
                  alt=""
                />
              </a>
              <h3>
                <a href="#0" data-type="warrantylookup">
                  Tra cứu hạn bảo hành
                </a>
              </h3>
              <p>
                Tra cứu thông tin hạn bảo hành của một sản phẩm bằng mã bảo hành
              </p>
            </li>
            <li>
              <a href="#0" data-type="warrantyactive">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/kich-hoat-bao-hanh.png?h=82"
                  alt=""
                />
              </a>
              <h3>
                <a href="#0" data-type="warrantyactive">
                  Kích hoạt bảo hành
                </a>
              </h3>
              <p>
                Kích hoạt bảo hành cho các sản phẩm
                <br />
                bằng mã bảo hành.
              </p>
            </li>
            <li>
              <a href="#0" data-type="warrantysend">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/yeu-cau-bao-hanh-sua-chua.png?h=82"
                  alt=""
                />
              </a>
              <h3>
                <a href="#0" data-type="warrantysend">
                  Yêu cầu bảo hành
                </a>
              </h3>
              <p>
                Yêu cầu bảo hành hoặc sửa chữa cho sản phẩm khi có phát sinh bảo
                hành hoặc sửa chữa
              </p>
            </li>
            <li>
              <a href="#0" data-type="warrantyrepair">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/tra-cuu-yeu-cau-sua-chua-bao-hanh.png?h=82"
                  alt=""
                />
              </a>
              <h3>
                <a href="#0" data-type="warrantyrepair">
                  Tra cứu bảo hành
                </a>
              </h3>
              <p>
                Tra cứu tình trạng yêu cầu bảo hành, sửa chữa bằng mã bảo hành
              </p>
            </li>
            <li>
              <a href="/Guest/Support">
                <img
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/tram-bao-hanh.png?h=82"
                  alt=""
                />
              </a>
              <h3>
                <a href="/Guest/Support">Trạm bảo hành</a>
              </h3>
              <p>
                Địa chỉ các trung tâm bảo hành
                <br />
                trên toàn quốc.
              </p>
            </li>
            <li>
              <a href="/Guest/Intro">
                <img
                  data-src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/huong-dan.png?h=82"
                  src="https://cdn.phanmembaohanh.vn/data/Template/cd93576e-0980-4708-a20f-8fe4893b35f1//images/huong-dan.png?h=82"
                  alt=""
                />
              </a>
              <h3>
                <a href="/Guest/Intro">Chính sách và hướng dẫn</a>
              </h3>
              <p>
                Thông tin về chính sách bảo hành và Hướng dẫn sử dụng website
              </p>
            </li>
          </ul>
        </div>
      </div>
      <FooterGuarantee />
    </>
  );
}
