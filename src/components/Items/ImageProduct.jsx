import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";

function ImageProduct({ item }) {
  const { loading, data: _product } = useFetch(() => {
    return productService.getProductImage(item.product_id);
  });

  return (
    <Link
      to={`/detail/${item.product_id}`}
      className="overflow-hidden flex items-center justify-center h-[180px]"
    >
      {_product && _product.data.metadata[0] ? (
        <img
          src={_product.data.metadata[0].image_base64}
          alt=""
          className="img-product h-full max-w-100 p-0"
        />
      ) : (
        <></>
      )}
    </Link>
  );
}

export default ImageProduct;
