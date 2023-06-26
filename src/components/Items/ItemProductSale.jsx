import { Col } from "react-bootstrap";
import "../../App.css";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ItemProductSale() {
  return (
    <div className="w-[100%] p-[10px]">
      <div className=" rounded-10 shadow-md bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[45%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <AiOutlineShoppingCart />
        </div>
        <div className="tag-discount">Giảm 9%</div>
        <Link to="/detail" className="overflow-hidden block">
          <img
            src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/2.jpg?v=1685091145000"
            alt=""
            className="img-product"
          />
        </Link>

        <Link to="/detail">
          <div className="tag-status-sold uppercase flex justify-center text-white select-none">
            <span className="z-[100] text-[0.8em]">Đã bán: 3996</span>
            <div className="col-5w col-tb-4 col-tbs-6 col-sm-6 p-minus-10">
              <div className="p-[10px]">
                <div className="rounded-10 shadow-md bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
                  <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[47%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
                    <AiOutlineShoppingCart />
                  </div>
                  <p className="text-black text-[16px] font-bold  h-[56px] name-product">
                    [600W] Đèn UFO Năng Lượng Mặt Trời TP Solar TP-U600RGB Chiếu
                    Sáng 360 Độ
                  </p>
                  <div className="text-[var(--accentColor2)] mb-[0.5em]">
                    <span className="font-bold">1.950.000₫</span>
                    <del className="text-[1.1em] text-[var(--accentColor1)] ml-[5px]">
                      2.150.000₫
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <label className="flex items-center checkbox-compare relative cursor-pointer w-fit">
          <input type="checkbox" className="cursor-pointer" />
          <AiFillCheckCircle className="absolute top-[16%] w-[17px] h-[17px] text-[#3246ff] hidden" />
          <p className="p-0">So sánh</p>
        </label>
        <label className="flex items-center checkbox-compare relative cursor-pointer w-fit">
          <input
            type="checkbox"
            name="check"
            id=""
            className="cursor-pointer"
          />
          <AiFillCheckCircle className="absolute w-[17px] h-[17px] text-[#3246ff] hidden" />
          <p>So sánh</p>
        </label>
      </div>
    </div>
  );
}
