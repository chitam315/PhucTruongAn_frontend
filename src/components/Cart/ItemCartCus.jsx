import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { Skeleton } from "antd";

export default function ItemCartCus({ product_name, product_id, quantity }) {

  const { loadingProduct, data: _product } = useFetch(() => {
    return productService.getProductImage(product_id);
  });

  return (
    <div className="flex border-gray rounded-[10px] overflow-hidden p-[10px] bg-[#fdfdfd]">
      <Link to={`/detail/${product_id}`}>
        {loadingProduct ? (
          <Skeleton.Image active={true} />
        ) : (
          <img
            src={_product?.data.metadata[0].image_base64}
            alt=""
            className=" h-[80px] w-[80px] p-0"
          />
        )}
      </Link>
      <div className="w-100 flex flex-col justify-center ml-[15px] ">
        <Link to={`/detail/${product_id}`} className="flex-center flex-block mb-[15px]">
          <p className="font-bold">{product_name}</p>
          {/* <span className="font-bold text-right text-[var(--accentColor2)]">
            {Number(item.product.product_price)
              .toFixed(0)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            <span>₫</span>
          </span> */}
        </Link>
        <div className="flex-center">
          <div className="flex-center">
            {/* <button className="cart-btn-minus">-</button> */}
            <span className=" border-gray cart-text-quantity">{quantity}</span>
            {/* <button className="cart-btn-plus">+</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
