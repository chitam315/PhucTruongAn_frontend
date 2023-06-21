import { Row } from "react-bootstrap";
import CardMain from "../Card/CardMain";
import "./Cart.css";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <CardMain>
      <div className="card-shadow p-[15px]">
        <Row>
          <div className="col-9 col-tb-12">
            <div className="flex-center mb-[15px]">
              <p className="uppercase text-[1.1em] font-bold">GIỎ HÀNG</p>
              <div className="btn btn-outline-danger py-[5px]">Xóa tất cả</div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-9 col-tb-12">
            <ItemCart />
            <ItemCart />
          </div>
          <div className="col-3 col-tb-12">
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
              <div
                className="select-none hover-border-main font-bold text-[1.2em] rounded-[30px] bg-[var(--mainColor)] text-white w-fit px-[10px] py-[5px] cursor-pointer mt-[10px]"
                id="btnCopy"
                //   onClick={changeTextBtnCopy}
              >
                {/* {textCopy} */}Sao chép
              </div>
            </div>
            <div className="flex-center font-bold text-[1.1em] my-[10px]">
              <p className="">Tổng tiền</p>
              <p className="text-[1.3em] text-[var(--accentColor2)]">
                35.300.000 ₫
              </p>
            </div>
            <Link to="/paying" className="btn-blue">
              Thanh toán
            </Link>
          </div>
        </Row>
      </div>
    </CardMain>
  );
}
