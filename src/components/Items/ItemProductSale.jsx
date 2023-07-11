import "../../App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductInfo from "./ProductInfo";
import ImageProduct from "./ImageProduct";

export default function ItemProductSale({ item }) {
  // function RandomSold(min, max) {
  //   return Math.floor(Math.random() * (max - min));
   
  // }
  // var numberRandom = RandomSold(1000, 6000);
  // setTimeout = () => {

  // }
  return (
    <div className="w-[100%] p-[10px]">
      <div className=" rounded-10 shadow-md bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <div className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[45%] rounded-[50%] bg-[var(--mainColor)] p-[8px]">
          <AiOutlineShoppingCart />
        </div>
        {item.product_discount !== 0 ? (
          <div className="tag-discount">Giảm {item.product_discount}%</div>
        ) : (
          <></>
        )}

        <ImageProduct item={item} />

        <div className="tag-status-sold uppercase flex justify-center text-white select-none">
          <span className="z-[50] text-[0.8em]">Đã bán: {}</span>
        </div>
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
