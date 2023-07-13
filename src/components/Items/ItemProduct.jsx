import "../../App.css";
import BtnAddCart from "./BtnAddCart";
import ProductInfo from "./ProductInfo";
import ImageProduct from "./ImageProduct";

export default function ItemProduct({ item, index }) {
  return (
    <div className="p-[5px] col-4w col-tbm-4 col-tbs-6" key={index}>
      <div className="shadow-10 rounded-10 bg-white rounded-[10px] h-100 relative p-[8px] block card-product">
        <BtnAddCart item={item} />
        {item.product_discount !== 0 ? (
          <div className="tag-discount">Giảm {item.product_discount}%</div>
        ) : (
          <></>
        )}

        <ImageProduct item={item} />
        <ProductInfo item={item} />
      </div>
    </div>
  );
}
