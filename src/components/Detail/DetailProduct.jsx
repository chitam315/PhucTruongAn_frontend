import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMain from "../Card/CardMain";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsPlusLg, BsPlusCircle, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import "./Detail.css";
import DetailInfor from "./DetailInfor";
import ModalVideo from "../Modal/ModalVideo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailProduct() {
  //Increment & Decrement INPUT QUANTITY
  const [count, setCount] = useState(1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    if (count < 99) setCount(count + 1);
  };
  //Checkbox compare
  const [checkboxCompare, setCheckboxCompare] = useState(0);

  //Handle button copy
  const [textCopy, setTextCopy] = useState("Sao chép");
  const changeTextBtnCopy = () => {
    navigator.clipboard.writeText("FREESHIP");
    setTextCopy("Đã lưu");
    setTimeout(() => {
      setTextCopy("Sao chép");
    }, 1500);
  };

  //Add to cart
  const toastOptions = {
    position: "top-center",
    autoClose: 1500,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const addToCart = async (event) => {
    event.preventDefault();
    try {
      toast.success("Thêm sản phẩm vào giỏ hàng thành công", toastOptions);
    } catch (error) {
      console.log(error);
      toast.error(
        "Lỗi server, vui lòng liên hệ phòng chăm sóc khách hàng",
        toastOptions
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <CardMain>
        <Row>
          <div className="col-12 flex items-center gap-2">
            <h1 className="font-medium mb-2 text-[1.1em]">
              [600W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar TP-D600N
              Mẫu Mới Nhất 3 Mặt Đèn
            </h1>
            <label from="checkbox-compare">
              <input
                type="checkbox"
                className="hidden detail-input-compare"
                value="/"
                id="checkbox-compare"
                data-type=""
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckboxCompare(1);
                  } else {
                    setCheckboxCompare(0);
                  }
                }}
              />
              <div className="rounded-[10px] flex items-center border-gray cursor-pointer gap-1 text-[var(--mainColor)] text-[1em] py-[3px] px-[5px]">
                <span>
                  {checkboxCompare === 0 ? (
                    <BsPlusCircle />
                  ) : (
                    <BsCheckCircleFill />
                  )}
                </span>
                <span>So sánh</span>
              </div>
            </label>
          </div>
          <Row>
            <div className="col-lg-4 col-tb-5 col-tbs-12 relative">
              <ModalVideo />
              <Carousel
                showThumbs={true}
                showIndicators={false}
                swipeable={true}
                useKeyboardArrows={true}
                showArrows={true}
                showStatus={false}
              >
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/5.jpg?v=1685090766457"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/u500-optimized-cefcccf4-29f7-41dc-ad9b-ce0f1536b919.png?v=1685090779840"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/1-u500.jpg?v=1685090785660"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/3-ip67.png?v=1685090992427"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/1-u500.jpg?v=1685090785660"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/3-ip67.png?v=1685090992427"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
            <div className="col-lg-5 col-tb-7 col-tbs-12">
              <span className="font-bold text-[1.5em] text-[var(--mainColor)]">
                1.690.000 <span>đ</span>
              </span>
              <div className="flex flex-wrap mt-[15px]">
                <label htmlFor="type">
                  <input
                    type="radio"
                    name="type"
                    id="type"
                    className="hidden"
                  />
                  <div className="btn-type-product">
                    <div className="flex items-center relative">
                      <div className="relative w-[14px] h-[14px] mr-[7px]">
                        <span className="checkbox-type"></span>
                        <AiFillCheckCircle className="absolute icon-checkbox" />
                      </div>
                      <p className="text-[0.8em]">300W</p>
                    </div>
                    <p className="text-[var(--red)] text-[0.8em]">1.390.000</p>
                  </div>
                </label>
                <label htmlFor="type2">
                  <input
                    type="radio"
                    name="type"
                    id="type2"
                    className="hidden"
                  />
                  <div className="btn-type-product">
                    <div className="flex items-center relative">
                      <div className="relative w-[14px] h-[14px] mr-[7px]">
                        <span className="checkbox-type"></span>
                        <AiFillCheckCircle className="absolute icon-checkbox" />
                      </div>
                      <p className="text-[0.8em]">450W</p>
                    </div>
                    <p className="text-[var(--red)] text-[0.8em]">1.690.000</p>
                  </div>
                </label>
                <label htmlFor="type3">
                  <input
                    type="radio"
                    name="type"
                    id="type3"
                    className="hidden"
                  />
                  <div className="btn-type-product">
                    <div className="flex items-center relative">
                      <div className="relative w-[14px] h-[14px] mr-[7px]">
                        <span className="checkbox-type"></span>
                        <AiFillCheckCircle className="absolute icon-checkbox" />
                      </div>
                      <p className="text-[0.8em]">600W</p>
                    </div>
                    <p className="text-[var(--red)] text-[0.8em]">1.890.000</p>
                  </div>
                </label>
              </div>
              <div className="flex items-center gap-2 mt-[15px]">
                <span className="text-[1.2em] font-bold mr-[30px]">
                  Số lượng
                </span>
                <div className="btn-quantity" onClick={decrementCount}>
                  <AiOutlineMinus />
                </div>
                <div className="btn-quantity" onClick={incrementCount}>
                  <BsPlusLg />
                </div>
                <input
                  type="text"
                  className="text-quantity"
                  name="quantity"
                  value={count}
                  maxLength="2"
                  id="number-quantity"
                  autoComplete="off"
                  min="1"
                  onChange={(event, e) => {
                    const value = Number(event.target.value);
                    setCount(value);
                  }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="flex items-center justify-center gap-3 mt-[20px]">
                <div className="w-[70%] col-tb-6 flex items-center flex-col bg-[var(--mainColor)] text-white py-[10px] rounded-[15px] cursor-pointer relative hover-overlay-main">
                  <div className="hover-overlay"></div>
                  <p className="uppercase font-bold">mua ngay</p>
                  <p>(Giao hàng miễn phí tận nơi)</p>
                </div>
                <div
                  className="w-[30%] col-tb-6 bg-[var(--menuHover)] border-2 flex items-center flex-col border-solid py-[10px] border-[var(--mainColor)] text-[var(--mainColor)] cursor-pointer rounded-[15px] hover-blue-white"
                  onClick={addToCart}
                >
                  <GiShoppingCart className="text-[1.6em]" />
                  <p className="text-white">Thêm vào giỏ</p>
                </div>
              </div>
              <div className="bg-[var(--main)] p-[30px] mt-[20px]">
                <p className="text-white font-bold text-[1.2em] mb-[10px]">
                  Đặt hàng nhanh
                </p>

                <div className="customer-name row">
                  <div className="col-12 mb-[20px]">
                    <input
                      type="text"
                      className="text p-[10px] w-100 border border-solid border-[#4d4d4d]"
                      name="contact[Name]"
                      placeholder="Họ tên"
                      required=""
                    />
                  </div>
                  <div className="col-12 mb-[20px]">
                    <input
                      type="text"
                      name="quantity"
                      className="text p-[10px] w-100 border border-solid border-[#4d4d4d]"
                      placeholder="Số điện thoại"
                      required=""
                    />
                  </div>
                  <div className="flex">
                    <div className="relative w-100 font-bold text-[1.2em] text-white text-center py-[10px] cursor-pointer bg-[#ed9301] box-border relative hover-overlay-main">
                      Đặt hàng
                      <div className="hover-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-tb-12 col-tbs-12">
              <div className="flex items-center border-main rounded-[10px] p-[10px]">
                <img
                  src={require("../../assets/Icon/consultant.png")}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <p className="text-[0.9em] ml-[15px]">
                  Gọi ngay{" "}
                  <span className="text-[1.1em] font-bold text-[var(--mainColor)]">
                    0363 993 993
                  </span>{" "}
                  để được tư vấn tốt nhất!
                </p>
              </div>
              <div className="border-gray rounded-[10px] p-[10px] text-[1em] mt-[20px]">
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
                <div className="border-main rounded-[30px] bg-[#ffeaea] flex items-center w-fit absolute top-[-12%] left-[6%] py-[2px] px-[15px] text-[var(--mainColor)]">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/icon/100/463/111/themes/889675/assets/gift.gif?1686880710266"
                    className="w-[20px]"
                    alt=""
                  />
                  <span className="text-capitalize text-[1em] font-medium ml-[10px]">
                    Mã giảm giá
                  </span>
                </div>
                <p className="text-[0.8em]">
                  Nhập mã <b className="uppercase">freeship</b> để được miễn phí
                  ship đơn giản từ 200k
                </p>
                <div
                  className="select-none hover-border-main font-bold text-[1em] rounded-[30px] bg-[var(--mainColor)] text-white w-fit px-[10px] py-[5px] cursor-pointer mt-[10px]"
                  id="btnCopy"
                  onClick={changeTextBtnCopy}
                >
                  {textCopy}
                </div>
              </div>
            </div>
          </Row>
          <DetailInfor />
        </Row>
      </CardMain>
      <div className="justify-between items-center gap-2 sticky-bottom p-[10px] d-lg-none d-sm-flex">
        <div className="border-red cursor-pointer rounded-[10px] py-[3px] w-[35%] flex flex-col items-center relative">
          <img
            src="https://bizweb.dktcdn.net/thumb/small/100/463/111/themes/889675/assets/hotline.png?1686880710266"
            alt=""
          />
          <span className="font-bold text-[1.1em]">Liên hệ</span>
          <div className="flex justify-between absolute top-[-130%] left-[15%] gap-2  p-[10px] bg-white rounded-[10px] card-shadow">
            <a href="/detail" className="btn-call">
              <FiPhoneCall />
            </a>
            <a href="/detail" className="btn-call">
              <div className="bg-white rounded-[5px] w-fit overflow-hidden flex justify-center items-center">
                <img
                  src={require("../../assets/Icon/zalo.png")}
                  alt=""
                  className="w-[25px] h-[25px]"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-100 uppercase bg-[var(--menuHover)] cursor-pointer rounded-[10px] py-[25px] hover-bdr-yellow">
          <span className="font-bold text-[1.1em] text-white inline">
            Thêm vào giỏ
          </span>
        </div>
        <div className="flex flex-col items-center w-[55%] uppercase bg-[var(--mainColor)] cursor-pointer rounded-[10px] py-[25px] hover-bdr-blue">
          <span className="font-bold text-[1.1em] text-white">Mua ngay</span>
        </div>
      </div>
    </>
  );
}
