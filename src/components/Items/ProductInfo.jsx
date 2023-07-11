import { Link } from "react-router-dom";

function ProductInfo({ item }) {
  return (
    <Link to={`/detail/${item.product_id}`}>
      <p className="text-black text-[16px] font-bold h-[56px] name-product">
        {item.product_name}
      </p>
      <div className="text-[var(--accentColor2)] mb-[0.5em]">
        <span className="font-bold">
          {Number(item.product_price)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          ₫
        </span>
        {/* <del className="text-[1.1em] text-[var(--accentColor1)] ml-[5px]">
          {Number(item.product_price)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          ₫
        </del> */}
      </div>
    </Link>
  );
}

export default ProductInfo;
