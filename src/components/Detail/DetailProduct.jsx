import React, { useCallback, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import CardMain from "../Card/CardMain";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

import "./Detail.css";
import DetailInfor from "./DetailInfor";

export default function DetailProduct() {
  return (
    <CardMain>
      <Row>
        <div className="col-12 h_pr mb-3">
          <h1 className="product-name font-weight-bold mb-2 d-inline-flex mr-3">
            [600W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar TP-D600N Mẫu
            Mới Nhất 3 Mặt Đèn
          </h1>
          <label className="align-items-center border compare-label d-inline-flex m-0 position-relative px-2 py-1 rounded-10">
            <input
              type="checkbox"
              className="compare-checkbox d-none"
              value="/den-duong-lien-the-nang-luong-mat-tp-d600"
              data-type="Đèn Đường"
            />
            <span className="compare-checkbox mr-1 position-relative"></span>
            So sánh
          </label>
        </div>
        <Row>
          <div className="col-md-4 relative">
            <div className="absolute rounded-[10px] border-2 border-solid border-[var(--mainColor)] z-[1000] top-[60%] left-[10%] w-[70px] h-[70px] flex items-center p-[10px]">
              <img
                src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863"
                alt=""
              />
            </div>
            <Carousel
              showThumbs={true}
              showIndicators={false}
              swipeable={true}
              useKeyboardArrows={true}
              showArrows={false}
              showStatus={false}
            >
              <div className="ban">
                <img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGMyCheCstEGpAjhx7BdorHds4MY5zqBLyfExf2GsnEOWYdvvpsgxpaWsTpyzRbkbmzQ&usqp=CAU" />
              </div>
            </Carousel>
          </div>
          <div className="col-md-5">
            <span className="font-bold text-[1.5em] text-[var(--mainColor)]">
              1.690.000d
            </span>
            <div className="flex flex-wrap">
              <label htmlFor="type" className="btn-type-product clicked ">
                <input type="radio" name="type" id="type" className="hidden" />
                <div className="flex items-center relative">
                  <div className="relative w-[12px] h-[12px] mr-[7px]">
                    <span className="checkbox-type"></span>
                    <AiFillCheckCircle className="absolute icon-checkbox" />
                  </div>
                  <p>300W</p>
                </div>
                <span className="text-[var(--red)]">1.390.000d</span>
              </label>
              <label htmlFor="type2" className="btn-type-product">
                <input type="radio" name="type" id="type2" className="hidden" />
                <div className="flex items-center">
                  <div className="relative w-[12px] h-[12px] mr-[7px]">
                    <span className="checkbox-type"></span>
                    <AiFillCheckCircle className="absolute icon-checkbox" />
                  </div>
                  <span>450W</span>
                </div>
                <span>1.690.000d</span>
              </label>
              <label htmlFor="type3" className="btn-type-product">
                <input type="radio" name="type" id="type3" className="hidden" />
                <div className="flex items-center">
                  <div className="relative w-[12px] h-[12px] mr-[7px]">
                    <span className="checkbox-type"></span>
                    <AiFillCheckCircle className="absolute icon-checkbox" />
                  </div>
                  <span>600W</span>
                </div>
                <span>1.890.000d</span>
              </label>
            </div>
            <div className="flex items-center gap-2 mt-[15px]">
              <span className="text-[1.2em] font-bold mr-[30px]">Số lượng</span>
              <div className="btn-quantity">
                <AiOutlineMinus />
              </div>
              <div className="btn-quantity">
                <BsPlusLg />
              </div>
              <input type="text" className="text-quantity" />
            </div>
            <div className="flex items-center justify-center gap-3 mt-[20px]">
              <div className="w-[75%] flex items-center flex-col bg-[var(--mainColor)] text-white py-[10px] rounded-[15px] cursor-pointer">
                <p className="uppercase font-bold">mua ngay</p>
                <p>(Giao hàng miễn phí tận nơi)</p>
              </div>
              <div className="w-[25%] bg-[var(--menuHover)] border-2 flex items-center flex-col border-solid py-[10px] border-[var(--mainColor)] text-[var(--mainColor)] cursor-pointer rounded-[15px]">
                <GiShoppingCart className="text-[1.6em]" />
                <p className="text-white">Thêm vào giỏ</p>
              </div>
            </div>
            <div className="bg-[var(--mainColor)] p-[30px] mt-[20px]">
              <p className="text-white font-bold text-[1.2em]">
                Đặt hàng nhanh
              </p>

              <div class="customer-name row">
                <div class="col-12 mb-[20px]">
                  <input
                    type="text"
                    class="form-control"
                    name="contact[Name]"
                    placeholder="Họ tên"
                    required=""
                  />
                </div>
                <div class="col-12 mb-[20px]">
                  <input
                    type="tel"
                    class="form-control"
                    name="contact[Phone]"
                    placeholder="Số điện thoại"
                    required=""
                  />
                </div>
                <div class="flex">
                  <div className="relative w-100 font-bold text-[1.2em] text-white text-center py-[10px] cursor-pointer bg-[#ed9301] box-border">
                    Đặt hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex items-center border-main rounded-[10px] p-[10px]">
              <img
                src={require("../../assets/Icon/consultant.png")}
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-[1.1em] ml-[15px]">
                Gọi ngay{" "}
                <span className="text-[1.2em] font-bold text-[var(--mainColor)]">
                  0363 993 993
                </span>{" "}
                để được tư vấn tốt nhất!
              </p>
            </div>
            <div className="border-gray rounded-[10px] p-[10px] text-[1.1em] mt-[20px]">
              <p>
                Tình trạng: <span className="text-[#00b907]">Còn hàng</span>
              </p>
              <p>
                Thương hiệu: <span className="text-[#00b907]">TP Solar</span>
              </p>
              <p>
                Loại: <span className="text-[#00b907]">Đèn Đường</span>
              </p>
            </div>
            <div className="relative border-main-dashed rounded-[10px] mt-[35px] px-[20px] py-[30px]">
              <div className="border-main rounded-[30px] bg-[#ffeaea] flex items-center w-fit absolute top-[-15%] left-[8%] py-[2px] px-[15px] text-[var(--mainColor)]">
                <img
                  src="https://bizweb.dktcdn.net/thumb/icon/100/463/111/themes/889675/assets/gift.gif?1686880710266"
                  alt=""
                />
                <span className="text-capitalize text-[1.3em] font-medium ml-[10px]">
                  Mã giảm giá
                </span>
              </div>
              <p>
                Nhập mã <b className="uppercase">freeship</b> để được miễn phí
                ship đơn giản từ 200k
              </p>
              <div className="hover-border-main font-bold text-[1.2em] rounded-[30px] bg-[var(--mainColor)] text-white w-fit px-[10px] py-[5px] cursor-pointer mt-[10px]">
                Sao chép
              </div>
            </div>
          </div>
        </Row>
        
        <DetailInfor/>
        
      </Row>
    </CardMain>
  );
}
