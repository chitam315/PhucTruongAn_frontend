import React from "react";

import "../../assets/variables.css";
import Header from "../Home/Header";
import Footer from "../Footer/Footer";
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
            {/* Du an va hoat dong */}
            <div className="container-sm my-3 bg-white p-3 rounded-[10px] w-full">
              <h1 className="text-[1.8em]">Thông tin hữu ích</h1>

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
      "//bizweb.dktcdn.net/thumb/large/100/463/111/articles/tro-thanh-dai-ly-den-nang-luong-mat-troi-cuc-de.png?v=1683777841857",
    url: "https://tpsolar.vn/chuyen-gi-xay-ra-neu-tro-thanh-dai-ly-den-nang-luong-mat-troi",
    title: "Ai có thể trở thành đại lý đèn năng lượng mặt trời?",
    date: "03-06-2023",
    description:
      "Bạn yêu thích kinh doanh các sản phẩm đèn năng lượng mặt trời đi đầu xu hướng hiện nay. Nhưng bạn còn nhiều băn khoăn: Ai có thể trở thành đại lý đèn năng" +
      "lượng mặt trời? Không biết khi nào thì có thể bắt đầu? Nhập hàng ở đâu đảm bảo chất lượng? Cùng TPSolar giải đáp những thắc mắc đó qua bài viết dưới đây nhé! Ai có thể trở thành đại lý đèn năng lượng" +
      "mặt trời? Làm đại lý đèn năng lượng mặt trời là: Bên giao đại lý tức là Công ty Cổ phần TP Solar sẽ...",
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
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/den-nang-luong-mat-troi-loai-nao-tot-1.png?v=1686646962557",
    url: "https://tpsolar.vn/lua-chon-den-nang-luong-mat-troi-phu-hop-cho-gia-dinh-hoac-doanh-nghiep",
    title:
      "Lựa chọn đèn năng lượng mặt trời phù hợp cho gia đình hoặc doanh nghiệp",
    date: "13-06-2023",
    description:
      "Giá bán lẻ điện bình quân tăng 3%, việc này gây ảnh hưởng nghiêm trọng đến hoạt động sản xuất kinh doanh của doanh nghiệp và đời sống người dân khi mùa nắng nóng đã tới. Vậy giải pháp nào cho người dân và doanh nghiệp khi giá điện ngày một tăng cao?" +
      "Năng lượng mặt trời - nguồn năng lượng miễn phí, giúp mọi người có thể tiết kiệm điện, giảm chi phí hóa đơn tiền điện hàng tháng. Ma trận” đèn năng lượng mặt trời trên thị trường hiện nay",
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
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/top5-mau-den-nang-luong-mat-troi-chat-luong-gia-re.png?v=1686389538487",
    url: "https://tpsolar.vn/5-mau-den-nang-luong-mat-troi-tot-nhat-duoc-nhieu-nguoi-chon-mua",
    title: "5 mẫu đèn năng lượng mặt trời tốt nhất được nhiều người chọn mua",
    date: "10-06-2023",
    description:
      "Ban đang cân nhắc không biết nên chọn đèn năng lượng mặt trời loại nào tốt? Dưới đây là danh sách top 5 mẫu đèn năng lượng mặt trời tốt nhất được người tiêu dùng tin tưởng đặt mua nhiều trong vòng 3 năm trở lại đây. Hãy cùng tham khảo ngay bài viết dưới đây để lựa chọn cho mình loại đèn phù hợp nhé!" +
      "Top 5 mẫu đèn trong bài được đánh giá dựa trên những tiêu chí khắt khe cả về giá thành, mức độ hiệu quả, thời gian sử dụng của đèn. 5 mẫu đèn năng lượng mặt...",
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
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/uu-diem-vuot-troi-cua-den-nang-luong-mat-troi.png?v=1686275762837",
    url: "https://tpsolar.vn/uu-diem-cua-den-nang-luong-mat-troi-so-voi-cac-loai-den-co-mat-tren-thi-truong",
    title:
      "Ưu điểm của đèn năng lượng mặt trời so với các loại đèn có mặt trên thị trường",
    date: "07-06-2023",
    description:
      "Trong bối cảnh giá điện ngày một tăng cao như hiện nay, thì đèn năng lượng mặt trời là một giải pháp hữu hiệu về mặt kinh tế cho người sử dụng, giảm áp lực lên điện lưới quốc gia và góp phần bảo vệ môi trường.&nbsp; Nguyên lý hoạt động của đèn năng lượng mặt trời. Đèn năng lượng mặt trời là loại đèn sử dụng ánh sáng mặt trời chuyển hóa thành điện năng để đáp ứng nhu cầu chiếu sáng. Đèn năng lượng mặt trời còn được gọi bằng nhiều cái tên khác nhau như: Đèn Led năng lượng...",
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
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/den-nang-luong-mat-troi-sang-yeu.png?v=1685952044387",
    url: "https://tpsolar.vn/nhung-nguyen-nhan-khien-den-nang-luong-mat-troi-sang-yeu",
    title: "Những nguyên nhân khiến đèn năng lượng mặt trời sáng yếu",
    date: "03-06-2023",
    description:
      "Đèn năng lượng mặt trời đã trở thành sản phẩm không còn quá xa lạ gì với mọi người. Đôi khi trong quá trình sử dụng bạn có thể sẽ gặp phải trường hợp đèn sáng yếu hay sau một thời gian sáng lại mờ đi hoặc tắt hẳn không sáng. Vậy tại sao lại có hiện tượng đèn năng lượng mặt trời sáng yếu? Cách xử lý ra sao? Cùng TP Solar giải đáp trong bài viết dưới đây nhé! Hiện tượng đèn năng lượng mặt trời sáng yếu Hiện tượng đèn năng lượng mặt trời sáng yếu là hiện tượng...",
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
      "https://bizweb.dktcdn.net/thumb/large/100/463/111/articles/tiet-kiem-dien-mua-nang-nong.png?v=1685758283087",
    url: "https://tpsolar.vn/tiet-kiem-dien-giua-mua-nang-nong",
    title: "Tiết kiệm điện giữa mùa nắng nóng",
    date: "03-06-2023",
    description:
      "Điều hòa - công nghệ hiện đại giúp chúng ta giải nhiệt nhanh hơn, mang đến sự thoải mái trong cuộc sống nhưng cùng lúc đó sẽ “nung” nóng Trái Đất. Theo ước tính thì đến trước cuối thập kỷ này thế giới sẽ có thêm 1 tỉ chiếc điều hòa. Thị trường được dự đoán tăng gần gấp đôi trước năm 2024. Sức nóng từ điều hòa Thời tiết&nbsp;ngày càng nóng bức như để thử thách giới hạn sinh tồn của con người. Với vô vàn những tiện ích, đủ các công suất, mức giá khác nhau thì điều hòa không khí...",
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
