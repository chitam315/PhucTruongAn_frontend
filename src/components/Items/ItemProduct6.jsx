import { Col } from "react-bootstrap";
import "../../App.css";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CheckboxCompare from "./CheckboxCompare";
import ProductInfo from "./ProductInfo";

export default function ItemProduct6({ item, index }) {
  return (
    <div className="p-[5px] col-6w col-tbm-4 col-tbs-6" key={index}>
      <div className="shadow-10 rounded-10 bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[50%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <AiOutlineShoppingCart />
        </div>
        <div className="tag-discount">Giảm 9%</div>
        <Link
          to="/detail"
          className="overflow-hidden flex items-center justify-center h-[200px]"
        >
          <img
            src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/d200.png?v=1686814625957"
            alt=""
            className="img-product h-full max-w-100"
          />
        </Link>
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
