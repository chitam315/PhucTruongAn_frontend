import { Col } from "react-bootstrap";
import "../../App.css";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CheckboxCompare from "./CheckboxCompare";
import ProductInfo from "./ProductInfo";
import ImageProduct from "./ImageProduct";

export default function ItemProduct({ item, index, wth }) {
  console.log(wth);
  return (
    <div className="p-[5px] col-4w col-tbm-4 col-tbs-6" key={index}>
      <div className="shadow-10 rounded-10 bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
<<<<<<< HEAD
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[53%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <AiOutlineShoppingCart />
        </div>
        <div className="tag-discount">Giảm 9%</div>
        <ImageProduct/>
        <div>
          <ProductInfo item={item}/>
          
=======
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[50%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <div className="w-25 p-[5px]" key={index}>
            <div className="rounded-10 shadow-10 bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
              <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[53%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
                <AiOutlineShoppingCart />
              </div>
              <div className="tag-discount">Giảm 9%</div>
              <Link to="/detail" className="overflow-hidden block">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/2.jpg?v=1685091145000"
                  alt=""
                  className="img-product w-100 h-100"
                />
              </Link>
              <div>
                <Link to="/detail">
                  <p className="text-black text-[16px] font-bold h-[56px] name-product">
                    [600W] Đèn UFO Năng Lượng Mặt Trời TP Solar TP-U600RGB Chiếu
                    Sáng 360 Độ
                  </p>

                  <p className="text-black text-[16px] font-medium h-[52px] name-product">
                    {item.name}
                  </p>
                  <div className="text-[var(--accentColor2)] mb-[0.5em]">
                    <span className="font-bold">{item.price}</span>
                    <del className="text-[1.1em] text-[var(--accentColor1)] ml-[5px]">
                      {item.price}
                    </del>
                  </div>
                </Link>
                <label className="flex items-center checkbox-compare relative cursor-pointer">
                  <input type="checkbox" name="" id="" />
                  <AiFillCheckCircle className="absolute top-[16%] left-0 w-[17px] h-[17px] text-[#3246ff] hidden" />
                  <p className="p-0">So sánh</p>
                </label>
              </div>
            </div>
          </div>
>>>>>>> 3dd8a64268824c9ae2c6c66258d35c50eea773d6
        </div>
      </div>
    </div>
  );
}
