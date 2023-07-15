import React from "react";

import "../../assets/variables.css";
import Header from "../Home/Header";
import  Footer  from "../Footer/Footer";
import "../Project/Project.css";
export default function News() {
  return (
    <>
      <Header></Header>
      <div className="col-right position-relative content-project">
        <div className="contentWarp ">
          <div className="breadcrumbs bg-white">
            <div className="container-sm position-relative">
              <ul className="breadcrumbb flex items-center m-0 pl-0 pr-0 small pt-2 pb-2">
                <li className="home">
                  <a href="/" title="Trang chủ">
                    <svg width="12" height="10.633">
                      <use href="#svg-home"></use>
                    </svg>
                    Trang chủ
                  </a>
                  <span className="slash-divider ml-2 mr-2">/</span>
                </li>
                <li className="pt-[8px]">Thông tin hữu ích</li>
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

            <div className="container-sm mt-3 mb-3 lastest-articles">
              <div className="rounded p-3 bg-white">
                <div className="row">
                  <div className="col-md-7 col-12">
                    <div className="position-relative modal-open rounded-10 mb-3 mb-md-0">
                      <picture className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect large-article rounded-10 d-block ">
                        <source
                          media="(min-width: 1200px)"
                          srcset="https://bizweb.dktcdn.net/100/463/111/articles/do-sang-cua-den-nang-luong-mat-troi.png?v=1686814248947"
                        />
                        <source
                          media="(min-width: 992px)"
                          srcset="https://bizweb.dktcdn.net/100/463/111/articles/do-sang-cua-den-nang-luong-mat-troi.png?v=1686814248947"
                        />
                        <source
                          media="(max-width: 569px)"
                          srcset="https://bizweb.dktcdn.net/100/463/111/articles/do-sang-cua-den-nang-luong-mat-troi.png?v=1686814248947"
                        />
                        <source
                          media="(max-width: 480px)"
                          srcset="https://bizweb.dktcdn.net/100/463/111/articles/do-sang-cua-den-nang-luong-mat-troi.png?v=1686814248947"
                        />
                        <img
                          src="https://bizweb.dktcdn.net/100/463/111/articles/do-sang-cua-den-nang-luong-mat-troi.png?v=1686814248947"
                          className=" d-block img img-cover position-absolute"
                          alt="Những yếu tố nào ảnh hưởng đến hiệu suất chiếu sáng của đèn năng lượng mặt trời?"
                        />
                      </picture>
                      <div className="position-absolute large-article-info p-0 p-lg-4 p-md-3">
                        <h3 className="title_blo font-weight-bold mt-2 mt-md-0 mb-0 mb-md-3">
                          <a
                            className="line_2 line-color"
                            href="https://tpsolar.vn/nhung-yeu-to-nao-anh-huong-den-hieu-suat-chieu-sang-cua-den-nang-luong-mat-troi"
                            title="Những yếu tố nào ảnh hưởng đến hiệu suất chiếu sáng của đèn năng lượng mặt trời?"
                          >
                            Những yếu tố nào ảnh hưởng đến hiệu suất chiếu sáng
                            của đèn năng lượng mặt trời?
                          </a>
                        </h3>
                        <span className="d-block d-md-none text-gray small mt-1 mb-1">
                          15-06-2023
                        </span>
                        <span className="d-block">
                          Trong quá trình sử dụng đèn năng lượng mặt trời, chắc
                          hẳn bạn đã gặp trường hợp tình trạng đèn sáng yếu hoặc
                          không hoạt động. Vậy bạn có thắc mắc độ sáng của đèn
                          phụ thuộc vào yếu tố nào? Hãy tham ...
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/quat-nang-luong-mat-troi-giai-phap-tiet-kiem-tien-cho-mua-he-nong-buc"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Quạt năng lượng mặt trời - Giải pháp tiết kiệm tiền cho mùa hè nóng bức"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/quat-nang-luong-mat-troi.png?v=1686729147120"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/quat-nang-luong-mat-troi.png?v=1686729147120"
                              decoding="async"
                              alt="Quạt năng lượng mặt trời - Giải pháp tiết kiệm tiền cho mùa hè nóng bức"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/quat-nang-luong-mat-troi-giai-phap-tiet-kiem-tien-cho-mua-he-nong-buc"
                            title="Quạt năng lượng mặt trời - Giải pháp tiết kiệm tiền cho mùa hè nóng bức"
                          >
                            Quạt năng lượng mặt trời - Giải pháp tiết kiệm tiền
                            cho mùa hè nóng bức
                          </a>
                        </h3>
                        <div className="post-time small">14/06/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Mùa hè đã đến, có quá nhiều các thiết bị điện phải sử
                          dụng cùng lúc khiến hóa đơn tiền điện tăng cao và dễ
                          xảy ra tình trạng bị quá tải, cúp điện. Sử dụng quạt
                          năng lượng mặt trời - giải pháp hoàn hảo“cấp cứu” cho
                          các trường hợp cấp thiết, giúp giảm bớt gánh nặng về
                          tài chính và góp phần bảo vệ môi trường. Đặc điểm và
                          cấu tạo của quạt năng lượng mặt trời Quạt năng lượng
                          mặt trời sử dụng ánh sáng mặt trời thay vì năng lượng
                          điện, do đó giúp bạn tiết kiệm chi phí tiền...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/lua-chon-den-nang-luong-mat-troi-phu-hop-cho-gia-dinh-hoac-doanh-nghiep"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Lựa chọn đèn năng lượng mặt trời phù hợp cho gia đình hoặc doanh nghiệp"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/den-nang-luong-mat-troi-loai-nao-tot-1.png?v=1686646962557"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/den-nang-luong-mat-troi-loai-nao-tot-1.png?v=1686646962557"
                              decoding="async"
                              alt="Lựa chọn đèn năng lượng mặt trời phù hợp cho gia đình hoặc doanh nghiệp"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/lua-chon-den-nang-luong-mat-troi-phu-hop-cho-gia-dinh-hoac-doanh-nghiep"
                            title="Lựa chọn đèn năng lượng mặt trời phù hợp cho gia đình hoặc doanh nghiệp"
                          >
                            Lựa chọn đèn năng lượng mặt trời phù hợp cho gia
                            đình hoặc doanh nghiệp
                          </a>
                        </h3>
                        <div className="post-time small">13/06/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Giá bán lẻ điện bình quân tăng 3%, việc này gây ảnh
                          hưởng nghiêm trọng đến hoạt động sản xuất kinh doanh
                          của doanh nghiệp và đời sống người dân khi mùa nắng
                          nóng đã tới. Vậy giải pháp nào cho người dân và doanh
                          nghiệp khi giá điện ngày một tăng cao? Năng lượng mặt
                          trời - nguồn năng lượng miễn phí, giúp mọi người có
                          thể tiết kiệm điện, giảm chi phí hóa đơn tiền điện
                          hàng tháng. “Ma trận” đèn năng lượng mặt trời trên thị
                          trường hiện nay Hiện nay, đèn năng lượng mặt trời đang
                          dần trở thành...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/5-mau-den-nang-luong-mat-troi-tot-nhat-duoc-nhieu-nguoi-chon-mua"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="5 mẫu đèn năng lượng mặt trời tốt nhất được nhiều người chọn mua"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/top5-mau-den-nang-luong-mat-troi-chat-luong-gia-re.png?v=1686389538487"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/top5-mau-den-nang-luong-mat-troi-chat-luong-gia-re.png?v=1686389538487"
                              decoding="async"
                              alt="5 mẫu đèn năng lượng mặt trời tốt nhất được nhiều người chọn mua"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/5-mau-den-nang-luong-mat-troi-tot-nhat-duoc-nhieu-nguoi-chon-mua"
                            title="5 mẫu đèn năng lượng mặt trời tốt nhất được nhiều người chọn mua"
                          >
                            5 mẫu đèn năng lượng mặt trời tốt nhất được nhiều
                            người chọn mua
                          </a>
                        </h3>
                        <div className="post-time small">10/06/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Ban đang cân nhắc không biết nên chọn đèn năng lượng
                          mặt trời loại nào tốt? Dưới đây là danh sách top 5 mẫu
                          đèn năng lượng mặt trời tốt nhất được người tiêu dùng
                          tin tưởng đặt mua nhiều trong vòng 3 năm trở lại đây.
                          Hãy cùng tham khảo ngay bài viết dưới đây để lựa chọn
                          cho mình loại đèn phù hợp nhé! Top 5 mẫu đèn trong bài
                          được đánh giá dựa trên những tiêu chí khắt khe cả về
                          giá thành, mức độ hiệu quả, thời gian sử dụng của đèn.
                          5 mẫu đèn năng lượng mặt...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/uu-diem-cua-den-nang-luong-mat-troi-so-voi-cac-loai-den-co-mat-tren-thi-truong"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Ưu điểm của đèn năng lượng mặt trời so với các loại đèn có mặt trên thị trường"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/uu-diem-vuot-troi-cua-den-nang-luong-mat-troi.png?v=1686275762837"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/uu-diem-vuot-troi-cua-den-nang-luong-mat-troi.png?v=1686275762837"
                              decoding="async"
                              alt="Ưu điểm của đèn năng lượng mặt trời so với các loại đèn có mặt trên thị trường"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/uu-diem-cua-den-nang-luong-mat-troi-so-voi-cac-loai-den-co-mat-tren-thi-truong"
                            title="Ưu điểm của đèn năng lượng mặt trời so với các loại đèn có mặt trên thị trường"
                          >
                            Ưu điểm của đèn năng lượng mặt trời so với các loại
                            đèn có mặt trên thị trường
                          </a>
                        </h3>
                        <div className="post-time small">07/06/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Trong bối cảnh giá điện ngày một tăng cao như hiện
                          nay, thì đèn năng lượng mặt trời là một giải pháp hữu
                          hiệu về mặt kinh tế cho người sử dụng, giảm áp lực lên
                          điện lưới quốc gia và góp phần bảo vệ môi trường.
                          Nguyên lý hoạt động của đèn năng lượng mặt trời. Đèn
                          năng lượng mặt trời là loại đèn sử dụng ánh sáng mặt
                          trời chuyển hóa thành điện năng để đáp ứng nhu cầu
                          chiếu sáng. Đèn năng lượng mặt trời còn được gọi bằng
                          nhiều cái tên khác nhau như: Đèn Led năng lượng...
                        </div>
                      </div>
                    </article>
                    <article className="blog-item-list clearfix mb-3 row">
                      <div className="col-4 col-lg-3 pr-0 pl-md-0">
                        <a
                          href="https://tpsolar.vn/nhung-nguyen-nhan-khien-den-nang-luong-mat-troi-sang-yeu"
                          className=" d-block modal-open thumb_img_blog_list thumb rounded"
                          title="Những nguyên nhân khiến đèn năng lượng mặt trời sáng yếu"
                        >
                          <span className="modal-open position-relative d-block w-100 m-0 ratio3by2 has-edge aspect zoom">
                            <img
                              src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/den-nang-luong-mat-troi-sang-yeu.png?v=1685952044387"
                              data-src="//bizweb.dktcdn.net/thumb/medium/100/463/111/articles/den-nang-luong-mat-troi-sang-yeu.png?v=1685952044387"
                              decoding="async"
                              alt="Những nguyên nhân khiến đèn năng lượng mặt trời sáng yếu"
                              className="lazy d-block img img-cover position-absolute loaded"
                            />
                          </span>
                        </a>
                      </div>
                      <div className="blogs-rights col-8 col-lg-9 p-[15px]">
                        <h3 className="blog-item-name font-weight-bold mb-1 title_blo">
                          <a
                            className="line_1"
                            href="https://tpsolar.vn/nhung-nguyen-nhan-khien-den-nang-luong-mat-troi-sang-yeu"
                            title="Những nguyên nhân khiến đèn năng lượng mặt trời sáng yếu"
                          >
                            Những nguyên nhân khiến đèn năng lượng mặt trời sáng
                            yếu
                          </a>
                        </h3>
                        <div className="post-time small">03/06/2023</div>

                        <div className="sum line_2 h-auto text-justify">
                          Đèn năng lượng mặt trời đã trở thành sản phẩm không
                          còn quá xa lạ gì với mọi người. Đôi khi trong quá
                          trình sử dụng bạn có thể sẽ gặp phải trường hợp đèn
                          sáng yếu hay sau một thời gian sáng lại mờ đi hoặc tắt
                          hẳn không sáng. Vậy tại sao lại có hiện tượng đèn năng
                          lượng mặt trời sáng yếu? Cách xử lý ra sao? Cùng TP
                          Solar giải đáp trong bài viết dưới đây nhé! Hiện tượng
                          đèn năng lượng mặt trời sáng yếu Hiện tượng đèn năng
                          lượng mặt trời sáng yếu là hiện tượng...
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            {/* Chu de hot */}
            <div className="container-sm mt-3 mb-3">
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
            {/* Thong tin huu ich */}
            <div className="container-sm mt-3 mb-3 ">
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
                            href="https://tpsolar.vn/tiet-kiem-dien-giua-mua-nang-nong"
                            title="Tiết kiệm điện giữa mùa nắng nóng"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/tiet-kiem-dien-mua-nang-nong.png?v=1685758283087"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Tiết kiệm điện giữa mùa nắng nóng"
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
                                href="https://tpsolar.vn/tiet-kiem-dien-giua-mua-nang-nong"
                                title="Tiết kiệm điện giữa mùa nắng nóng"
                              >
                                Tiết kiệm điện giữa mùa nắng nóng
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              03-06-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Điều hòa - công nghệ hiện đại giúp chúng ta giải
                              nhiệt nhanh hơn, mang đến sự thoải mái trong cuộc
                              sống nhưng cùng lúc đó sẽ “nung” nóng Trái Đất.
                              Theo ước tính thì đến trước cuối thập kỷ này thế
                              giới sẽ có thêm 1 tỉ chiếc điều hòa. Thị trường
                              được dự đoán tăng gần gấp đôi trước năm 2024. Sức
                              nóng từ điều hòa Thời tiết ngày càng nóng bức như
                              để thử thách giới hạn sinh tồn của con người. Với
                              vô vàn những tiện ích, đủ các công suất, mức giá
                              khác nhau thì điều hòa không khí...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/gia-dien-tang-co-anh-huong-den-doi-song-sinh-hoat-hoat-dong-kinh-doanh-cua-doanh-nghiep"
                            title="Giá điện tăng có ảnh hưởng đến đời sống sinh hoạt, hoạt động kinh doanh của doanh nghiệp?"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/gia-dien-tang-cao.png?v=1685346494333"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/gia-dien-tang-cao.png?v=1685346494333"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Giá điện tăng có ảnh hưởng đến đời sống sinh hoạt, hoạt động kinh doanh của doanh nghiệp?"
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
                                href="https://tpsolar.vn/gia-dien-tang-co-anh-huong-den-doi-song-sinh-hoat-hoat-dong-kinh-doanh-cua-doanh-nghiep"
                                title="Giá điện tăng có ảnh hưởng đến đời sống sinh hoạt, hoạt động kinh doanh của doanh nghiệp?"
                              >
                                Giá điện tăng có ảnh hưởng đến đời sống sinh
                                hoạt, hoạt động kinh doanh của doanh nghiệp?
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              29-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Theo quyết định của Bộ Công Thương và Tập đoàn
                              Điện lực Việt Nam, kể từ ngày 4/5/2023 giá điện
                              bán lẻ bình quân tăng 3% (1.920 đồng/kWh) so với
                              mức giá điện cũ. Việc giá điện tăng có ảnh hưởng
                              quan trọng đến đời sống sinh hoạt của người dân
                              cũng như hoạt động sản xuất kinh doanh của doanh
                              nghiệp. Tuy nhiên, với mức tăng như hiện nay được
                              đánh giá là mức tăng hợp lý và giá điện bán lẻ tại
                              Việt Nam vẫn thấp hơn rất nhiều so với các quốc
                              gia trên thế giới (Trung Quốc là 2.780...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/thoi-gian-sang-cua-den-nang-luong-mat-troi-la-bao-lau"
                            title="Thời gian sáng của đèn năng lượng mặt trời là bao lâu?"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/thoi-gian-chieu-sang-cua-den-nang-luong-mat-troi-la-bao-lau.png?v=1684895182710"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/thoi-gian-chieu-sang-cua-den-nang-luong-mat-troi-la-bao-lau.png?v=1684895182710"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Thời gian sáng của đèn năng lượng mặt trời là bao lâu?"
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
                                href="https://tpsolar.vn/thoi-gian-sang-cua-den-nang-luong-mat-troi-la-bao-lau"
                                title="Thời gian sáng của đèn năng lượng mặt trời là bao lâu?"
                              >
                                Thời gian sáng của đèn năng lượng mặt trời là
                                bao lâu?
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              24-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Thời gian sáng của đèn năng lượng mặt trời là bao
                              lâu? Được xem là một trong những sản phẩm chất
                              lượng, có thể tận dụng tốt ánh sáng mặt trời và
                              chuyển hóa thành năng lượng để chiếu sáng. Vậy
                              thời gian chiếu sáng của đèn năng lượng mặt trời
                              có bền và lâu dài không? Thời gian sạc đầy đèn
                              năng lượng mặt trời? Việc sử dụng đèn năng lượng
                              mặt trời để chiếu sáng đã trở thành một trong
                              những lựa chọn hàng đầu của rất nhiều hộ gia đình,
                              các doanh nghiệp,... Bởi đèn hấp thụ tối đa ánh
                              sáng...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/90-cac-thuong-hieu-quang-cao-den-nang-luong-mat-troi-chat-luong-dang-lua-dao"
                            title="90% các thương hiệu quảng cáo đèn năng lượng mặt trời chất lượng đang lừa đảo"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/90-percentage-cac-thuong-hieu-dang-lua-dao-khach-hang.png?v=1684463700533"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/90-percentage-cac-thuong-hieu-dang-lua-dao-khach-hang.png?v=1684463700533"
                                alt="90% các thương hiệu quảng cáo đèn năng lượng mặt trời chất lượng đang lừa đảo"
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
                                href="https://tpsolar.vn/90-cac-thuong-hieu-quang-cao-den-nang-luong-mat-troi-chat-luong-dang-lua-dao"
                                title="90% các thương hiệu quảng cáo đèn năng lượng mặt trời chất lượng đang lừa đảo"
                              >
                                90% các thương hiệu quảng cáo đèn năng lượng mặt
                                trời chất lượng đang lừa đảo
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              19-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Bạn thích cuộc sống xanh, bạn muốn sử dụng đèn
                              năng lượng mặt trời và muốn tìm thương hiệu cung
                              cấp đèn năng lượng mặt trời uy tín và bạn chưa
                              biết lựa chọn đơn vị nào để mua. Nỗi lo về vấn nạn
                              lừa đảo, trong khi không phải tất cả các thương
                              hiệu đèn năng lượng mặt trời đều bán hàng chất
                              lượng như quảng cáo. Nhiều tổ chức đã thống kê
                              rằng thực trạng những đơn vị cung cấp đèn năng
                              lượng mặt trời có đến trên 69% đang lừa dối khách
                              hàng. Khi tham gia cuộc khảo sát thực tế các...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/tp-solar-chinh-phuc-niem-tin-nguoi-tieu-dung"
                            title="TP Solar chinh phục niềm tin người tiêu dùng"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/den-nang-luong-mat-troi-tp-solar.png?v=1684211780647"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/den-nang-luong-mat-troi-tp-solar.png?v=1684211780647"
                                className="lazy d-block img img-cover position-absolute"
                                alt="TP Solar chinh phục niềm tin người tiêu dùng"
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
                                href="https://tpsolar.vn/tp-solar-chinh-phuc-niem-tin-nguoi-tieu-dung"
                                title="TP Solar chinh phục niềm tin người tiêu dùng"
                              >
                                TP Solar chinh phục niềm tin người tiêu dùng
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              15-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Niềm tin của khách hàng chính là động lực lớn nhất
                              để thúc đẩy sự phát triển của TP Solar, xây dựng
                              niềm tin đã khó giữ vững niềm tin còn khó hơn. Vì
                              vậy, TP Solar luôn đặt đạo đức kinh doanh, trách
                              nhiệm doanh nghiệp lên hàng đầu. Bên cạnh đó, TP
                              Solar áp dụng những trang thiết bị công nghệ cao
                              để khẳng định vị thế thương hiệu quốc gia xứng
                              đáng với sự tin yêu của người tiêu dùng. Nỗ lực
                              trong từng sản phẩm, phát triển theo hướng công
                              nghệ cao Với hơn 60 mẫu đèn năng lượng...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/top-5-cac-loai-den-nang-luong-mat-troi-pho-bien-nhat-hien-nay"
                            title="Top 5 các loại đèn năng lượng mặt trời phổ biến nhất hiện nay"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/noi-dung-doan-van-ban-cua-ban-2.jpg?v=1683973577910"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/noi-dung-doan-van-ban-cua-ban-2.jpg?v=1683973577910"
                                className="lazy d-block img img-cover position-absolute"
                                alt="Top 5 các loại đèn năng lượng mặt trời phổ biến nhất hiện nay"
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
                                href="/khai-truong-dai-ly-tp-solar-phuc-loc-tai-vinh-cuu-dong-nai"
                                title="Top 5 các loại đèn năng lượng mặt trời phổ biến nhất hiện nay"
                              >
                                Top 5 các loại đèn năng lượng mặt trời phổ biến
                                nhất hiện nay
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              12-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Các loại đèn năng lượng mặt trời vẫn luôn là một
                              trong những “từ khóa” được rất nhiều người dùng
                              tìm kiếm trong vài năm trở lại đây. Thiết bị này
                              không chỉ giúp chúng ta tiết kiệm đáng kể số tiền
                              điện mỗi tháng, mà còn góp phần bảo vệ môi trường
                              cũng như đem lại sự an toàn tuyệt đối cho người sử
                              dụng. Tuy nhiên, khi đi tìm mua đèn năng lượng mặt
                              trời, nhiều khách hàng lại băn khoăn không biết
                              chọn loại đèn nào có giá cả hợp lý cũng như đảm
                              bảo chất lượng...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/top-7-tieu-chi-danh-gia-den-nang-luong-mat-troi-tot-ma-ai-cung-nen-biet"
                            title="Top 7 tiêu chí đánh giá đèn năng lượng mặt trời tốt mà ai cũng nên biết"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/7-plus-tieu-chi-danh-gia-den-nang-luong-mat-troi-tot.png?v=1684118322567"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/7-plus-tieu-chi-danh-gia-den-nang-luong-mat-troi-tot.png?v=1684118322567"
                                className="lazy d-block img img-cover position-absolute loaded"
                                alt="Top 7 tiêu chí đánh giá đèn năng lượng mặt trời tốt mà ai cũng nên biết"
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
                                href="https://tpsolar.vn/top-7-tieu-chi-danh-gia-den-nang-luong-mat-troi-tot-ma-ai-cung-nen-biet"
                                title="Top 7 tiêu chí đánh giá đèn năng lượng mặt trời tốt mà ai cũng nên biết"
                              >
                                Top 7 tiêu chí đánh giá đèn năng lượng mặt trời
                                tốt mà ai cũng nên biết
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              13-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Đã từ lâu đèn năng lượng mặt trời trở thành sản
                              phẩm quen thuộc được xuất hiện ở rất nhiều thành
                              tỉnh thành trên đất nước Việt Nam. Tuy nhiên,
                              nhiều người vẫn chưa biết được dựa vào tiêu chí
                              nào để đánh giá một chiếc đèn năng lượng mặt trời
                              tốt, nhất là khi thị trường hiện nay xuất hiện rất
                              nhiều thương hiệu với mẫu mã và giá cả đa dạng. Để
                              hiểu rõ hơn về vấn đề này, mời quý vị và các bạn
                              cùng tham khảo bài viết: “ Top 7 tiêu chí đánh giá
                              đèn...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/7-ly-do-khien-den-nang-luong-mat-troi-soan-ngoi-den-truyen-thong"
                            title="7 lý do khiến đèn năng lượng mặt trời “soán ngôi” đèn truyền thống"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/7-ly-do-nen-su-dung-den-nang-luong-mat-troi.png?v=1684464216503"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/7-ly-do-nen-su-dung-den-nang-luong-mat-troi.png?v=1684464216503"
                                className="lazy d-block img img-cover position-absolute loaded"
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
                                href="https://tpsolar.vn/7-ly-do-khien-den-nang-luong-mat-troi-soan-ngoi-den-truyen-thong"
                                title="7 lý do khiến đèn năng lượng mặt trời “soán ngôi” đèn truyền thống"
                              >
                                7 lý do khiến đèn năng lượng mặt trời “soán
                                ngôi” đèn truyền thống
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              12-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Lý do khiến đèn năng lượng mặt trời “soán ngôi”
                              đèn truyền thống là gì? Mặc dù chi phí ban đầu
                              phải bỏ ra khá cao so với các loại đèn sợi đốt,
                              đèn huỳnh quang nhưng việc sử dụng đèn năng lượng
                              mặt trời để thay thế cho các loại đèn chiếu sáng
                              thông thường rất được khách hàng quan tâm. Hãy
                              cùng tìm hiểu những lợi ích mà đèn năng lượng mặt
                              trời mang lại là gì nhé! 7 lý do nên sử dụng đèn
                              năng lượng mặt trời 1. Thân thiện với môi trường
                              Khác với các loại đèn truyền...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/top-4-mau-den-nang-luong-mat-troi-san-vuon-cao-cap-gia-re"
                            title="Top 4 mẫu đèn năng lượng mặt trời sân vườn cao cấp, giá rẻ"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/top-4-mau-den-san-vuon-nang-luong-mat-troi-cao-cap-gia-re.png?v=1683776801740"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/top-4-mau-den-san-vuon-nang-luong-mat-troi-cao-cap-gia-re.png?v=1683776801740"
                                className="lazy d-block img img-cover position-absolute loaded"
                                alt="Top 4 mẫu đèn năng lượng mặt trời sân vườn cao cấp, giá rẻ"
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
                                href="https://tpsolar.vn/top-4-mau-den-nang-luong-mat-troi-san-vuon-cao-cap-gia-re"
                                title="Top 4 mẫu đèn năng lượng mặt trời sân vườn cao cấp, giá rẻ"
                              >
                                Top 4 mẫu đèn năng lượng mặt trời sân vườn cao
                                cấp, giá rẻ
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              10-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Với thiết kế đơn giản, dễ dàng sử dụng mà không
                              cần dây điện, thì các mẫu đèn năng lượng mặt trời
                              sân vườn chính là giải pháp mới, hiện đại vừa giúp
                              chiếu sáng sân vườn, lối đi lại vừa có thêm ánh
                              sáng trang trí cảnh quan cho gia đình. Hãy cùng TP
                              Solar tìm hiểu xem những mẫu mã, kiểu dáng được
                              quan tâm nhiều nhất nhé! Những mẫu đèn năng lượng
                              mặt trời sân vườn tốt nhất hiện nay 1. Đèn trụ
                              cổng năng lượng mặt trời Đèn trụ cổng năng lượng
                              mặt trời với nhiều kích thước, nhiều mẫu mã và...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/co-nen-su-dung-den-nang-luong-mat-troi-de-chieu-sang-san-van-dong-san-bong-da"
                            title="Có nên sử dụng đèn năng lượng mặt trời để chiếu sáng sân vận động, sân bóng đá?"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/den-chieu-sang-san-bong.png?v=1685529322937"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/den-chieu-sang-san-bong.png?v=1685529322937"
                                className="lazy d-block img img-cover position-absolute loaded"
                                alt="Có nên sử dụng đèn năng lượng mặt trời để chiếu sáng sân vận động, sân bóng đá?"
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
                                href="https://tpsolar.vn/co-nen-su-dung-den-nang-luong-mat-troi-de-chieu-sang-san-van-dong-san-bong-da"
                                title="Có nên sử dụng đèn năng lượng mặt trời để chiếu sáng sân vận động, sân bóng đá?"
                              >
                                Có nên sử dụng đèn năng lượng mặt trời để chiếu
                                sáng sân vận động, sân bóng đá?
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              08-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Hiện nay, sử dụng đèn năng lượng mặt trời để chiếu
                              sáng sân vận động, sân bóng đá trở nên ngày càng
                              phổ biến vì nhu cầu giải trí ngày càng cao. Đèn
                              năng lượng mặt trời cho ánh sáng phân bổ đồng đều,
                              chân thực, an toàn, không nhấp nháy,... vượt trội
                              hơn hẳn so với các loại đèn chiếu sáng khác. Tại
                              sao nên sử dụng đèn năng lượng mặt trời để chiếu
                              sáng sân bóng đá? Khả năng chiếu sáng tốt Lợi ích
                              đầu tiên và rõ ràng nhất của đèn năng lượng chính
                              là khả năng chiếu sáng đủ rộng, đủ lớn...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/theo-khoa-hoc-anh-sang-vang-hay-anh-sang-trang-tot-cho-mat"
                            title="Theo khoa học ánh sáng vàng hay ánh sáng trắng tốt cho mắt?"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/anh-sang-vang-hay-anh-sang-trang-tot-cho-mat.png?v=1683084203127"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/anh-sang-vang-hay-anh-sang-trang-tot-cho-mat.png?v=1683084203127"
                                alt="Theo khoa học ánh sáng vàng hay ánh sáng trắng tốt cho mắt?"
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
                                href="https://tpsolar.vn/theo-khoa-hoc-anh-sang-vang-hay-anh-sang-trang-tot-cho-mat"
                                title="Theo khoa học ánh sáng vàng hay ánh sáng trắng tốt cho mắt?"
                              >
                                Theo khoa học ánh sáng vàng hay ánh sáng trắng
                                tốt cho mắt?
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              03-05-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Hiện nay, trẻ em bị cận sớm không chỉ do các yếu
                              tố: di truyền, sử dụng điện thoại, xem TV quá
                              nhiều,... mà ánh sáng cũng có thể là nguyên nhân
                              khiến đôi mắt bị suy giảm nhanh về thị lực. Vậy
                              bạn đã biết ánh sáng vàng hay ánh sáng trắng tốt
                              cho mắt chưa? Dưới đây là những lý giải khoa học
                              tốt nhất cho bạn. Đặc điểm, tính chất của ánh sáng
                              vàng Ánh sáng vàng (the warm light), màu sắc trên
                              thang nhiệt độ màu từ khoảng 2700K - 3000K, cho
                              ánh sáng tỏa ra màu hơi vàng và...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 its">
                        <div className="custom-article-item border mb-4 modal-open rounded-10">
                          <a
                            href="https://tpsolar.vn/1001-nhung-dieu-thu-vi-ve-cam-bien-anh-sang"
                            title="1001 điều thú vị về cảm biến ánh sáng!"
                            className="effect-ming"
                          >
                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 aspect ">
                              <img
                                src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/cam-bien-anh-sang-hien-dai.png?v=1682481585153"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/cam-bien-anh-sang-hien-dai.png?v=1682481585153"
                                alt="1001 điều thú vị về cảm biến ánh sáng!"
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
                                href="https://tpsolar.vn/1001-nhung-dieu-thu-vi-ve-cam-bien-anh-sang"
                                title="1001 điều thú vị về cảm biến ánh sáng!"
                              >
                                1001 điều thú vị về cảm biến ánh sáng!
                              </a>
                            </h3>
                            <span className="d-block text-gray small">
                              26-04-2023
                            </span>

                            <div className="sum line_1 line_2 h-auto text-justify">
                              Cảm biến ánh sáng là thiết bị thông minh không thể
                              thiếu trong các sản phẩm đèn năng lượng mặt trời.
                              Thay vì phải bật/tắt đèn thủ công, thì việc sử
                              dụng cảm biến ánh sáng sẽ mang lại nhiều tiện ích
                              trong cuộc sống. Cùng TP Solar tìm hiểu rõ hơn về
                              vấn đề này nhé! Cảm biến ánh sáng là gì? Cảm biến
                              ánh sáng còn được gọi là “Thiết bị quang điện”
                              hoặc “Cảm biến ảnh” bởi vì năng lượng ánh sáng
                              chuyển đổi (photon) thành điện (electron). Nó có
                              khả năng nhận biết các biến đổi của môi trường
                              thông...
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
