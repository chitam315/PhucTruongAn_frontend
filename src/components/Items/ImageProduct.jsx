import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useEffect, useState } from "react";

function ImageProduct({ item }) {
  var i = [];
  const [image, setImage] = useState([]);
  const { loading, data: _product } = useFetch(() => {
    return productService.getProductImage(item.product_id);
  });

  // useEffect(() => {
  //   const fetch = async () => {
  //     if (!loading) {
  //       if (_product.length > 0) {
  //         setImage(_product.data.metadata);
  //       }
  //     }
  //   };
  //   fetch();
  // });
  // useEffect(() => {
  //   if (_product && _product.length > 0) {
  //     var i = image[0].image_base64.split(" ");
  //     console.log(i[0]);
  //   }
  // });

  return (
    <Link
      to={`/detail/${item.product_id}`}
      className="overflow-hidden flex items-center justify-center h-[180px]"
    >
      {/* {_product.length() > 0 ? (
        <img
          src={image[0].image_base64[1]}
          alt=""
          className="img-product h-full max-w-100 p-0"
        />
      ) : (
        <></>
      )} */}
    </Link>
  );
}

export default ImageProduct;
