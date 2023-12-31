import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../components/AuthContext";
import { orderService } from "../service/order.service";
import { useNavigate } from "react-router";
import { message } from "antd";
import Header from "../components/Home/Header";
import HeaderResponsive from "../components/Home/HeaderResponsive";
import Footer from "../components/Footer/Footer";
import ItemCartCus from "../components/Cart/ItemCartCus";
import NavigationBottom from "../components/NavigationBottom/NavigationBottom";

export const ListOrderPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    message.warning("Bạn phải đăng nhập");
    navigate("/");
  }
  const { loading, data: listOrder } = useFetch(() => {
    return orderService.getOrderByUser({
      user_id: user.id,
    });
  });
  if (!loading) {
    console.log(listOrder.data.metadata[0]);
  }
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <HeaderResponsive />
      <Header />
      <div className="w-full pt-4 flex justify-center">
        <div className="w-full container-sm flex flex-col list-order items-center">
          {listOrder.data.metadata[0].map((order) => (
            // console.log(order)
            <div className="order-item flex flex-wrap w-4/5 border-blue-700 border border-4">
              <div className="col-9 col-tbs-12 flex flex-col gap-2">
                {order.products.map((product) => (
                  <ItemCartCus
                    product_id={product.product_id}
                    product_name={product.product_name}
                    quantity={product.quantity}
                  />
                ))}
              </div>
              <div className="col-3 col-tbs-12 flex items-center justify-center">
                {order.order_status == "pending" && (
                  <button
                    onClick={() => navigate(`/payment/${order.order_id}`)}
                    className="p-2 bg-blue-400 hover:bg-blue-600 text-white"
                  >
                    Thanh toán
                  </button>
                )}
                {order.order_status == "done" && (
                  <button className="p-2 border-green-600 border-2 pe-none">
                    Đã được đặt
                  </button>
                )}
                {order.order_status == "shipped" && (
                  <button className="p-2 bg-green-400 text-white pe-none">
                    Đã được giao
                  </button>
                )}
                {order.order_status == "fail" && (
                  <button className="p-2 bg-red-400 text-white pe-none">
                    Đã huỷ
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <NavigationBottom />
    </>
  );
};
