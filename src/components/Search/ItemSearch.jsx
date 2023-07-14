import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";

function ItemSearch({ item, loading }) {
  const { loading2, data: _image } = useFetch(() => {
    return productService.getProductImage(item.product_id);
  });

  return (
    <>
      {loading && loading2 ? (
        <h1>Loading...</h1>
      ) : (
        <Link
          to={`/detail/${item.product_id}`}
          className="flex items-center hover:bg-[#ebebeb] rounded-[5px]"
        >
          {_image &&
          _image.data.metadata[0] &&
          _image.data.metadata[0].image_base64 ? (
            <img
              src={_image.data.metadata[0].image_base64}
              alt=""
              className="w-[70px] h-[70px]"
            />
          ) : (
            <></>
          )}
          <div className="w-[calc(100%-70px)]">
            <span className="block w-full font-bold line-2 text-black text-[0.8em]">
              {item.product_name}
            </span>
            <span className="block w-full font-bold text-[var(--menuHover)] text-[0.8em]">
              {Number(item.product_price)
                .toFixed(0)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <span>₫</span>
            </span>
          </div>
        </Link>
      )}
    </>
  );
}

export default ItemSearch;
