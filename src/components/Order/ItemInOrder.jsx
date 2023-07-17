import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";

export const ItemInOrder = ({ product }) => {
  const { data: _product } = useFetch(() => {
    return productService.getProductImage(product.product_id);
  });

  return (
    <div className="flex py-[10px] border-b-[1px] border-b-[#ccc]">
      {_product &&
      _product.data.metadata[0] &&
      _product.data.metadata[0].image_base64 ? (
        <img
          src={_product.data.metadata[0].image_base64}
          alt=""
          className=" h-full w-[80px] p-2 "
        />
      ) : (
        <></>
      )}
      <div>
        <span className="text-[1em] font-medium">
          {product.product.product_name}
        </span>
        <div className="flex-center mt-[10px]">
          <div className="text-[0.9em]">
          {Number(product.product.product_price)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          ₫
         
            <span className="ml-1 text-[1.2em] font-bold text-[var(--mainColor)]">
              x{product.quantity}
            </span>
          </div>
          <div className="font-bold text-[1.1em] text-[var(--accentColor2)]">
          {Number(product.product.product_price * product.quantity)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          ₫

          </div>
        </div>
      </div>
    </div>
  );
};
