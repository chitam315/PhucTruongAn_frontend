import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../../assets/variables.css";

import Footer from "../Footer/Footer";
import "./Project.css";
import Header from "../Home/Header";
export default function Project() {
  return (
    <>
      <Header />
      <div class="col-right position-relative content-project">
        <div className="contentWarp ">
          <div className="breadcrumbs bg-white">
            <div className="container position-relative">
              <ul className="breadcrumbb flex items-center text-center m-0 pl-0 pr-0 small pt-2 pb-2">
                <li className="home">
                  <a href="/" title="Trang chủ">
                    <svg width="12" height="10.633">
                      <use href="#svg-home"></use>
                    </svg>
                    Trang chủ
                  </a>
                  <span className="slash-divider ml-2 mr-2">/</span>
                </li>
                <li className="pt-[8px]">Dự án &amp; Hoạt động</li>
              </ul>
            </div>
          </div>
          <section
            className="blog-layout"
            itemscope=""
            itemtype="http://schema.org/Blog"
          >
            <meta itemprop="name" content="Dự án &amp; Hoạt động" />
            <meta itemprop="description" content="" />

            <div className="container mt-3 mb-3 lastest-articles">
              <div className="rounded p-3 bg-white">
                <div className="row">
                  <div className="col-md-7 col-12">
                    <div className="position-relative modal-open rounded-10 mb-3 mb-md-0">
                      <picture className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect large-article rounded-10 d-block">
                        <source
                          media="(min-width: 1200px)"
                          srcset="https://bizweb.dktcdn.net/100/463/111/articles/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1685759609850"
                        />
                        <source
                          media="(min-width: 992px)"
                          srcset="https://bizweb.dktcdn.net/100/463/111/articles/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1685759609850"
                        />
                        <source
                          media="(max-width: 569px)"
                          srcset="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1685759609850"
                        />
                        <source
                          media="(max-width: 480px)"
                          srcset="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1685759609850"
                        />
                        <img
                          src="https://bizweb.dktcdn.net/100/463/111/articles/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1685759609850"
                          className=" d-block img img-cover position-absolute"
                          alt="Ai có thể trở thành đại lý đèn năng lượng mặt trời?"
                        />
                      </picture>
                      <div className="position-absolute large-article-info p-0 p-lg-4 p-md-3">
                        <h3 className="title_blo font-weight-bold mt-2 mt-md-0 mb-0 mb-md-3">
                          <a
                            className="line_2"
                            href="https://tpsolar.vn/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi"
                            title="Ai có thể trở thành đại lý đèn năng lượng mặt trời?"
                          >
                            Ai có thể trở thành đại lý đèn năng lượng mặt trời?
                          </a>
                        </h3>
                        <span className="d-block d-md-none text-gray small mt-1 mb-1">
                          03-06-2023
                        </span>
                        <span className="d-block">
                          Bạn&nbsp;yêu thích kinh doanh các sản phẩm đèn năng
                          lượng mặt trời đi đầu xu hướng hiện nay. Nhưng bạn còn
                          nhiều băn khoăn: Ai có thể trở thành đại lý đèn năng
                          lượng mặt trời? Không biết khi nào th...
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-ha-an-tai-bim-son-thanh-hoa"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Khai trương đại lý TP Solar - Đại lý Hà An tại Bỉm Sơn, Thanh Hóa"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src={require("../../assets/project/du-an-va-hoat-dong.webp")}
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-180311df-2de4-4436-89b7-3f7fcb1593db.png?v=1685585640330"
                              decoding="async"
                              alt="Khai trương đại lý TP Solar - Đại lý Hà An tại Bỉm Sơn, Thanh Hóa"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-ha-an-tai-bim-son-thanh-hoa"
                            title="Khai trương đại lý TP Solar - Đại lý Hà An tại Bỉm Sơn, Thanh Hóa"
                          >
                            Khai trương đại lý TP Solar - Đại lý Hà An tại Bỉm
                            Sơn, Thanh Hóa
                          </a>
                        </h3>
                        <div className="post-time small">01/06/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Vừa qua,&nbsp;Công ty Cổ phần TP Solar vừa ký kết phân
                          phối sản phẩm đèn năng lượng mặt trời cùng Đại lý Hà
                          An tọa lạc tại Thị xã Bỉm Sơn, Thanh Hóa, với giao
                          thông thuận lợi, giúp quý khách có thể tìm được địa
                          chỉ bán đèn năng lượng mặt trời tại Thanh Hóa nhanh
                          chóng, cũng dễ dàng trong việc vận chuyển hàng hóa.
                          Đại lý&nbsp;Hà An chính thức đi vào hoạt động, TP
                          Solar một lần nữa mở rộng thị trường trên toàn quốc,
                          nhằm khẳng định nỗ lực không ngừng, đáp ứng nhu cầu
                          ngày càng...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-hoang-huy-tam-ky-quang-nam"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Khai trương đại lý TP Solar - Đại lý Hoàng Huy, Tam Ky, Quảng Nam"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-a8f76c16-fcbb-453e-9875-a65ad44b1fc6.png?v=1684894652370"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-a8f76c16-fcbb-453e-9875-a65ad44b1fc6.png?v=1684894652370"
                              decoding="async"
                              alt="Khai trương đại lý TP Solar - Đại lý Hoàng Huy, Tam Ky, Quảng Nam"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-hoang-huy-tam-ky-quang-nam"
                            title="Khai trương đại lý TP Solar - Đại lý Hoàng Huy, Tam Ky, Quảng Nam"
                          >
                            Khai trương đại lý TP Solar - Đại lý Hoàng Huy, Tam
                            Ky, Quảng Nam
                          </a>
                        </h3>
                        <div className="post-time small">24/05/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Hiện nay,&nbsp;do nhu cầu sử điện tăng cao, các chi
                          phí tiền điện hay vấn đề ô nhiễm môi trường đang ở mức
                          báo động. Trước tình hình đó, ngoài sử dụng điện hợp
                          lý - Khai thác nguồn năng lượng mới đang được chú
                          trọng hàng đầu và một trong những giải pháp tối ưu
                          nhất được ứng dụng là năng lượng mặt trời -&nbsp; Tận
                          dụng 100% ánh sáng tự nhiên. Nắm bắt&nbsp;cơ hội tiềm
                          năng về đèn năng lượng mặt trời, đại lý Hoàng Huy -
                          Đại lý TP Solar quyết định hợp tác với Công ty Cổ...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/tp-solar-lap-dat-den-nang-luong-mat-troi-cho-biet-thu-cua-nghe-si-le-giang"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="TP Solar lắp đặt đèn năng lượng mặt trời cho biệt thự của Nghệ sĩ Lê Giang"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/biet-thu-nha-nghe-si-le-giang.png?v=1684727303140"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/biet-thu-nha-nghe-si-le-giang.png?v=1684727303140"
                              decoding="async"
                              alt="TP Solar lắp đặt đèn năng lượng mặt trời cho biệt thự của Nghệ sĩ Lê Giang"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/tp-solar-lap-dat-den-nang-luong-mat-troi-cho-biet-thu-cua-nghe-si-le-giang"
                            title="TP Solar lắp đặt đèn năng lượng mặt trời cho biệt thự của Nghệ sĩ Lê Giang"
                          >
                            TP Solar lắp đặt đèn năng lượng mặt trời cho biệt
                            thự của Nghệ sĩ Lê Giang
                          </a>
                        </h3>
                        <div className="post-time small">22/05/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Nghệ&nbsp;sĩ Lê Giang chắc hẳn đã quá quen thuộc với
                          tất cả người dân Việt Nam bởi sự tài năng và dí dỏm,
                          duyên dáng của mình thông qua những tác phẩm nghệ
                          thuật hài - cải lương. Cô được người hâm mộ ưu ái đặt
                          cho những biệt danh như “Ngôi sao phòng vé” mới của
                          làng phim Việt, thông qua các tác phẩm nổi tiếng như
                          Cua lại vợ bầu, Bố già, Nhà bà Nữ,... TP&nbsp;Solar
                          Việt Nam rất vinh dự khi được nghệ sĩ Lê Giang - người
                          nghệ sĩ nổi tiếng của Việt Nam ưu ái, gửi...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-lac-tran-tai-dong-hoi-quang-binh"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Khai trương đại lý TP Solar - Lạc Trần tại Đồng Hới, Quảng Bình"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-a0dd5a92-e739-4cb5-aa3c-d0fa7bd51e61.png?v=1684726223440"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-a0dd5a92-e739-4cb5-aa3c-d0fa7bd51e61.png?v=1684726223440"
                              decoding="async"
                              alt="Khai trương đại lý TP Solar - Lạc Trần tại Đồng Hới, Quảng Bình"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-lac-tran-tai-dong-hoi-quang-binh"
                            title="Khai trương đại lý TP Solar - Lạc Trần tại Đồng Hới, Quảng Bình"
                          >
                            Khai trương đại lý TP Solar - Lạc Trần tại Đồng Hới,
                            Quảng Bình
                          </a>
                        </h3>
                        <div className="post-time small">22/05/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Hiện&nbsp;nay, đèn năng lượng mặt trời được rất nhiều
                          người quan tâm đến vì có tính năng chiếu sáng vượt
                          trội mà người tiêu dùng lựa chọn để thay thế đèn thông
                          thường, bởi nó chiếu sáng miễn phí và thân thiện với
                          môi trường. Do đó, vừa qua tại Thành phố Đồng hới,
                          Quảng Bình, đại lý Lạc Trần đã ký kết hợp tác cùng
                          Công ty Cổ phần TP Solar trở thành nhà phân phối độc
                          quyền đèn năng lượng mặt trời, mở ra nhiều cơ hội phát
                          triển hơn. Cùng&nbsp;với sự phát triển kinh tế, nhằm
                          đảm bảo...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-phuc-loc-tai-vinh-cuu-dong-nai"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Khai trương đại lý TP Solar - Phúc Lộc tại Vĩnh Cửu, Đồng Nai"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-1-7dce4a0f-2a64-47c9-8327-c446c755f3c9.png?v=1684291822837"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/du-an-va-hoat-dong-1-7dce4a0f-2a64-47c9-8327-c446c755f3c9.png?v=1684291822837"
                              decoding="async"
                              alt="Khai trương đại lý TP Solar - Phúc Lộc tại Vĩnh Cửu, Đồng Nai"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-phuc-loc-tai-vinh-cuu-dong-nai"
                            title="Khai trương đại lý TP Solar - Phúc Lộc tại Vĩnh Cửu, Đồng Nai"
                          >
                            Khai trương đại lý TP Solar - Phúc Lộc tại Vĩnh Cửu,
                            Đồng Nai
                          </a>
                        </h3>
                        <div className="post-time small">17/05/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Hợp tác cùng phát triển Đại lý&nbsp;Phúc Lộc, một
                          trong những cửa hàng uy tín hàng đầu tại Đồng Nai đã
                          chính thức trở thành đại lý ủy quyền phân phối đèn
                          năng lượng mặt trời TP Solar tại khu vực này. Đây là
                          cột mốc đánh dấu mối quan hệ chặt chẽ giữa Công ty Cổ
                          phần TP Solar và Đại lý Phúc Lộc, góp phần thúc đẩy sự
                          tăng trưởng cũng như uy tín của TP Solar trên thị
                          trường trong nước. Cửa hàng Phúc Lộc tại Đồng Nai
                          Việc&nbsp;trở thành đại lý đèn năng lượng mặt trời TP
                          Solar sẽ...
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            {/* Chu de hot */}
            <div className="container mt-3 mb-3">
              <div className="blog-list b_mew_cate rounded p-lg-3 pl-2 pr-2 bg-white">
                <h3 className="align-items-center blog-name d-flex font-weight-bold pt-2 pt-lg-0">
                  <img
                    className="lazy mr-2 loaded"
                    src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/hot_ico.png?1686880710266"
                    data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/hot_ico.png?1686880710266"
                    alt="Chủ đề Hot"
                  />
                  Chủ đề Hot
                </h3>
                <ul className="d-flex b_item flex-wrap mobi_cate mb-0 p-0">
                  <li className="d-flex align-items-center position-relative pr-1 pl-1 pr-lg-3 pl-lg-3 pt-3 pb-3">
                    <div className="image mr-2 mr-lg-3 rounded modal-open">
                      <a href="/huong-dan-su-dung" title="Hướng dẫn sử dụng">
                        <img
                          src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/no_image.jpg?1686880710266"
                          alt="Hướng dẫn sử dụng"
                        />
                      </a>
                    </div>
                    <div className="text">
                      <h4 className="font-weight-bold">
                        <a href="/huong-dan-su-dung" title="Hướng dẫn sử dụng">
                          Hướng dẫn sử dụng
                        </a>
                      </h4>
                      <span className="d-block">9 bài tin</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center position-relative pr-1 pl-1 pr-lg-3 pl-lg-3 pt-3 pb-3">
                    <div className="image mr-2 mr-lg-3 rounded modal-open">
                      <a href="/tin-tuc" title="Dự án &amp; hoạt động">
                        <img
                          src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/no_image.jpg?1686880710266"
                          alt="Dự án &amp; hoạt động"
                        />
                      </a>
                    </div>
                    <div className="text">
                      <h4 className="font-weight-bold">
                        <a href="/tin-tuc" title="Dự án &amp; hoạt động">
                          Dự án &amp; hoạt động
                        </a>
                      </h4>
                      <span className="d-block">66 bài tin</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Du an va hoat dong */}
            <div className="container mt-3 mb-3 ">
              <div className="col-main rounded m_white_bg_module p-lg-3 pl-2 pr-2 pt-3 pb-3">
                <h1 className="blog-name font-weight-bold pb-3 pt-2 pt-lg-0">
                  Dự án &amp; Hoạt động
                </h1>
                <article>
                  <div className="grid_article">
                    <div className="row" id="AjaxinateContainer">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/chuyen-gi-xay-ra-neu-tro-thanh-dai-ly-den-nang-luong-mat-troi"
                            title="Chuyện gì xảy ra nếu trở thành đại lý đèn năng lượng mặt trời?"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/tro-thanh-dai-ly-den-nang-luong-mat-troi-cuc-de.png?v=1683777841857"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Chuyện gì xảy ra nếu trở thành đại lý đèn năng lượng mặt trời?"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/chuyen-gi-xay-ra-neu-tro-thanh-dai-ly-den-nang-luong-mat-troi"
                                title="Ai có thể trở thành đại lý đèn năng lượng mặt trời?"
                              >
                                Ai có thể trở thành đại lý đèn năng lượng mặt
                                trời?
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              03-06-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Bạn&nbsp;yêu thích kinh doanh các sản phẩm đèn
                              năng lượng mặt trời đi đầu xu hướng hiện nay.
                              Nhưng bạn còn nhiều băn khoăn: Ai có thể trở thành
                              đại lý đèn năng lượng mặt trời? Không biết khi nào
                              thì có thể bắt đầu? Nhập hàng ở đâu đảm bảo chất
                              lượng? Cùng TP Solar giải đáp những thắc mắc đó
                              qua bài viết dưới đây nhé! Ai có thể trở thành đại
                              lý đèn năng lượng mặt trời? Làm đại lý đèn năng
                              lượng mặt trời là: Bên giao đại lý tức là Công ty
                              Cổ phần TP Solar sẽ...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-binh-anh-tai-phu-ly-ha-nam"
                            title="Khai trương đại lý TP Solar - Đại lý Hà An tại Bỉm Sơn, Thanh Hóa"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-4160f6fa-39ca-49aa-93f8-2a32b5b1aca8.png?v=1683619831917"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-4160f6fa-39ca-49aa-93f8-2a32b5b1aca8.png?v=1683619831917"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Khai trương đại lý TP Solar - Bình Anh tại Phủ Lý, Hà Nam"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-binh-anh-tai-phu-ly-ha-nam"
                                title="Khai trương đại lý TP Solar - Bình Anh tại Phủ Lý, Hà Nam"
                              >
                                Khai trương đại lý TP Solar - Bình Anh tại Phủ
                                Lý, Hà Nam
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              09-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Tưng bừng khai trương đại lý đèn năng lượng mặt
                              trời Bình Anh tại Hà Nam Ngày 28/4/2023 vừa qua,
                              Đại lý Bình Anh chính thức khai trương và đi vào
                              hoạt động, đây là cột mốc đánh dấu sự hợp tác lâu
                              dài và bền vững giữa Công ty Cổ phần TP Solar và
                              Đại lý Bình Anh. Dù chỉ mới gia nhập hệ thống đại
                              lý ủy quyền chính thức, nhưng Đại lý Bình Anh đã
                              không ngừng nỗ lực đưa thương hiệu TP Solar đến
                              gần hơn với khách hàng khu vực Hà Nam. Buổi khai
                              trương đại lý...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/tu-a-z-bi-quyet-tro-dai-ly-den-nang-luong-mat-troi-cuc-de-dang"
                            title="[Từ A-Z] Bí quyết trở đại lý đèn năng lượng mặt trời cực dễ dàng!"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/bi-quyet-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1683108834590"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/bi-quyet-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1683108834590"
                                className="lazy d-block img img-cover position-absolute"
                                alt="[Từ A-Z] Bí quyết trở đại lý đèn năng lượng mặt trời cực dễ dàng!"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/tu-a-z-bi-quyet-tro-dai-ly-den-nang-luong-mat-troi-cuc-de-dang"
                                title="[Từ A-Z] Bí quyết trở đại lý đèn năng lượng mặt trời cực dễ dàng!"
                              >
                                [Từ A-Z] Bí quyết trở đại lý đèn năng lượng mặt
                                trời cực dễ dàng!
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              03-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Bạn yêu thích và muốn kiếm thêm thu nhập từ việc
                              kinh doanh đèn năng lượng mặt trời? Bạn muốn tận
                              dụng những nguồn lực hiện có để sinh thêm nhiều
                              lợi nhuận hơn nữa? Bạn muốn kinh doanh vì đã tìm
                              ra phân khúc thị trường với nhu cầu lớn để khai
                              thác lợi nhuận tối đa nhất? Bạn sợ nhập hàng qua
                              khâu trung gian, bị “đội” giá, bị cạnh tranh về
                              giá? Bạn muốn nhập nguồn hàng uy tín, chất lượng
                              hàng đầu Việt Nam? Mọi thắc mắc của bạn sẽ được
                              giải đáp vì đã có TP Solar Việt Nam - chúng tôi
                              sẵn sàng đồng hành cùng bạn. Đại...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/hoi-tro-trien-lam-san-pham-nong-nghiep-tieu-bieu-2023"
                            title="Hội trợ, triển lãm sản phẩm nông nghiệp tiêu biểu 2023"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/hoi-cho-trien-lam-2023.png?v=1682496687810"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/hoi-cho-trien-lam-2023.png?v=1682496687810"
                                alt="Hội trợ, triển lãm sản phẩm nông nghiệp tiêu biểu 2023"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/hoi-tro-trien-lam-san-pham-nong-nghiep-tieu-bieu-2023"
                                title="Hội trợ, triển lãm sản phẩm nông nghiệp tiêu biểu 2023"
                              >
                                Hội trợ, triển lãm sản phẩm nông nghiệp tiêu
                                biểu 2023
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              26-04-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              TP Solar rất vinh dự khi được cùng Hội Nông dân
                              huyện Cần Giờ mang tới hội chợ, triển lãm Đèn năng
                              lượng mặt trời - sản phẩm xanh, hướng tới nền nông
                              nghiệp bền vững. TP Solar vô cùng tự hào khi các
                              sản phẩm đèn năng lượng mặt trời nhận được sự quan
                              tâm, hưởng ứng tích cực từ các khách hàng, hợp tác
                              xã, chủ các trang trại, doanh nghiệp sản xuất kinh
                              doanh tham gia triển lãm. Sáng 21/4, tại đường
                              Vành Đai Trong, phường Bình Trị Đông B, quận Bình
                              Tân, TP. Hồ Chí Minh tổ chức hội...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/ly-giai-suc-hut-cua-den-nang-luong-mat-troi-xu-huong-dau-tu-sinh-loi-cao"
                            title="Lý giải sức hút của đèn năng lượng mặt trời - Xu hướng đầu tư 2023"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/suc-hut-cua-den-nang-luong-mat-troi.png?v=1681181515180"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/suc-hut-cua-den-nang-luong-mat-troi.png?v=1681181515180"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Lý giải sức hút của đèn năng lượng mặt trời - Xu hướng đầu tư 2023"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/ly-giai-suc-hut-cua-den-nang-luong-mat-troi-xu-huong-dau-tu-sinh-loi-cao"
                                title="Lý giải sức hút của đèn năng lượng mặt trời - Xu hướng đầu tư 2023"
                              >
                                Lý giải sức hút của đèn năng lượng mặt trời - Xu
                                hướng đầu tư 2023
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              11-04-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Đèn năng lượng mặt trời đang là xu hướng và được
                              săn đón rất nhiều trên thị trường Việt Nam hiện
                              nay. Vậy câu hỏi được đặt ra, tại sao đèn năng
                              lượng lại có sức hút lớn như vậy? Hãy cùng TP
                              Solar “điểm qua” những ấn tượng đáng kinh ngạc của
                              loại đèn này nhé! “Nói không” với điện lưới - An
                              toàn - Hiện đại Đèn năng lượng mặt trời không sử
                              dụng điện lưới thông thường để chiếu sáng mà nó sử
                              dụng hoàn toàn bằng ánh sáng mặt trời. Một sản
                              phẩm vừa giúp tiết kiệm điện, tiết kiệm chi phí
                              tiền điện,...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dien-co-phi-nhung-tai-long-ho-vinh-long"
                            title="Khai trương đại lý TP Solar - Điện cơ Phi Nhung tại Long Hồ, Vĩnh Long"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-1-94757f2f-97f0-408a-86f8-7884d434dcab.png?v=1680142672453"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-1-94757f2f-97f0-408a-86f8-7884d434dcab.png?v=1680142672453"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Khai trương đại lý TP Solar - Điện cơ Phi Nhung tại Long Hồ, Vĩnh Long"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dien-co-phi-nhung-tai-long-ho-vinh-long"
                                title="Khai trương đại lý TP Solar - Điện cơ Phi Nhung tại Long Hồ, Vĩnh Long"
                              >
                                Khai trương đại lý TP Solar - Điện cơ Phi Nhung
                                tại Long Hồ, Vĩnh Long
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              30-03-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Vừa qua TP Solar vui mừng chào đón đại lý Điện cơ
                              Phi Nhung, chính thức khai trương tại Long Hồ,
                              Vĩnh Long. Cửa hàng có không gian được thiết kế
                              rộng rãi thoáng đãng, trưng bày và giới thiệu đa
                              dạng các kiểu dáng các sản phẩm đèn năng lượng mặt
                              trời, đáp ứng nhu cầu của khách hàng địa phương và
                              các vùng lân cận. Đây là nơi quý khách có thể tìm
                              thấy đầy đủ các sản phẩm đèn năng lượng cao cấp
                              của thương hiệu TP Solar với mức giá hợp lý. Bên
                              cạnh sản phẩm chất lượng, đội ngũ kỹ...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-phuong-vinh-tai-phu-tan-an-giang"
                            title="Khai trương đại lý TP Solar - Phương Vĩnh tại Phú Tân, An Giang"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-1.png?v=1679903134430"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-1.png?v=1679903134430"
                                className="lazy d-block img img-cover position-absolute loaded"
                                alt="Khai trương đại lý TP Solar - Phương Vĩnh tại Phú Tân, An Giang"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-phuong-vinh-tai-phu-tan-an-giang"
                                title="Khai trương đại lý TP Solar - Phương Vĩnh tại Phú Tân, An Giang"
                              >
                                Khai trương đại lý TP Solar - Phương Vĩnh tại
                                Phú Tân, An Giang
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              27-03-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Vừa qua, TP Solar lại tiếp tục khai trương đại lý
                              ủy quyền Phương Vĩnh tại 290 Tôn Đức Thắng, Ấp
                              Trung 3, TT.Phú Mỹ, Huyện Phú Tân, Tỉnh An Giang.
                              Điều này đã cho thấy rõ các sản phẩm đèn năng
                              lượng mặt trời của TP Solar đang ngày càng được
                              mọi người ưa chuộng và tin tưởng sử dụng. Trong
                              không khí tưng bừng, rộn ràng buổi lễ khai trương
                              đã diễn ra thành công tốt đẹp với những lời chúc,
                              những lẵng hoa tươi đến từ nhiều đối tác, khách
                              hàng cùng với sự ủng hộ của người dân xung...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/tp-solar-lap-dat-225-bo-den-nang-luong-mat-troi-cho-cong-trinh-o-nam-nhun-lai-chau"
                            title="TP Solar lắp đặt 225 bộ đèn năng lượng mặt trời cho công trình ở Nậm Nhùn, Lai Châu"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-59330f90-412d-4ac7-85e3-36a7f0e70652.png?v=1679624232017"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-59330f90-412d-4ac7-85e3-36a7f0e70652.png?v=1679624232017"
                                className="lazy d-block img img-cover position-absolute loaded"
                                alt="TP Solar lắp đặt 225 bộ đèn năng lượng mặt trời cho công trình ở Nậm Nhùn, Lai Châu"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/tp-solar-lap-dat-225-bo-den-nang-luong-mat-troi-cho-cong-trinh-o-nam-nhun-lai-chau"
                                title="TP Solar lắp đặt 225 bộ đèn năng lượng mặt trời cho công trình ở Nậm Nhùn, Lai Châu"
                              >
                                TP Solar lắp đặt 225 bộ đèn năng lượng mặt trời
                                cho công trình ở Nậm Nhùn, Lai Châu
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              24-03-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Vừa qua, TP Solar đã bàn giao nốt 150 bộ đèn năng
                              lượng mặt trời cho công trình tại Huyện Nậm Nhùn,
                              Lai Châu. Được biết dự án được chia làm hai giai
                              đoạn và TP Solar đã bàn giao 75 bộ đèn trong giai
                              đoạn 1 trước đó. Địa chỉ: bản Nậm Dòn, Xã Nậm
                              Hàng, Huyện Nậm Nhùn, Lai Châu. Đại diện phía công
                              trình cho biết: “Sử dụng đèn năng lượng mặt trời
                              vừa tiết kiệm lại bảo vệ môi trường, chi phí bảo
                              hành lại thấp. Và sau một thời gian dài tìm hiểu,
                              chúng tôi quyết định tin tưởng và...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-cong-ty-tran-thang-tai-bien-hoa-dong-nai"
                            title="Khai trương đại lý TP Solar - Công ty Trần Thắng tại Biên Hòa, Đồng Nai"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-fe47869c-ace9-4732-9ad6-c3fb78f9fe3c.png?v=1679370246517"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/du-an-va-hoat-dong-7-fe47869c-ace9-4732-9ad6-c3fb78f9fe3c.png?v=1679370246517"
                                className="lazy d-block img img-cover position-absolute loaded"
                                alt="Khai trương đại lý TP Solar - Công ty Trần Thắng tại Biên Hòa, Đồng Nai"
                              />
                            </div>
                          </a>
                          <div className="custom-article-item_info">
                            <div className="tags d-flex list-unstyled mb-1">
                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/kinh-doanh-den-nang-luong"
                                title="kinh doanh đèn năng lượng"
                              >
                                kinh doanh đèn năng lượng
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/tp-solar"
                                title="TP Solar"
                              >
                                TP Solar
                              </a>

                              <a
                                className="item_tags small font-weight-bold badge badge-pill badge-warning py-1"
                                href="du-an-hoat-dong/den-nang-luong-mat-troi"
                                title="đèn năng lượng mặt trời"
                              >
                                đèn năng lượng mặt trời
                              </a>
                            </div>

                            <h3 className="title_blo font-weight-bold mb-2">
                              <a
                                className="line_2"
                                href="https://tpsolar.vn/khai-truong-dai-ly-tp-solar-cong-ty-tran-thang-tai-bien-hoa-dong-nai"
                                title="Khai trương đại lý TP Solar - Công ty Trần Thắng tại Biên Hòa, Đồng Nai"
                              >
                                Khai trương đại lý TP Solar - Công ty Trần Thắng
                                tại Biên Hòa, Đồng Nai
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              21-03-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Vừa qua, sự kiện khai trương đại lý TP Solar -
                              Công ty Trần Thắng tại Biên Hòa, Đồng Nai đã diễn
                              ra thành công tốt đẹp, thu hút đông đảo khách hàng
                              tới tham dự. Sự ra đời của CT Trần Thắng không chỉ
                              giúp khách hàng có thể hình dung rõ nét nhất về
                              không gian sống “xanh - sạch”, mà còn là cầu nối
                              quan trọng giúp khách hàng dễ dàng tiếp cận và sử
                              dụng các sản phẩm đèn năng lượng mặt trời. Một số
                              hình ảnh trong buổi lễ khai trương: Qúy khách hàng
                              mua các sản phẩm chính hãng của TP...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Xem thêm bài viết
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
