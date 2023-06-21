import { Link } from "react-router-dom";

export default function ItemCart() {
  return (
    <div className="flex border-gray rounded-[10px] overflow-hidden p-[10px] mb-[15px] bg-[#fdfdfd]">
      <Link to="/detail">
        <img
          src="https://bizweb.dktcdn.net/thumb/small/100/463/111/products/3.jpg?v=1685091066897"
          className=""
          alt="undefined"
        />
      </Link>
      <div className="w-100 flex flex-col justify-center ml-[15px] ">
        <Link to="/detail" className="flex-center mb-[15px]">
          <p className="font-bold">
            [1000W] Đèn UFO Năng Lượng Mặt Trời TP Solar TP-U1000 Chiếu Sáng 360 Độ
          </p>
          <span className="font-bold text-right text-[var(--accentColor2)]">
            2.150.000₫
          </span>
        </Link>
        <div className="flex-center">
          <div className="flex-center">
            <button className="cart-btn-minus" onClick={console.log("hello")}>
              -
            </button>
            <input
              className="cart-text-quantity"
              readonly=""
              min="1"
              name="number"
              value="1"
              size="2"
              type="text"
            />
            <button className="cart-btn-plus">+</button>
          </div>
          <button className="btn btn-outline-danger text-[0.8em]">Xoá</button>
        </div>
      </div>
    </div>
  );
}
