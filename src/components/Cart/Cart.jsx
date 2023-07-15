import { Row } from "react-bootstrap";
import CardMain from "../Card/CardMain";
import "./Cart.css";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import { BsGiftFill } from "react-icons/bs";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useAuth } from "../AuthContext/index";

export default function Cart() {
  const { user } = useAuth();
  const { loadingCart, data: listCart } = useFetch(() => {
    return productService.getCartById(user.id);
  });
  var sumOfPrice = 0
  if(!loadingCart){
    listCart?.data?.metadata.map((e) => sumOfPrice+=e.product.product_price*e.quantity)
  }
  //Handle button copy
  const [textCopy, setTextCopy] = useState("Sao chép");
  const changeTextBtnCopy = () => {
    navigator.clipboard.writeText("FREESHIP");
    setTextCopy("Đã lưu");
    setTimeout(() => {
      setTextCopy("Sao chép");
    }, 1500);
  };

  if (loadingCart) {
    return <h1>Loading ...</h1>
  }

  return (
    <CardMain>
      <div className="mb-[100px]">
        <Row>
          <div className="col-9 col-tb-12">
            <div className="flex-center mb-[15px]">
              <p className="uppercase text-[1.1em] font-bold">GIỎ HÀNG</p>
              {/* <div className="btn btn-outline-danger py-[5px]">Xóa tất cả</div> */}
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-9 col-tb-12">
            {listCart?.data.metadata.map((item, index) => (
              <ItemCart idProduct={item.id} item={item} key={index}/>
            ))}
          </div>
          <div className="col-3 col-tb-12">
          
            <div className="flex-center font-bold text-[1.1em] my-[15px] border-1 border-[var(--mainColor)] rounded-[10px] p-[5px]">
              <p className="">Tổng tiền</p>
              <p className="text-[1.3em] text-[var(--accentColor2)] font-bold">
                {sumOfPrice} ₫
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
