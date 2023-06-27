import React, { useEffect } from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";


export const VideoReview = () => {
    useEffect(() => {
        let videos = document.querySelectorAll('.open_video');
        let popupVideo = document.querySelector('.popup_video');
        let close_vd = document.querySelectorAll('.close_video');
        videos.forEach(v => v.addEventListener('click', function (e) {
            e.preventDefault();
            popupVideo.classList.add('open');
            popupVideo.querySelector('.b_video').innerHTML = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${e.target.dataset.video}?enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`
        }));
        close_vd.forEach(v => v.addEventListener('click', function (e) {
            e.preventDefault();
            popupVideo.classList.remove('open');
            setTimeout(function () {
                popupVideo.querySelector('.b_video').innerHTML = ``
            }, 500);
        }))
    })
    return (
        <>
            <Header />
            <div className="breadcrumbs bg-white">
                <div className="container position-relative">
                    <ul className="breadcrumb align-items-center m-0 pl-0 pr-0 small pt-2 pb-2">
                        <li className="home">
                            <a href="/" title="Trang chủ">
                                <svg width={12} height="10.633">
                                    <use href="#svg-home" />
                                </svg>
                                Trang chủ
                            </a>
                            <span className="slash-divider ml-2 mr-2">/</span>
                        </li>
                        <li>Video - Review</li>
                    </ul>
                </div>
            </div>
            <section
                className="blog-layout"
                itemScope=""
                itemType="http://schema.org/Blog"
            >
                <div class="container mt-3 mb-3">
                    <div className="rounded p-3 bg-white col-main" >
                        <h1 class="blog-name font-weight-bold pb-2 pt-2 pt-lg-0 mb-2">Video - Review</h1>
                        <div className="row">
                            <div className="col-12 col-md-9 col-lg-9">
                                <article>
                                    <div className="grid_article">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="item_grid mb-3">
                                                    <div className="img_thm position-relative bor-10 modal-open">
                                                        <a
                                                            href="javascript:;"
                                                            data-video="wREirU---FA"
                                                            className="effect-ming open_video"
                                                        >
                                                            <div className="position-relative w-100 m-0 be_opa modal-open ratio3by2 has-edge aspect">
                                                                <img
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/giai-phap-an-toan-chong-chap-chay.png?v=1686106586927"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/giai-phap-an-toan-chong-chap-chay.png?v=1686106586927"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="wREirU---FA"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")'
                                                                    }}
                                                                />
                                                            </div>
                                                        </a>

                                                    </div>
                                                    <h3 className="title_blo font-weight-bold mt-2">
                                                        <a
                                                            className="line_2"
                                                            href="/dung-bo-lo-giai-phap-an-toan-chong-chap-chay-voi-den-nang-luong-mat-troi-tp-solar"
                                                        >
                                                            Đừng Bỏ Lỡ! Giải Pháp An Toàn Chống "CHẬP - CHÁY" Với Đèn Năng Lượng Mặt Trời
                                                            TP Solar
                                                        </a>

                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3">

                                <div className="position-sticky top_20px">
                                    <div className="aside-content blog-list">
                                        <h3 className="align-items-center article-name d-flex font-weight-bold pt-2 pt-lg-0 mb-3 pb-3 border-bottom">
                                            <img
                                                className="lazy mr-2 loaded"
                                                src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/hot_ico.png?1686880710266"
                                                data-src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/hot_ico.png?1686880710266"
                                                alt="Chủ đề Hot"
                                            />
                                            Chủ đề Hot
                                        </h3>
                                        <ul className="b_item mb-0 p-0">
                                            <li className="d-flex align-items-center position-relative mb-2">
                                                <div className="image mr-2 rounded modal-open">
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
                                            <li className="d-flex align-items-center position-relative mb-2">
                                                <div className="image mr-2 rounded modal-open">
                                                    <a href="/tin-tuc" title="Dự án & hoạt động">
                                                        <img
                                                            src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/no_image.jpg?1686880710266"
                                                            alt="Dự án & hoạt động"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="text">
                                                    <h4 className="font-weight-bold">
                                                        <a href="/tin-tuc" title="Dự án & hoạt động">
                                                            Dự án &amp; hoạt động
                                                        </a>
                                                    </h4>
                                                    <span className="d-block">66 bài tin</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
