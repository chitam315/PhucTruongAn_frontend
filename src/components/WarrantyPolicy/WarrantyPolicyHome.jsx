import React from "react";
import HeaderGuarantee from "../HeaderGuarantee/HeaderGuarantee";
import FooterGuarantee from "../FooterGuarantee/FooterGuarantee";

const WarrantyPolicyHome = () => {
  return (
    <>
      <HeaderGuarantee />
      <div class="nav">
        <div class="container">
          <ul
            class="breadcrumb"
            itemscope=""
            itemtype="http://schema.org/BreadcrumbList"
          >
            <li
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <a itemprop="item" href="/">
                <span itemprop="name">Trang chủ</span>
              </a>
              <meta itemprop="position" content="1" />
            </li>
            /
            <li
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <a
                itemprop="item"
                href="/Guest/Intro?ID=48a829ef-9841-427a-8e97-8ce85f3a51cd"
              >
                <span itemprop="name">Chính sách bảo hành</span>
              </a>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>
      </div>
      <div class="intro">
        <div class="container">
          <ul class="list list-none">
            <li class="on">
              <a href="/Guest/Intro?ID=48a829ef-9841-427a-8e97-8ce85f3a51cd">
                Chính sách bảo hành
              </a>
            </li>
            <li class="">
              <a href="/Guest/Intro?ID=438923f8-c6c9-4eda-a4d5-5ab1bd46527d">
                Chính sách bảo mật
              </a>
            </li>
            <li class="">
              <a href="/Guest/Intro?ID=427c66f8-6bd3-44df-95e7-1d7db601e176">
                Chính sách vận chuyển
              </a>
            </li>
            <li class="">
              <a href="/Guest/Intro?ID=3332c4c2-7673-474c-a674-9748171aa745">
                Chính sách đổi trả
              </a>
            </li>
            <li class="">
              <a href="/Guest/Intro?ID=221e3fbe-fed9-4f72-95a7-e7aaa6246e31">
                Điều khoản
              </a>
            </li>
            <li class="">
              <a href="/Guest/Intro?ID=ae07051c-eb33-40f5-8a9c-14978c81599d">
                Chính Sách Thanh Toán
              </a>
            </li>
            <li class="">
              <a href="/Guest/Intro?ID=bf7474fc-1e74-4585-b61d-07e1d6bd0d86">
                Chính Sách Kiểm Hàng
              </a>
            </li>
          </ul>
          <div class="detail"></div>
          <h1>ksdfhisdfyasdifhasdfh</h1>
        </div>
      </div>

      <FooterGuarantee />
    </>
  );
};

export default WarrantyPolicyHome;
