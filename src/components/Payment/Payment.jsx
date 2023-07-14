import {  BsChevronLeft } from "react-icons/bs";
import { BiCreditCard } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ImTruck } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Payment.css";
import React, { useState, useEffect, useRef } from "react";
import { province } from "../../json/province";
import { district } from "../../json/district";
import { ward } from "../../json/ward";
import {ItemInPayment} from "./ItemInPayment"
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useAuth } from "../AuthContext";
import logo from "../../logo.jpg"
import QR from "../../QR_banking.jpg"

function Payment() {
  const { user } = useAuth()
  const containerRef = useRef(null);
  const [dropdownCity, setDropdownCity] = useState(false);
  const [dropdownDistrict, setDropdownDistrict] = useState(false);
  const [dropdownWard, setDropdownWard] = useState(false);
  const [valCity, setValCity] = useState("---");
  const [valDistrict, setValDistrict] = useState("---");
  const [valWard, setValWard] = useState("---");
  const [searchCity, setSearchCity] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");
  const [searchWard, setSearchWard] = useState("");
  const [arrayDistrict, setArrayDistrict] = useState([]);
  const [arrayWard, setArrayWard] = useState([]);
  const [onDistrict, setOnDistrict] = useState(false);
  const [onWard, setOnWard] = useState(false);
  const [openQRCode, setOpenQRCode] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
  const { loadingCart, data: listCart } = useFetch(() => {
    return productService.getCartById(user.id);
  });

  var sumOfPrice = 0
  if(!loadingCart){
    console.log(listCart);
    listCart?.data?.metadata.map((e) => sumOfPrice+=e.product.product_price*e.quantity)
  }

  //SẮP XẾP LIST TỈNH THÀNH QUẬN HUYỆN PHƯỜNG XÃ THEO BẢNG CHỮ CÁI
  province.sort(function (a, b) {
    return a.name
      .toLowerCase()
      .localeCompare(b.name.toLowerCase(), "vi", { sensitivity: "base" });
  });
  district.sort(function (a, b) {
     return a.name
       .toLowerCase()
       .localeCompare(b.name.toLowerCase(), "vi", { sensitivity: "base" });
    }
  );

  ward.sort(function (a, b) {
    return a.name
      .toLowerCase()
      .localeCompare(b.name.toLowerCase(), "vi", { sensitivity: "base" });
  });

  //MỞ DROPDOWN TỈNH THÀNH QUẬN HUYỆN PHƯỜNG XÃ
  function openDropdownCity() {
    setDropdownDistrict(false);
    setDropdownWard(false);
    setSearchCity("");

    if (dropdownCity === true) {
      setDropdownCity(false);
    } else {
      setDropdownCity(true);
    }
  }
  function openDropdownDistrict() {
    setDropdownCity(false);
    setDropdownWard(false);
    setSearchDistrict("");

    if (dropdownDistrict === true) {
      setDropdownDistrict(false);
    } else {
      setDropdownDistrict(true);
    }
  }
  function openDropdownWard() {
    setDropdownCity(false);
    setDropdownDistrict(false);
    setSearchWard("");
    if (dropdownWard === true) {
      setDropdownWard(false);
    } else {
      setDropdownWard(true);
    }
  }

  //XỬ LÝ KHI CLICK BÊN NGOÀI THÌ ĐÓNG DROPDOWN ĐANG MỞ
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setDropdownCity(false);
      setDropdownDistrict(false);
      setDropdownWard(false);
    }
  };

  //EVENT KHI NHẤN CHỌN MỘT TỈNH THÀNH - QUẬN HUYỆN - PHƯỜNG XÃ TRONG DROPDOWN
  const onclickCity = (item) => {
    setDropdownCity(false);
    setValCity(item.name);
    setValDistrict("---");
    setValWard("---");
    setOnDistrict(true);
    setOnWard(false);
    const arrDistrict = district.filter((dt) => {
      return dt.parent === item.code;
    });
    setArrayDistrict(arrDistrict);
  };

  const onclickDistrict = (item) => {
    setDropdownDistrict(false);
    setValDistrict(item.name);
    setValWard("---");
    setOnWard(true);
    const arrWard = ward.filter((wd) => {
      return wd.parent === item.code;
    });
    setArrayWard(arrWard);
  };
  const onclickWard = (item) => {
    setDropdownWard(false);
    setValWard(item.name);
  };

  //CỦA MODAL PAYMENT BANKING
  // const handleOk = () => {
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };

  if (loadingCart) {
    return <h1>Loading ...</h1>
  }

  return (
    <div className="bg-[#fff] w-100 h_100vh-fit mlr_auto-0">
      <div className="flex-block w-100">
        <div className="col-8-12 py-[20px] container-sm">
          <div className="w-fit">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="w-[150px]"
              />
            </Link>
          </div>
          <div className="flex-block w-100">
            <div className="col-6-12" ref={containerRef}>
              <div className="flex-center mb-[15px]">
                <p className="pt-0 font-bold text-[1.2em] text-black">
                  Thông tin nhận hàng
                </p>
              </div>
              <label className="paying-input-animation">
                <input type="text" required spellcheck="false" />
                <span>Họ và tên</span>
              </label>
              <label className="paying-input-animation">
                <input type="text" required spellcheck="false" />
                <span>Số điện thoại</span>
              </label>
              <label className="paying-input-animation">
                <input type="text" required spellcheck="false" />
                <span>Địa chỉ</span>
              </label>

              <div className="relative">
                {dropdownCity === true ? (
                  <div className="paying-dropdown">
                    <div className="m-1">
                      <input
                        type="text"
                        id="input-city"
                        value={searchCity}
                        spellcheck="false"
                        placeholder="Tìm kiếm ..."
                        onChange={(e) => setSearchCity(e.target.value)}
                      />
                    </div>
                    <ul>
                      {province
                        .filter((item) =>
                          item.name.toLowerCase().includes(searchCity)
                        )
                        .map((item, index) => (
                          <li
                            className="block"
                            onClick={() => onclickCity(item)}
                          >
                            {item.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className="paying-dropdown-animation"
                  onClick={openDropdownCity}
                >
                  <div className="paying-dropdown-content">
                    <p>{valCity}</p>
                    <span>Tỉnh thành</span>
                  </div>
                  <div className="paying-dropdown-svg">
                    {dropdownCity === false ? (
                      <AiFillCaretDown />
                    ) : (
                      <AiFillCaretUp />
                    )}
                  </div>
                </div>
              </div>

              <div className="relative">
                {dropdownDistrict === true ? (
                  <div className="paying-dropdown">
                    <div className="m-1">
                      <input
                        type="text"
                        id="input-district"
                        value={searchDistrict}
                        spellcheck="false"
                        placeholder="Tìm kiếm ..."
                        onChange={(e) => setSearchDistrict(e.target.value)}
                      />
                    </div>
                    <ul>
                      {arrayDistrict
                        .filter((item) =>
                          item.name.toLowerCase().includes(searchDistrict)
                        )
                        .map((item, index) => (
                          <li
                            className="block"
                            onClick={() => onclickDistrict(item)}
                          >
                            {item.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className={
                    onDistrict === true
                      ? "paying-dropdown-animation"
                      : "paying-dropdown-animation paying-dropdown-unclick"
                  }
                  onClick={() => {
                    if (onDistrict === true) openDropdownDistrict();
                  }}
                >
                  <div className="paying-dropdown-content">
                    <p>{valDistrict}</p>
                    <span>Quận huyện</span>
                  </div>
                  <div className="paying-dropdown-svg">
                    {dropdownDistrict === false ? (
                      <AiFillCaretDown />
                    ) : (
                      <AiFillCaretUp />
                    )}
                  </div>
                </div>
              </div>

              <div className="relative">
                {dropdownWard === true ? (
                  <div className="paying-dropdown">
                    <div className="m-1">
                      <input
                        type="text"
                        id="input-ward"
                        value={searchWard}
                        spellcheck="false"
                        placeholder="Tìm kiếm ..."
                        onChange={(e) => setSearchWard(e.target.value)}
                      />
                    </div>
                    <ul>
                      {arrayWard
                        .filter((item) =>
                          item.name.toLowerCase().includes(searchWard)
                        )
                        .map((item, index) => (
                          <li
                            className="block"
                            onClick={() => onclickWard(item)}
                          >
                            {item.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className={
                    onWard === true
                      ? "paying-dropdown-animation"
                      : "paying-dropdown-animation paying-dropdown-unclick"
                  }
                  onClick={() => {
                    if (onWard === true) openDropdownWard();
                  }}
                >
                  <div className="paying-dropdown-content">
                    <p>{valWard}</p>
                    <span>Phường xã</span>
                  </div>
                  <div className="paying-dropdown-svg">
                    {dropdownWard === false ? (
                      <AiFillCaretDown />
                    ) : (
                      <AiFillCaretUp />
                    )}
                  </div>
                </div>
              </div>

              <label className="paying-input-animation">
                <textarea rows="3" spellcheck="false" required></textarea>
                <span>Ghi chú (tùy chọn)</span>
              </label>
            </div>
            <div className="col-6-12">
              <div className="px-[5px]">
                <p className="flex items-center pt-0 font-bold text-[1.2em] text-black mb-[15px]">
                  <ImTruck className="transform scale-x-[-1] mr-[8px] text-[1.1em] none-block" />
                  Vận chuyển
                </p>
                <div className="py-[12px] px-[25px]  text-[1em] rounded-[5px] bg-[#d1ecf1] text-[#0c5460;]">
                  Vui lòng nhập thông tin giao hàng
                </div>
                <div className="flex-center py-[12px] px-[25px] border-gray rounded-[5px] cursor-pointer">
                  <div className="flex items-center">
                    <span className="block rounded-full w-[20px] h-[20px] border-[8px] border-solid border-[#197bbd] mr-[10px]"></span>
                    <span className="font-medium text-[1em]">
                      Giao hàng tận nơi
                    </span>
                  </div>
                  <span className="font-medium text-[1em]">Liên hệ</span>
                </div>
                <p className="flex items-center pt-0 font-bold text-[1.2em] text-black mb-[15px] mt-[30px]">
                  <BiCreditCard className="transform scale-x-[-1] mr-[8px] text-[1.1em] none-block" />
                  Thanh toán
                </p>
                <label htmlFor="check-paying1" className="w-100">
                  <input
                    type="radio"
                    name="check-paying"
                    id="check-paying1"
                    className="hidden paying-radio-payment"
                    onChange={(e) => {
                      if (e.target.checked) setOpenQRCode(true);
                    }}
                  />
                  <div className="py-[12px] px-[25px] border-gray cursor-pointer radius-top-5 flex-center w-100">
                    <div className="flex items-center">
                      <span className="paying-checkbox-payment"></span>
                      <span className="font-medium text-[1em]">
                        Chuyển khoản qua ngân hàng
                      </span>
                    </div>
                    <FaRegMoneyBillAlt className="text-[1.5em] fill-[#197bbd]" />
                  </div>
                  {openQRCode === true ? (
                    <div className="paying-qrcode">
                      <img
                        src={QR}
                        alt=""
                      />
                      <span className="text-[1em] text-[#262626] text-center">
                        Nguyễn Anh Trường
                      </span>
                      <span className="text-[1em] text-[#262626] text-center">
                        0121002557771 - Vietcombank
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </label>
                <label htmlFor="check-paying2" className="w-100">
                  <input
                    type="radio"
                    name="check-paying"
                    id="check-paying2"
                    defaultChecked
                    className="hidden paying-radio-payment"
                    onChange={(e) => {
                      if (e.target.checked) setOpenQRCode(false);
                    }}
                  />
                  <div className="py-[12px] px-[25px] border-gray cursor-pointer radius-bottom-5 flex-center w-100">
                    <div className="flex items-center">
                      <span className="paying-checkbox-payment"></span>
                      <span className="font-medium text-[1em]">
                        Thanh toán khi nhận hàng (COD)
                      </span>
                    </div>
                    <FaRegMoneyBillAlt className="text-[1.5em] fill-[#197bbd]" />
                  </div>
                  {openQRCode === false ? (
                    <div className="px-[25px] py-[35px] bg-[#ccc] rounded-bl-[5px] rounded-br-[5px]">
                      Bạn chỉ phải thanh toán khi nhận được hàng
                    </div>
                  ) : (
                    <></>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4-12 bg-[#fff7f7] overflow-auto p-[15px] h_100vh-fit">
          <div className="container-sm">
            <p className="pt-0 font-bold text-[1.2em] text-black block pb-[15px] border-b-[1px] border-b-[#ccc]">
              Đơn hàng (19 sản phẩm)
            </p>

            {/* List sản phẩm */}
            {
              listCart?.data?.metadata.map((ele,index) => <ItemInPayment key={index} product={ele}/>)
            }
            {/* <div className="flex py-[10px] border-b-[1px] border-b-[#ccc]">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/4.jpg?v=1685090490210"
                alt=""
                className="w-[100px]"
              />
              <div>
                <span className="text-[1em] font-medium">
                  [600W] Đèn UFO Năng Lượng Mặt Trời TP Solar TP-U600RGB Chiếu
                  Sáng 360 Độ
                </span>
                <div className="flex-center mt-[10px]">
                  <div className="text-[0.9em]">
                    200000₫
                    <span className="ml-1 text-[1.2em] font-bold text-[var(--mainColor)]">
                      x2
                    </span>
                  </div>
                  <div className="font-bold text-[1.1em] text-[var(--accentColor2)]">
                    400000₫
                  </div>
                </div>
              </div>
            </div>
            <div className="flex py-[10px] border-b-[1px] border-b-[#ccc]">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/4.jpg?v=1685090490210"
                alt=""
                className="w-[100px]"
              />
              <div>
                <span className="text-[1em] font-medium">
                  [600W] Đèn UFO Năng Lượng Mặt Trời TP Solar TP-U600RGB Chiếu
                  Sáng 360 Độ
                </span>
                <div className="flex-center mt-[10px]">
                  <div className="text-[0.9em]">
                    200000₫
                    <span className="ml-1 text-[1.2em] font-bold text-[var(--mainColor)]">
                      x2
                    </span>
                  </div>
                  <div className="font-bold text-[1.1em] text-[var(--accentColor2)]">
                    400000₫
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex pt-[20px] border-b-[1px] border-b-[#ccc]">
              <label className="paying-input-animation">
                <input type="text" required spellcheck="false" />
                <span>Nhập mã giảm giá</span>
              </label>
              <div className="paying-btn-apply">Áp dụng</div>
            </div>

            <div className="flex-center mt-[15px]">
              <span className="text-[1em] text-[#1c1c1c]">Tạm tính</span>
              <span className="text-[1em] text-[#1c1c1c]">{sumOfPrice}</span>
            </div>
            <div className="flex-center my-[10px]">
              <span className="text-[1em] text-[#1c1c1c]">Phí vận chuyển</span>
              <span className="text-[1em] text-[#1c1c1c]">Liên hệ</span>
            </div>
            <div className="flex-center mt-[10px] pb-[20px] border-b-[1px] border-b-[#ccc">
              <span className="text-[1.1em] text-[#1c1c1c]">Tổng cộng</span>
              <span className="text-[1.3em] font-bold text-[var(--mainColor)]">
                {sumOfPrice}
              </span>
            </div>
            <div className="flex-center mt-[15px]">
              <Link
                to="/cart"
                className="flex items-center text-[var(--mainColor2)] hover:text-[var(--main)] paying-hover-svg-animation"
              >
                <BsChevronLeft />
                <span>Quay về giỏ hàng</span>
              </Link>
              <button className="paying-btn-apply uppercase">Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
