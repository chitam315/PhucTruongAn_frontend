import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAsync } from "../../hooks/useAsync";
import { useAuth } from "../AuthContext/index";
import { productService } from "../../service/product.service";
import { message, Spin } from "antd";
import { useNavigate } from "react-router";

function BtnAddCart({ item }) {
  const { user } = useAuth();
  const { execute: addToCart , loading } = useAsync(
    productService.createAddCart
  );
  const navigate = useNavigate()
  const addCart = async () => {
    // navigate(`/detail/${item.product_id}`)
    try {
      const field = {
        product_id: item.product_id,
        quantity: 1,
        user_id: user.id,
      };
      await addToCart(field);
      message.success("Thêm giỏ hàng thành công");
    } catch (error) {
      console.log(error);
      message.error("Bạn phải đăng nhập");
    }
  };
  if (loading) {
    return <Spin/>
  }
  return (
    <div
      onClick={addCart}
      className="cursor-pointer cart-appear z-[10] text-[1.8em] text-white absolute right-[-15%] top-[53%] rounded-[50%] bg-[var(--mainColor)] p-[8px]"
    >
      <AiOutlineShoppingCart />
    </div>
  );
}

export default BtnAddCart;
