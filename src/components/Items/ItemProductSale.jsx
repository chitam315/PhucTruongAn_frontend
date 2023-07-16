import "../../App.css";
import ProductInfo from "./ProductInfo";
import ImageProduct from "./ImageProduct";
import BtnAddCart from "./BtnAddCart";

export default function ItemProductSale({ item }) {
  return (
    <div className="w-[100%] p-[10px]">
      <div className=" rounded-10 shadow-md bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <BtnAddCart item={item} />
        {item.product_discount !== 0 ? (
          <div className="tag-discount">
            Giảm{" "}
            {Math.floor(
              ((item.product_price - item.product_discount) * 100) /
                item.product_price
            )}
            %
          </div>
        ) : (
          <></>
        )}

        <ImageProduct item={item} />

        <div className="tag-status-sold uppercase flex justify-center text-white select-none">
          <span className="z-[50] text-[0.8em]">Đã bán: 2300</span>
        </div>
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
