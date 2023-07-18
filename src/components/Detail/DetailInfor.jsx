import { Row } from "react-bootstrap";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useState } from "react";

export default function DetailInfor({ Infor, Image }) {
  const [moreDetail, setMoreDetail] = useState(0);

  const showDetail = () => {
    setMoreDetail(1);
  };

  const hideDetail = () => {
    setMoreDetail(0);
  };

  return (
    <Row className="mt-[30px]">
      <div className={`col-md-9 col-tb-12 ${moreDetail === 0 ? "h-fit" : ""}`}>
        <div
          className={`card-shadow w-100 rounded-[10px] pb-[100px] p-[15px] relative overflow-hidden ${moreDetail === 0 ? "h-[500px]" : "h-fit"
            }`}
        >
          <div
            className={`absolute w-100 bottom-0 p-[20px] ${moreDetail === 0 ? "card-btn-seemore" : "h-[200px]"
              }`}
          >
            {moreDetail === 0 ? (
              <div
                className="btn-shadow relative h-fit w-fit bg-white btn-center"
                onClick={showDetail}
              >
                <span className="pr-[30px]">Xem thêm</span>
                <MdOutlineKeyboardDoubleArrowDown />
              </div>
            ) : (
              <div
                className="btn-shadow relative h-fit w-fit bg-white btn-center"
                onClick={hideDetail}
              >
                <span className="pr-[30px]">Thu gọn</span>
                <MdOutlineKeyboardDoubleArrowUp />
              </div>
            )}
          </div>

          <p className="font-bold text-[1.1em]">
            Thông tin chi tiết
            <br />
            <br />
          </p>
          <p className="font-bold text-[1.3em] text-[var(--mainColor)]">
            Đặc điểm nổi bật của {Infor?.product_name} của
            Phúc Trường An Mẫu Mới Nhất
            <br />
            <br />
          </p>
          <p className="text-[1em]">
            {Infor?.product_name} là một sản phẩm thông
            minh. Đồng thời sở hữu những tính năng vô cùng vượt trội tạo nên sức
            hút rất lớn trên thị trường hiện nay.
          </p>
          <p className="flex justify-center">
            <img
              src={ Image && Image[0]?.image_base64}
              alt=""
            />
          </p>
          <p className="text-[1em]">
            {Infor?.product_name} có chính sách bảo hành điện tử phân biệt hàng chính
            hãng và giúp khách hàng tra cứu thông tin bảo hành bất kì thời điểm
            nào.
          </p>
          {
            Image?.length > 1 ? (
              Image.map((ele , index) => {
                if (index == 0) {
                  return <></>
                }
                return (
                  <p className="flex justify-center">
                    <img
                      src={ele.image_base64}
                      alt=""
                    />
                  </p>
                )
              })
            ) : (
              <></>
            )
          }
          {/* <p className="flex justify-center">
            <img
              src={Image[1].image_base64}
              alt=""
            />
          </p> */}
        </div>
        {/* <div className="card-shadow w-100 rounded-[10px] p-[15px] relative">
          <p className="font-bold text-[1.1em]">Sản phẩm liên quan</p>
          <div className="p-15px">
            <Row className=" m-0">
              <ItemProductRelative />
              <ItemProductRelative />
              <ItemProductRelative />
              <ItemProductRelative />
            </Row>
          </div>
        </div> */}
      </div>
      {/* <div className="col-md-3 col-tb-12 h-fit">
        <div className="card-shadow w-100 rounded-[10px] p-[8px]">
          <p className="font-bold text-[1.1em] p-[10px]">Thông số kĩ thuật</p>
          <div className="rounded-[10px] overflow-hidden border-gray">
            <table
              border="1"
              className="text-[0.8em] width-100 table table-striped mb-0"
            >
              <tbody>
                <tr>
                  <td>Mã sản phẩm:</td>
                  <td>TP - D450N</td>
                </tr>
                <tr>
                  <td>Thương hiệu:</td>
                  <td>TP Solar</td>
                </tr>
                <tr>
                  <td>Công suất:</td>
                  <td>450W</td>
                </tr>
                <tr>
                  <td>Kích thước đèn:</td>
                  <td>600*345mm</td>
                </tr>
                <tr>
                  <td>Chức năng đèn:</td>
                  <td>Kiểm soát ánh sáng + Cảm ứng</td>
                </tr>
                <tr>
                  <td>Tấm pin silicon poly:</td>
                  <td>6V/28W</td>
                </tr>
                <tr>
                  <td>Dung lượng:</td>
                  <td>30000 mAh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ModalSpecification />
        </div>
      </div> */}
    </Row>
  );
}
