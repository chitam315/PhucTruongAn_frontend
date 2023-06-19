import { Row } from "react-bootstrap";

export default function DetailInfor() {
  return (
    <Row className="mt-[30px]">
      <div className="col-md-9">
        <div className="card-shadow w-100 rounded-[10px] p-[15px]">
            <p className="font-bold text-[1.1em]">Thông tin chi tiết<br/><br/></p>
            <p className="font-bold text-[1.3em] text-[var(--mainColor)]">Đặc điểm nổi bật của đèn đường liền thể năng lượng mặt trời 600w của TP Solar Mẫu Mới Nhất 3 Mặt Đèn<br/><br/></p>
            <p className="text-[1em]">Đèn đường liền thể năng lượng mặt trời 600w là một sản phẩm thông minh. Đồng thời sở hữu những tính năng vô cùng vượt trội tạo nên sức hút rất lớn trên thị trường hiện nay.</p>
            <p className="flex justify-center">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/463/111/files/quang-teo-20230426035518-6dxjr-optimized.png?v=1683256082011" alt="" style={{"vertical-align": "middle"}}/>
            </p>
            <p className="text-[1em]">Đèn TP Solar có chính sách bảo hành điện tử phân biệt hàng chính hãng và giúp khách hàng tra cứu thông tin bảo hành bất kì thời điểm nào.</p>
            <p  className="flex justify-center">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/463/111/files/903de247b7d76a8933c6-20230324091501-8e8zx.jpg?v=1683256533480" alt="" />
            </p>
        </div>
      </div>
    </Row>
  );
}
