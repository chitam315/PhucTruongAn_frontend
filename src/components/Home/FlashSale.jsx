import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../App.css";
import ItemProductSale from "../Items/ItemProductSale";

export default function FlashSale() {
  const text1 = "miễn phí giao hàng tận nhà";
  const text2 = "giảm ngay 100.000đ khi mua từ 2 đèn trở lên";

  return (
    <>
      <div className="m_product mt-3 mt-lg-4 mb-3 mt-lg-4">
        <div className="container">
          <div className="bg-flash pb-[15px] rounded-[10px]">
            <div className="flex-center py-[10px] px-[15px]">
              <div className="flex items-center">
                <img
                  src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/flash.gif?1685679333702"
                  alt=""
                  style={{ width: "35px" }}
                />
                <p className="uppercase text-[1.6em] cl-orange ml-[10px] text-bold f-cl-orange ">
                  flash sale
                </p>
              </div>
              <div className="flex-center banner-flash relative w-auto">
                <p className="uppercase text-[1em] text-white">{text1}</p>
                <p className="uppercase text-[1em] text-white absolute top-[-10px] left-[-200px] w-[500px]">{text2}</p>
              </div>
              <div className="w-[200px]"></div>
            </div>
            <div className="row select-none">
              <div className="col-12">
                <Container>
                  <Row>
                    <ItemProductSale />
                    <ItemProductSale />
                    <ItemProductSale />
                    <ItemProductSale />
                    <ItemProductSale />
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
