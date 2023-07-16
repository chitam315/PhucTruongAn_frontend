import "../../App.css";
import BtnAddCart from "./BtnAddCart";
import ProductInfo from "./ProductInfo";
import ImageProduct from "./ImageProduct";

export default function ItemProduct6({ item, index }) {
  return (
    <div className="p-[5px] col-6w col-tbm-4 col-tbs-6" key={index}>
      <div className="shadow-10 rounded-10 bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <BtnAddCart item={item} />
        {item.product_discount !== 0 ? (
          <div className="tag-discount">
            Giảm
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
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
