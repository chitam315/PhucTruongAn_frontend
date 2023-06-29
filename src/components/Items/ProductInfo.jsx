import { Link } from "react-router-dom";

function ProductInfo({ item }) {
  return (
    <Link to="/detail">
      <p className="text-black text-[16px] font-bold h-[56px] name-product">
        {item.name}
      </p>
      <div className="text-[var(--accentColor2)] mb-[0.5em]">
        <span className="font-bold">{item.price}</span>
        <del className="text-[1.1em] text-[var(--accentColor1)] ml-[5px]">
          {item.price}
        </del>
      </div>
    </Link>
  );
}

export default ProductInfo;
