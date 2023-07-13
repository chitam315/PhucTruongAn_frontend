import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useAsync } from "../../hooks/useAsync";
import {cartService} from "../../service/cart.service"

export default function ItemCart({ item , idProduct }) {
  const {loading,execute: deleteProductCart} = useAsync(() => {
    return cartService.deleteCartById(idProduct)
  })
  const clickDelete = async () => {
    console.log(idProduct);
    try {
      const res = await deleteProductCart()
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex border-gray rounded-[10px] overflow-hidden p-[10px] mb-[15px] bg-[#fdfdfd]">
      <Link to="/detail">
        <img
          src="https://bizweb.dktcdn.net/thumb/small/100/463/111/products/3.jpg?v=1685091066897"
          className=""
          alt="undefined"
        />
      </Link>
      <div className="w-100 flex flex-col justify-center ml-[15px] ">
        <Link to="/detail" className="flex-center flex-block mb-[15px]">
          <p className="font-bold">{item.product.product_name}</p>
          <span className="font-bold text-right text-[var(--accentColor2)]">
            {Number(item.product.product_price)
              .toFixed(0)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            <span>₫</span>
          </span>
        </Link>
        <div className="flex-center">
          <div className="flex-center">
            {/* <button className="cart-btn-minus">-</button> */}
            <span className=" border-gray cart-text-quantity">{item.quantity}</span>
            {/* <button className="cart-btn-plus">+</button> */}
          </div>
          <button onClick={clickDelete} className="btn btn-outline-danger text-[0.8em]">Xoá</button>
        </div>
      </div>
    </div>
  );
}
