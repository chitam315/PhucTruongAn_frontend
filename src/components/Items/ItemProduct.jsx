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
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[53%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <AiOutlineShoppingCart />
        </div>
        <div className="tag-discount">Giảm 9%</div>
        <ImageProduct />
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
