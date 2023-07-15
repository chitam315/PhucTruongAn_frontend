import React from "react";
import "./IntroducePage.css";
// import "bootstrap/dist/css/bootstrap.css";
import "../../assets/variables.css";
import Footer from "../Footer/Footer";
import tpsolar from "../../assets/introduce/den-nang-luong-mat-troi-tp-solar.webp";
import Header from "../Home/Header";
const IntroducePage = () => {
  return (
    <>
     <Header/>

      <div className="col-right position-relative container-introduce">
        <div className="contentWarp ">
          <div className="breadcrumbs bg-white">
            <div className="container-sm position-relative">
              <ul className="breadcrumb align-items-center m-0 pl-0 pr-0 small pt-2 pb-2">
                <li className="home">
                  <a href="/" title="Trang chủ">
                    <svg width="12" height="10.633">
                      <use href="#svg-home"></use>
                    </svg>
                    Trang chủ
                  </a>
                  <span className="slash-divider ml-2 mr-2">/</span>
                </li>
                <li>Giới thiệu</li>
              </ul>
            </div>
          </div>
          <div className="com_info">
            <div className="container-sm mt-3 mb-3">
              <div className="rounded p-2 p-md-3 bg-white col-main page-title">
                <h1 className="font-weight-bold pt-2 pt-lg-0 mt-0 mb-3 page_name">
                  Giới thiệu
                </h1>
                <div className="rte m-auto bg-white d-block">
                  <p>
                    <meta charset="utf-8" />
                  </p>
                  <p>
                    - Được thành lập từ năm 2019, đến nay TP Solar đã và đang
                    tiếp bước thành công trên con đường xây dựng nguồn năng
                    lượng mới, kiến tạo một hệ sinh thái trong lành, an toàn. TP
                    Solar tự tin là nhà đơn vị phân phối đèn năng lượng mặt trời
                    UY TÍN - CHẤT LƯỢNG - GIÁ TỐT&nbsp;trên thị trường, đáp ứng
                    mọi nhu cầu thiết yếu của khách hàng.
                  </p>
                  <p>
                    <a href="den-nang-luong-mat-troi-tp-solar">
                      <img
                        alt="den-nang-luong-mat-troi-tp-solar"
                        data-thumb="original"
                        original-height="1500"
                        original-width="2000"
                        data-src={tpsolar}
                        className="lazy loaded"
                        decoding="async"
                        src={tpsolar}
                      />
                    </a>
                  </p>
                  <p>
                    - Nhất quán với tầm nhìn từ xu hướng “sống xanh” của thế
                    giới, năng lượng mặt trời được nghiên cứu và phát triển như
                    một giải pháp thay thế điện lưới kỹ thuật với nhiều ưu thế
                    vượt trội như giảm ô nhiễm, bền bỉ, tiết kiệm và dễ sử dụng.
                    Với khát vọng mang đến nguồn điện năng “sạch” phủ khắp mọi
                    miền đất nước, thay đổi thói quen tiêu dùng, mang năng lượng
                    mặt trời đến gần hơn với đời sống. Trải qua bước đầu “thai
                    nghén” và theo đuổi điều đó, TP Solar không ngừng cố gắng
                    hiện thực hóa giấc mơ của mình qua những chiếc đèn năng
                    lượng mặt trời cho các gia đình Việt.
                    <br />
                    - Chúng tôi hiểu rằng, đội ngũ nhân viên năng động, tận tâm
                    với chuyên môn cao chính là cầu nối xây dựng niềm tin yêu
                    tốt nhất của khách hàng với TP Solar. Đội ngũ nhân viên TP
                    Solar luôn luôn cố gắng mang đến cho khách hàng những sản
                    phẩm và dịch vụ đạt chuẩn quốc tế. Từng con người của TP
                    Solar đều làm việc với tinh thần trách nhiệm cao nhất để tạo
                    ra kết quả lớn nhất.&nbsp;
                    <br />
                    <em>
                      <strong>
                        Chọn điện năng lượng mặt trời – Chọn ngay TP
                        Solar!&nbsp;
                      </strong>
                    </em>
                  </p>
                  <p>
                    <strong>TP&nbsp;SOLAR VIỆT NAM</strong>
                  </p>
                  <ul>
                    <li>
                      Địa chỉ: C61-20, Khu đô thị mới Geleximco Lê Trọng Tấn,
                      Phường Dương Nội, Quận Hà Đông, Thành phố Hà Nội, Việt
                      Nam.
                    </li>
                    <li>
                      Email:{" "}
                      <a href="http://tpsolar.vn@gmail.com">
                        tpsolar.vn@gmail.com
                      </a>
                    </li>
                    <li>
                      Điện thoại:{" "}
                      <a href="http://tel:0363.993.993">0363.993.993</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
      <Footer />
    </>
  );
};

export default IntroducePage;
