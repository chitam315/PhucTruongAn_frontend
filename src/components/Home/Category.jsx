import { Row, Col } from "react-bootstrap";
import poster1 from "../../assets/Poster/poster1.png";
import poster2 from "../../assets/Poster/poster2.png";
import ItemProduct from "../Items/ItemProduct";

export default function Category() {
  return (
    <div>
      <div className="container pt-[20px]">
        <div className=" bg-white rounded-[15px] p-[1.5em]">
          <div className="flex-center">
            <h2 class="uppercase font-bold relative text-[1.5em]">
              <a
                href="den-duong-lien-the-nang-luong-mat-troi"
                title="Đèn đường liền thể"
              >
                Đèn đường liền thể
              </a>
            </h2>
            <a
              className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
              href="/"
              title="Xem thêm"
            >
              Xem thêm
            </a>
          </div>

          <div className="row items-center">
            <div className="col-xl-9 col-lg-8 col-12 order-lg-2">
              {/* <div className="flex flex-wrap p-[-5px] flex-row"> */}
              <Row>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
              </Row>
            </div>
            <div className="col-xl-3 col-lg-4 col-12 order-lg-1">
              <div class="b_product p-2 pr-lg-0 d-flex flex-lg-column">
                <a
                  href="/"
                  title=""
                  class="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    class="img-cover loaded rounded-[10px]"
                    src={poster1}
                    data-src={poster1}
                    alt="Mew Mobile"
                  />
                </a>
                <a
                  href="/"
                  title=""
                  class="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    class="img-cover loaded rounded-[10px]"
                    src={poster2}
                    data-src={poster2}
                    alt="Mew Mobile"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-[20px]">
        <div className=" bg-white rounded-[15px] p-[1.5em]">
          <div className="flex-center">
            <h2 class="uppercase font-bold relative text-[1.5em]">
              <a
                href="den-duong-lien-the-nang-luong-mat-troi"
                title="Đèn đường liền thể"
              >
                Đèn ufo sáng 360 độ
              </a>
            </h2>
            <a
              className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
              href="/"
              title="Xem thêm"
            >
              Xem thêm
            </a>
          </div>

          <div className="row items-center">
            <div className="col-xl-9 col-lg-8 col-12 order-lg-1">
              {/* <div className="flex flex-wrap p-[-5px] flex-row"> */}
              <Row>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
              </Row>
            </div>
            <div className="col-xl-3 col-lg-4 col-12 order-lg-2">
              <div class="b_product p-2 pr-lg-0 d-flex flex-lg-column">
                <a
                  href="/"
                  title=""
                  class="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    class="img-cover loaded rounded-[10px]"
                    src={poster1}
                    data-src={poster1}
                    alt="Mew Mobile"
                  />
                </a>
                <a
                  href="/"
                  title=""
                  class="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    class="img-cover loaded rounded-[10px]"
                    src={poster2}
                    data-src={poster2}
                    alt="Mew Mobile"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
