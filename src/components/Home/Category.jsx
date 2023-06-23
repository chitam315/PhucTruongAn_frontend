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
            <h2 className="uppercase font-bold relative text-[1.5em]">
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
              {arrayProduct.map((item, index)=>(
                  <ItemProduct item={item} index={index}/>
                ))}
              </Row>
            </div>
            <div className="col-xl-3 col-lg-4 col-12 order-lg-1">
              <div className="b_product p-2 pr-lg-0 d-flex flex-lg-column">
                <a
                  href="/"
                  title=""
                  className="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    className="img-cover loaded rounded-[10px]"
                    src={poster1}
                    data-src={poster1}
                    alt="Mew Mobile"
                  />
                </a>
                <a
                  href="/"
                  title=""
                  className="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    className="img-cover loaded rounded-[10px]"
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
            <h2 className="uppercase font-bold relative text-[1.5em]">
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
              {/* <div classNamex flex-wrap p-[-5px] flex-row"> */}
              <Row>
                {arrayProduct.map((item, index)=>(
                  <ItemProduct item={item} index={index}/>
                ))}
                
                
              </Row>
            </div>
            <div className="col-xl-3 col-lg-4 col-12 order-lg-2">
              <div className="b_product p-2 pr-lg-0 d-flex flex-lg-column">
                <a
                  href="/"
                  title=""
                  className="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    className="img-cover loaded rounded-[10px]"
                    src={poster1}
                    data-src={poster1}
                    alt="Mew Mobile"
                  />
                </a>
                <a
                  href="/"
                  title=""
                  className="rounded-[10px] overflow-hidden w-100 w-mb-50"
                >
                  <img
                    className="img-cover loaded rounded-[10px]"
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

const arrayProduct = [
  {
    name: "[450W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar",
    price: 1390000,
    model: "TP Solar",
    category: "Đèn đường",
    date: "12/04/2023",
    watt: "450W",
  },
  {
    name: "[460W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar",
    price: 3690000,
    model: "TP Solar",
    category: "Đèn đường",
    date: "19/03/2023",
    watt: "460W",
  },
  {
    name: "[470W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar",
    price: 2690000,
    model: "TP Solar",
    category: "Đèn đường",
    date: "11/02/2023",
    watt: "470W",
  },
  {
    name: "[480W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar",
    price: 1990000,
    model: "TP Solar",
    category: "Đèn pha",
    date: "02/05/2023",
    watt: "480W",
  },
  {
    name: "[490W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar",
    price: 1690000,
    model: "TP Solar",
    category: "Đèn biển",
    date: "12/03/2023",
    watt: "490W",
  },
];

