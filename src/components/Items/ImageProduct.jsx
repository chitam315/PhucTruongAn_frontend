import { Link } from "react-router-dom";

function ImageProduct() {
  return (
    <Link
    to={`/detail/${item.product_id}`}
      className="overflow-hidden flex items-center justify-center h-[200px]"
    >
      <img
        src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/d200.png?v=1686814625957"
        alt=""
        className="img-product h-full max-w-100"
      />
    </Link>
  );
}

export default ImageProduct;
