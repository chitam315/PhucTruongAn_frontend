import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import shopeeImg from "../../assets/ImagesLink/shopee_mall.png";
import lazmallImg from "../../assets/ImagesLink/lazmall.png";
import senmallImg from "../../assets/ImagesLink/senmall.png";
import tikiImg from "../../assets/ImagesLink/tiki.png";
import facebookImg from "../../assets/ImagesLink/facebook.png";
import zaloImg from "../../assets/ImagesLink/zalo.png";

export default function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo_foo.png?1685679333702"
              alt=""
            />
            <p>Công ty cổ phần tp solar</p>
            <p>
              Giấy chứng nhận Đăng ký Kinh doanh số 0109008737 do Sở Kế hoạch và
              Đầu tư Thành phố Hà Nội cấp ngày 29/11/2019
            </p>
            <p>Email: hotro@tpsolar.vn</p>
            <p>
              Trụ sở: C61-20, KĐT Geleximco, Đường Lê Trọng Tấn, Phường Dương
              Nội, Quận Hà Đông, Thành Phố Hà Nội, Việt Nam
            </p>
            <p>
              Cơ sở Miền Bắc: C03-40, KĐT Geleximco, Đường Lê Trọng Tấn, Phường
              Dương Nội, Quận Hà Đông, Thành Phố Hà Nội, Việt Nam
            </p>
            <p>
              Cơ sở Miền Nam: 75 Võ Nguyên Giáp, Phước Tân, Biên Hòa, Đồng Nai
            </p>
          </Col>
          <Col>
            <div>
              <p>HOTLINE BÁN HÀNG:</p>
              <p>0363 993 993</p>
            </div>
            <div>
              <p>TỔNG ĐÀI BÁN HÀNG:</p>
              <p>1800 64 64 50</p>
            </div>
          </Col>
          <Col>
            <p>Chính sách</p>
            <Link to="/">Chính sách bảo hành</Link>
            <Link to="/">Chính sách bảo mật</Link>
            <Link to="/">Chính sách vận chuyển</Link>
            <Link to="/">Chính sách đổi trả</Link>
            <Link to="/">Quy định sử dụng</Link>
            <Link to="/">Chính sách thanh toán</Link>
            <Link to="/">Chính sách kiểm hàng</Link>
          </Col>
          <Col>
            <p>Phương thức thanh toán</p>
            <div class="flex">
              <img
                src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-1.png?1685679333702"
                data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-1.png?1685679333702"
                alt="payment-1"
              />

              <img
                src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-2.png?1685679333702"
                data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/payment-2.png?1685679333702"
                alt="payment-2"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <p>Kết nối với chúng tôi</p>
        <div className="display-flex">
          <img src={shopeeImg} alt="" />
          <img src={lazmallImg} alt="" />
          <img src={senmallImg} alt="" />
          <img src={tikiImg} alt="" />
          <img src={facebookImg} alt="" />
          <img src={zaloImg} alt="" />
        </div>
      </Container>
      <Container>
        <Link to="">Hướng dẫn mua hàng</Link>
        <Link to="">Hướng dẫn thanh toán</Link>
        <Link to="">Hướng dẫn giao nhận</Link>
        <Link to="">Điều khoản dịch vụ</Link>
      </Container>
      <Container>
        <div>
          Bản quyền thuộc về <span>công ty cổ phần tp solar</span>
        </div>
      </Container>
    </div>
  );
}
