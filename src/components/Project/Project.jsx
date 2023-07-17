import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../../assets/variables.css";

import Footer from "../Footer/Footer";
import "./Project.css";
import Header from "../Home/Header";
import HeaderResponsive from "../Home/HeaderResponsive";
export default function Project() {
  return (
    <>
      <HeaderResponsive />
      <Header />
      <div class="col-right position-relative content-project">
        <div className="contentWarp ">
          <div className="breadcrumbs bg-white">
            <div className="container-sm position-relative">
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

            <div className="container-sm mt-3 mb-3 lastest-articles">
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
            <div className="container-sm mt-3 mb-3">
              <div className="rounded p-lg-3 pl-2 pr-2 bg-white">
                <h3 className="flex items-center text-[1.8em] font-bold pt-2 pt-lg-0">
                  <img
                    className="lazy mr-2 loaded"
                    src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/hot_ico.png?1686880710266"
                    alt="Chủ đề Hot"
                  />
                  Chủ đề Hot
                </h3>
                <ul className="flex flex-wrap p-0 m-0 w-full">
                  <li className="flex items-center relative col-3 col-tb-4 col-tbs-6">
                    <a
                      href="/huong-dan-su-dung"
                      title="Hướng dẫn sử dụng"
                      className="w-[4em] h-[4em]"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/no_image.jpg?1686880710266"
                        alt="Hướng dẫn sử dụng"
                        className="w-full h-full"
                      />
                    </a>

                    <div className="text">
                      <h4 className="font-bold text-[1.1em]">
                        <a href="/huong-dan-su-dung" title="Hướng dẫn sử dụng">
                          Hướng dẫn sử dụng
                        </a>
                      </h4>
                      <span className="font-medium text-[0.8em] block">
                        9 bài tin
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center relative col-3 col-tb-4 col-tbs-6">
                    <a
                      href="/du-an-&-hoat-dong"
                      title="Hướng dẫn sử dụng"
                      className="w-[4em] h-[4em]"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/no_image.jpg?1686880710266"
                        alt="Dự án & hoạt động"
                        className="w-full h-full"
                      />
                    </a>

                    <div className="text">
                      <h4 className="font-bold text-[1.1em]">
                        <a href="/du-an-&-hoat-dong" title="Dự án & hoạt động">
                          Dự án & hoạt động
                        </a>
                      </h4>
                      <span className="font-medium text-[0.8em] block">
                        6 bài tin
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Du an va hoat dong */}
            <div className="container-sm my-3 bg-white p-3 rounded-[10px] w-full">
              <h1 className="text-[1.8em]">Dự án & Hoạt động</h1>

              <div className="flex flex-wrap w-full">
                {arrProject.map((item, index) => (
                  <div
                    className="col-4 col-tb-6 col-project-full p-2"
                    key={index}
                  >
                    <div className="border-gray rounded-[8px] overflow-hidden w-full">
                      <a
                        href={item.url}
                        title={item.title}
                        className="block w-full h-[220px]"
                      >
                        <img
                          src={item.image}
                          className="h-full w-full p-0 "
                          alt={item.title}
                        />
                      </a>
                      <div className="p-2">
                        <div className="overflow-x-auto whitespace-nowrap py-2 project-tags h-[45px]">
                          {item.item.map((i, index2) => (
                            <a
                              className="rounded-[20px] bg-[#f5c013] p-[5px] font-medium text-[#854d0e] mr-[10px]"
                              href={i.url}
                              title={i.title}
                              key={index2}
                            >
                              {i.title}
                            </a>
                          ))}
                        </div>

                        <h3 className="mt-2">
                          <a
                            className="line-2 font-bold"
                            href={item.url}
                            title={item.title}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <span className="text-[0.8em] text-[#3c3c3c]">
                          {item.date}
                        </span>

                        <div className="line-2 text-[0.9em] text-justify">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

const arrProject = [
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/dai-ly-tp-solar-aee9ce22-f67c-4ce1-b7a8-066af6fd11cb.png?v=1688549089983",
    url: "https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-anh-tu-tai-hiep-hoa-bac-giang",
    title:
      "Khai trương đại lý TP Solar - Đại lý Anh Tú tại Hiệp Hòa, Bắc Giang",
    date: "30-06-2023",
    description:
      "Nắm&nbsp;bắt cơ hội tiềm năng về đèn năng lượng mặt trời, đại lý Anh Tú đã hợp tác với Công ty Cổ phần TP Solar, đưa đèn năng lượng mặt trời về thị trường Bắc Giang, vì đèn năng lượng mặt trời có tính chiếu sáng vượt trội có thể thay thế đèn điện thông thường, với nhiều mẫu mã khác nhau được sản xuất theo tiêu chuẩn quốc tế, chất lượng đảm bảo, giá thành hợp lý nên cực kỳ dễ tiếp cận với khách hàng. Từ&nbsp;nay đến hết ngày 15/7/2023, Đại lý Anh Tú triển khai chương trình ưu...",
    item: [
      {
        title: "kinh doanh đèn năng lượng",
        url: "/",
      },
      {
        title: "TP Solar",
        url: "/",
      },
      {
        title: "đèn năng lượng mặt trời",
        url: "/",
      },
    ],
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi.png?v=1685759609850",
    url: "https://tpsolar.vn/ai-co-the-tro-thanh-dai-ly-den-nang-luong-mat-troi",
    title: "Ai có thể trở thành đại lý đèn năng lượng mặt trời?",
    date: "03-06-2023",
    description:
      "Bạn&nbsp;yêu thích kinh doanh các sản phẩm đèn năng lượng mặt trời đi đầu xu hướng hiện nay. Nhưng bạn còn nhiều băn khoăn: Ai có thể trở thành đại lý đèn năng lượng mặt trời? Không biết khi nào thì có thể bắt đầu? Nhập hàng ở đâu đảm bảo chất lượng? Cùng TP Solar giải đáp những thắc mắc đó qua bài viết dưới đây nhé! Ai có thể trở thành đại lý đèn năng lượng mặt trời? Làm đại lý đèn năng lượng mặt trời là: Bên giao đại lý tức là Công ty Cổ phần TP Solar sẽ...",
    item: [
      {
        title: "kinh doanh đèn năng lượng",
        url: "/",
      },
      {
        title: "TP Solar",
        url: "/",
      },
      {
        title: "đèn năng lượng mặt trời",
        url: "/",
      },
    ],
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/dai-ly-tp-solar-966a33b2-f4b6-45a6-8d55-f0b5d12769fd.png?v=1688549119767",
    url: "https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-ha-an-tai-bim-son-thanh-hoa",
    title: "Khai trương đại lý TP Solar - Đại lý Hà An tại Bỉm Sơn, Thanh Hóa",
    date: "01-06-2023",
    description:
      "Vừa qua, Công ty Cổ phần TP Solar vừa ký kết phân phối sản phẩm đèn năng lượng mặt trời cùng Đại lý Hà An tọa lạc tại Thị xã Bỉm Sơn, Thanh Hóa, với giao thông thuận lợi, giúp quý khách có thể tìm được địa chỉ bán đèn năng lượng mặt trời tại Thanh Hóa nhanh chóng, cũng dễ dàng trong việc vận chuyển hàng hóa.",
    item: [
      {
        title: "kinh doanh đèn năng lượng",
        url: "/",
      },
      {
        title: "TP Solar",
        url: "/",
      },
      {
        title: "đèn năng lượng mặt trời",
        url: "/",
      },
    ],
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/dai-ly-tp-solar-aecfb1f7-007f-4b97-9e55-f077c8afd564.png?v=1688549161187",
    url: "https://tpsolar.vn/khai-truong-dai-ly-tp-solar-dai-ly-hoang-huy-tam-ky-quang-nam",
    title: "Khai trương đại lý TP Solar - Đại lý Hoàng Huy, Tam Ky, Quảng Nam",
    date: "24-05-2023",
    description:
      "Hiện nay, do nhu cầu sử điện tăng cao, các chi phí tiền điện hay vấn đề ô nhiễm môi trường đang ở mức báo động. Trước tình hình đó, ngoài sử dụng điện hợp lý - Khai thác nguồn năng lượng mới đang được chú trọng hàng đầu và một trong những giải pháp tối ưu nhất được ứng dụng là năng lượng mặt trời",
    item: [
      {
        title: "kinh doanh đèn năng lượng",
        url: "/",
      },
      {
        title: "TP Solar",
        url: "/",
      },
      {
        title: "đèn năng lượng mặt trời",
        url: "/",
      },
    ],
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/biet-thu-nha-nghe-si-le-giang.png?v=1684727303140",
    url: "https://tpsolar.vn/tp-solar-lap-dat-den-nang-luong-mat-troi-cho-biet-thu-cua-nghe-si-le-giang",
    title:
      "TP Solar lắp đặt đèn năng lượng mặt trời cho biệt thự của Nghệ sĩ Lê Giang",
    date: "22-05-2023",
    description:
      "Nghệ sĩ Lê Giang chắc hẳn đã quá quen thuộc với tất cả người dân Việt Nam bởi sự tài năng và dí dỏm, duyên dáng của mình thông qua những tác phẩm nghệ thuật hài - cải lương.",
    item: [
      {
        title: "kinh doanh đèn năng lượng",
        url: "/",
      },
      {
        title: "TP Solar",
        url: "/",
      },
      {
        title: "đèn năng lượng mặt trời",
        url: "/",
      },
    ],
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/dai-ly-tp-solar-f130c4a1-5afc-4917-8933-d69b5e4c37ab.png?v=1688549197590",
    url: "https://tpsolar.vn/khai-truong-dai-ly-tp-solar-lac-tran-tai-dong-hoi-quang-binh",
    title: "Khai trương đại lý TP Solar - Lạc Trần tại Đồng Hới, Quảng Bình",
    date: "22-05-2023",
    description:
      "Hiện nay, đèn năng lượng mặt trời được rất nhiều người quan tâm đến vì có tính năng chiếu sáng vượt trội mà người tiêu dùng lựa chọn để thay thế đèn thông thường, bởi nó chiếu sáng miễn phí và thân thiện với môi trường. Do đó, vừa qua tại Thành phố Đồng hới, Quảng Bình,",
    item: [
      {
        title: "kinh doanh đèn năng lượng",
        url: "/",
      },
      {
        title: "TP Solar",
        url: "/",
      },
      {
        title: "đèn năng lượng mặt trời",
        url: "/",
      },
    ],
  },
];
