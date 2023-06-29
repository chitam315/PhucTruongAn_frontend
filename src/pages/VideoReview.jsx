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
                                                              
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="wREirU---FA"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/danh-bay-cai-nong-mua-he-khong-ton-1-dong-tien-dien.png?v=1685940393477"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/danh-bay-cai-nong-mua-he-khong-ton-1-dong-tien-dien.png?v=1685940393477"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="Y8zsYm8EBvs"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/thiet-ke-chua-co-ten.png?v=1683187588467"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/thiet-ke-chua-co-ten.png?v=1683187588467"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                    alt={`
                                                                    'Đại gia chân đất' Quang Tèo thắp sáng sân vườn căn biệt thự 1000m2 KHÔNG TỐN 1 ĐỒNG tiền điện
                                                                    `}
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="wREirU---FA"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/kich-hoat-bao-hanh2-1.png?v=1679991781387"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/kich-hoat-bao-hanh2-1.png?v=1679991781387"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                    alt='Hướng dẫn kích hoạt Bảo hành điện tử - Cải tiến mới trong thời kỳ công nghệ số'
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="AvSTtFAPLRI"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/db05664700abddf584ba.jpg?v=1679389073307"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/db05664700abddf584ba.jpg?v=1679389073307"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                    alt='So sánh Đèn bàn chải NLMT 200W chính hãng và đèn trôi nổi trên thị trường'
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="dnYy5jLOou4"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/thume-ytb-so-sanh.png?v=1679388839140"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/thume-ytb-so-sanh.png?v=1679388839140"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                    alt={
                                                                        `
                                                                        [CẢNH BÁO] “Cú lừa” với đèn năng lượng mặt trời giá rẻ!
                                                                        `
                                                                    }
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="J3aEC-CTZpU"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/screenshot-1144.png?v=1667446426407"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/screenshot-1144.png?v=1667446426407"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="I3FRHXwyOoc"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/14.png?v=1665452846677"
                                                                    data-src="//bizweb.dktcdn.net/thumb/large/100/463/111/articles/14.png?v=1665452846677"
                                                                    className="d-block img img-cover position-absolute lazy loaded"
                                                                />
                                                                <div
                                                                    className="position-absolute w-100 h-100 video_open lazy_bg loaded"
                                                                    data-video="OjR0Y8b5AUY"
                                                                    data-background="url(//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266)"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("//bizweb.dktcdn.net/100/463/111/themes/889675/assets/play-button.png?1686880710266")',
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundPosition: "center center"
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
            <style>
                {
                    `
                    .popup_video{
                        top: 0 !important;
                        left: 0;
                        visibility: hidden;
                        z-index: 0;
                        opacity: 0;
                        transition: all 0.5s;
                        pointer-events: none;
                }
                    .popup_video.open {
                        z-index: 12;
                        background: rgba(0,0,0,0.5);
                        visibility: visible;
                        opacity: 1;
                        pointer-events: auto;
                    }
                    .popup_video .b_video {
                        width: 800px;
                        max-width: calc(100% - 10px);
                    }
                    .embed-responsive {
                        position: relative;
                        display: block;
                        width: 100%;
                        padding: 0;
                        overflow: hidden;
                    }
                    .embed-responsive-16by9::before {
                        padding-top: 56.25%;
                    }
                    .embed-responsive::before {
                        display: block;
                        content: "";
                    }
                    .embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 0;
                    }
                    iframe {
                        overflow-clip-margin: content-box !important;
                        border-width: 2px;
                        border-style: inset;
                        border-color: initial;
                        border-image: initial;
                        overflow: clip !important;
                    }
                    .popup_video .close_video {
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        border: 2px solid #000;
                        right: -6px;
                        top: -12px;
                        transition: all 0.3s;
                    }
                    .popup_video .close_video img {
                        max-width: 16px;
                        filter: brightness(0);
                        padding: 0px;
                    }

                    `
                }
            </style>
            <div className="popup_video position-fixed w-100 h-100 justify-content-center align-items-center d-flex">
                <div className="position-relative max-100">
                    <a
                        href="javascript:;"
                        className="close_video position-absolute d-flex m_white_bg_module justify-content-center align-items-center"
                        title="Đóng"
                    >
                        <img
                            alt="Đóng"
                            src="//bizweb.dktcdn.net/100/463/111/themes/889675/assets/close.png?1686880710266"
                        />
                    </a>
                    <div className="b_video p-2 p-md-3 m_white_bg_module rounded m-auto" ></div>
                </div>
            </div>

            <Footer />
        </>
    )
}
