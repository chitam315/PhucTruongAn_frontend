import { Row } from "react-bootstrap";
import poster1 from "../../assets/Poster/poster1.png";
import poster2 from "../../assets/Poster/poster2.png";
import ItemProduct from "../Items/ItemProduct";
import { Link } from "react-router-dom";
import ItemProduct6 from "../Items/ItemProduct6";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";

export default function Category() {
  // const [dataItem, setDataItem] = useState([]);
  // const [dataDDLT, setDataDDLT] = useState([]);
  // const [dataD_UFO, setDataD_UFO] = useState([]);
  // const [dataDPha, setDataDPha] = useState([]);
  // const [dataDBChai, setDataDBChai] = useState([]);
  // const [dataDVuon, setDataDVuon] = useState([]);
  var dataDDLT = [], dataD_UFO = [], dataDPha = [] , dataDBChai = [] , dataDVuon = []
  const { loading, data: listProduct } = useFetch(() => {
    return productService.getAllProducts();
  });

  // useEffect(() => {
  //   const fetch = async () => {
  //     if (!loading) {
  //       await setDataItem(listProduct.data.metadata);
  //     }
  //   };
  //   fetch();
  // }, []);
  var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = []

  if (!loading) {
    arr1 = listProduct.data.metadata.filter((item) => {
      return item.category_id === 1;
    });
    dataDDLT = arr1.slice(0, 8);

    arr2 = listProduct.data.metadata.filter((item) => {
      return item.category_id === 2;
    });
    dataD_UFO = arr2.slice(0, 8)

    arr3 = listProduct.data.metadata.filter((item) => {
      return item.category_id === 3;
    });
    dataDBChai = arr3.slice(0,12)

    arr4 = listProduct.data.metadata.filter((item) => {
      return item.category_id === 4;
    });
    dataDPha = arr4.slice(0,12)

    arr5 = listProduct.data.metadata.filter((item) => {
      return item.category_id === 5;
    });
    dataDVuon = arr5.slice(0,6)
  }




  // useEffect(() => {
  //   const fetchData = () => {
  //     setDataDDLT(arr1.slice(0, 8));
  //     setDataD_UFO(arr2.slice(0, 8));
  //     setDataDPha(arr4.slice(0, 12));
  //     setDataDBChai(arr3.slice(0, 12));
  //     setDataDVuon(arr5.slice(0, 6));
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="mt-[25px]">
        <div className="container-sm pt-[20px] mt-[25px]">
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
              <Link
                className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
                to="/see-more"
                title="Xem thêm"
              >
                Xem thêm
              </Link>
            </div>

            <div className="row items-center">
              <div className="col-xl-9 col-lg-8 col-12 order-lg-2">
                <Row>
                  {dataDDLT.map((item, index) => (
                    <ItemProduct item={item} index={index} key={index} />
                  ))}
                </Row>
              </div>
              <div className="col-xl-3 col-lg-4 col-12 order-lg-1">
                <div className="b_product p-2 pr-lg-0 d-flex flex-lg-column gap-2">
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
        <div className="mt-[25px]"></div>
        <div className="container-sm pt-[20px]">
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
              <Link
                className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
                to="/see-more"
                title="Xem thêm"
              >
                Xem thêm
              </Link>
            </div>

            <div className="row items-center ">
              <div className="col-xl-9 col-lg-8 col-12 order-lg-1">
                {/* <div classNamex flex-wrap p-[-5px] flex-row"> */}
                <Row>
                  {dataD_UFO.map((item, index) => (
                    <ItemProduct item={item} index={index} key={index} />
                  ))}
                </Row>
              </div>
              <div className="col-xl-3 col-lg-4 col-12 order-lg-2">
                <div className="b_product p-2 pr-lg-0 d-flex flex-lg-column gap-2">
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
        <div className="mt-[25px]"></div>
        <div className="container-sm pt-[20px]">
          <div className=" bg-white rounded-[15px] p-[1.5em]">
            <div className="flex-center">
              <h2 className="uppercase font-bold relative text-[1.5em]">
                <a
                  href="den-duong-lien-the-nang-luong-mat-troi"
                  title="Đèn đường liền thể"
                >
                  Đèn pha
                </a>
              </h2>
              <Link
                className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
                to="/see-more"
                title="Xem thêm"
              >
                Xem thêm
              </Link>
            </div>

            <div className="row items-center ">
              <div className="col-xl-12 col-lg-12 col-12 order-lg-1">
                <Row>
                  {dataDPha.map((item, index) => (
                    <ItemProduct6 item={item} index={index} key={index} />
                  ))}
                </Row>
              </div>
            </div>
            <img
              src={require("../../assets/Banner/banner-discount.png")}
              alt=""
            />
          </div>
        </div>
        <div className="mt-[25px]"></div>
        <div className="container-sm pt-[20px]">
          <div className=" bg-white rounded-[15px] p-[1.5em]">
            <div className="flex-center">
              <h2 className="uppercase font-bold relative text-[1.5em]">
                <a
                  href="den-duong-lien-the-nang-luong-mat-troi"
                  title="Đèn đường liền thể"
                >
                  Đèn đường bàn chải
                </a>
              </h2>
              <Link
                className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
                to="/see-more"
                title="Xem thêm"
              >
                Xem thêm
              </Link>
            </div>

            <div className="row items-center ">
              <div className="col-xl-12 col-lg-12 col-12 order-lg-1">
                {/* <div classNamex flex-wrap p-[-5px] flex-row"> */}
                <Row>
                  {dataDBChai.map((item, index) => (
                    <ItemProduct6 item={item} index={index} key={index} />
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[25px]"></div>
        <div className="container-sm pt-[20px]">
          <div className=" bg-white rounded-[15px] p-[1.5em]">
            <div className="flex-center">
              <h2 className="uppercase font-bold relative text-[1.5em]">
                <a
                  href="den-duong-lien-the-nang-luong-mat-troi"
                  title="Đèn đường liền thể"
                >
                  Đèn vườn
                </a>
              </h2>
              <Link
                className="borders-see-more block bg-[#ebebeb] rounded-[10px] text-[0.8em] font-bold px-[10px] py-[10px] hover:border-[#007bff] hover:bg-white"
                to="/see-more"
                title="Xem thêm"
              >
                Xem thêm
              </Link>
            </div>

            <div className="row items-center ">
              <div className="col-xl-12 col-lg-12 col-12 order-lg-1">
                {/* <div classNamex flex-wrap p-[-5px] flex-row"> */}
                <Row>
                  {dataDVuon.map((item, index) => (
                    <ItemProduct6 item={item} index={index} key={index} />
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
