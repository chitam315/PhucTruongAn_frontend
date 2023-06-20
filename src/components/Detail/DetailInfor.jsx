import { Row } from "react-bootstrap";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function DetailInfor() {
  return (
    <Row className="mt-[30px]">
      <div className="col-md-9">
        <div className="card-shadow w-100 rounded-[10px] p-[15px] relative pb-[100px]">
          <div className="absolute w-100 bottom-0 flex items-center justify-center p-[20px]">
            <div className="btn-shadow relative ">
              <span className="pr-[30px]">Xem thêm</span>
              <MdOutlineKeyboardDoubleArrowDown />
            </div>
          </div>

          <p className="font-bold text-[1.1em]">
            Thông tin chi tiết
            <br />
            <br />
          </p>
          <p className="font-bold text-[1.3em] text-[var(--mainColor)]">
            Đặc điểm nổi bật của đèn đường liền thể năng lượng mặt trời 600w của
            TP Solar Mẫu Mới Nhất 3 Mặt Đèn
            <br />
            <br />
          </p>
          <p className="text-[1em]">
            Đèn đường liền thể năng lượng mặt trời 600w là một sản phẩm thông
            minh. Đồng thời sở hữu những tính năng vô cùng vượt trội tạo nên sức
            hút rất lớn trên thị trường hiện nay.
          </p>
          <p className="flex justify-center">
            <img
              src="https://bizweb.dktcdn.net/thumb/grande/100/463/111/files/quang-teo-20230426035518-6dxjr-optimized.png?v=1683256082011"
              alt=""
              style={{ "vertical-align": "middle" }}
            />
          </p>
          <p className="text-[1em]">
            Đèn TP Solar có chính sách bảo hành điện tử phân biệt hàng chính
            hãng và giúp khách hàng tra cứu thông tin bảo hành bất kì thời điểm
            nào.
          </p>
          <p className="flex justify-center">
            <img
              src="https://bizweb.dktcdn.net/thumb/grande/100/463/111/files/903de247b7d76a8933c6-20230324091501-8e8zx.jpg?v=1683256533480"
              alt=""
            />
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-shadow w-100 rounded-[10px] p-[8px]">
          <p className="font-bold text-[1.1em] p-[10px]">Thông số kĩ thuật</p>
          <div className="rounded-[10px] overflow-hidden border-gray">
            <table
              border="1"
              cellpadding="1"
              cellspacing="1"
              className="text-[0.8em] width-100"
              class="table table-striped mb-0"
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
          <div className="btn-shadow mt-[15px]">Xem chi tiết cấu hình</div>
        </div>
      </div>
    </Row>
  );
}
