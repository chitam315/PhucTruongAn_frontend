import { Col } from "react-bootstrap";
import "../../App.css";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CheckboxCompare from "./CheckboxCompare";
import ProductInfo from "./ProductInfo";
import ImageProduct from "./ImageProduct";

export default function ItemProductSale({ item }) {
  return (
    <div className="w-[100%] p-[10px]">
      <div className=" rounded-10 shadow-md bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[45%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <AiOutlineShoppingCart />
        </div>
        <div className="tag-discount">Giảm 9%</div>
        <ImageProduct item={item}/>

        <div className="tag-status-sold uppercase flex justify-center text-white select-none">
          <span className="z-[50] text-[0.8em]">Đã bán: 3996</span>
        </div>
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
