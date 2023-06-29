import React from "react";
import HeaderGuarantee from "../HeaderGuarantee/HeaderGuarantee";
import FooterGuarantee from "../FooterGuarantee/FooterGuarantee";
import "./WarrantyStation.css";

const WarrantyStation = () => {
  return (
    <>
      <HeaderGuarantee />
      <div className="nav w-full h-[30px] bg-[#f9faf9]">
        <div className="container">
          <ul
            className="breadcrumb uppercase h-[30px] text-[14px] items-center"
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
              <a itemprop="item" href="/Guest/Support">
                <span itemprop="name" className="font-bold">
                  Trạm bảo hành
                </span>
              </a>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>
      </div>
      <div className="support">
        <div className="container">
          <h1 className="text-[2em] font-bold mt-[0.67em] mb-[0.67em]">
            TRẠM BẢO HÀNH
          </h1>
          <div className="filter">
            <select
              id="SupportCity"
              className="w-[220px] h-[40px] mr-[10px] bg-[#f5f5f5] border border-solid border-1 border-gray-300"
            >
              <option value="">-</option>
              <option value="6952f679-32f5-4918-b2e5-154a8ba098ac">
                An Giang
              </option>
              <option value="729c7ebf-e21c-47f0-ba13-f39a8ef5c026">
                Bà Rịa - Vũng Tàu
              </option>
              <option value="c2ded445-6598-448d-b370-0183a0823f64">
                Bắc Giang
              </option>
              <option value="c21904ee-1690-444b-9397-bbf5f3ec2558">
                Bắc Kạn
              </option>
              <option value="1e24890c-60cd-4be2-85c2-860951e6ace3">
                Bạc Liêu
              </option>
              <option value="a9f527c1-ac2d-4b0e-b2ce-6e0d8198c8fb">
                Bắc Ninh
              </option>
              <option value="3cee8ba6-2c03-4f43-a50b-beff09656b43">
                Bến Tre
              </option>
              <option value="771eef8d-0049-45d0-9574-e2042b4ac5e0">
                Bình Định
              </option>
              <option value="bab90063-7385-4883-8c20-682f18589007">
                Bình Dương
              </option>
              <option value="29bf7fe8-744c-474a-b029-67e3d6791fb2">
                Bình Phước
              </option>
              <option value="d35e640d-8709-4109-93b1-ad79ad75054f">
                Bình Thuận
              </option>
              <option value="0347b074-e464-4420-8ecf-cddea1a8cae6">
                Cà Mau
              </option>
              <option value="b10ec6a0-ffeb-456c-b0e8-492d7118ae82">
                Cần Thơ
              </option>
              <option value="57c03308-5363-4855-b5c0-78b4e34a260d">
                Cao Bằng
              </option>
              <option value="9de447cf-54d7-4363-83b4-beb3a922d154">
                Đà Nẵng
              </option>
              <option value="ae8910fb-635c-4aff-b42f-7c2b832f8191">
                Đắk Lắk
              </option>
              <option value="c091b03b-4b4e-400e-a424-ea600d5e88dd">
                Đăk Nông
              </option>
              <option value="9c2ca116-c2f2-497e-be94-0362e90c074b">
                Đắk Nông
              </option>
              <option value="f9398f3f-eadd-445e-81b2-01bdd79fb742">
                Điện Biên
              </option>
              <option value="be28fe8c-46e4-4c8f-8f57-f513054f1086">
                Đồng Nai
              </option>
              <option value="6cd71204-17b3-4048-b3c2-28f720fe2ed6">
                Đồng Tháp
              </option>
              <option value="565494a7-b3a3-48cd-a69c-73b211f00e6d">
                Gia Lai
              </option>
              <option value="7c0f2ec3-950b-4a44-ad38-2297e46ae756">
                Hà Giang
              </option>
              <option value="06a66c35-566c-4482-9698-aef312f365c5">
                Hà Nam
              </option>
              <option value="7f41884b-bdfd-4712-8b31-01e85c8e5bc7">
                Hà Nội
              </option>
              <option value="ab710f7c-4cff-4ffc-8338-757101fd1cfd">
                Hà Tĩnh
              </option>
              <option value="f6cca8aa-3759-4f9d-87f5-6c0fb1fc7175">
                Hải Phòng
              </option>
              <option value="b9bf52e3-75d4-4270-b44a-7f698b8c837d">
                Hậu Giang
              </option>
              <option value="a7f0f373-dd16-405c-977e-4adc5c78626f">
                Hồ Chí Minh
              </option>
              <option value="51d4ee86-1763-40f8-9c3d-d039dbf4db72">
                Hòa Bình
              </option>
              <option value="81f98d1c-97d4-49bf-81e0-68812d5cb1e2">Huế</option>
              <option value="4bd93dfe-4435-4d92-ac7e-9b8b6afc6e9c">
                Hưng Yên
              </option>
              <option value="8d0c4a88-4aad-4838-9941-597034c6ea9b">
                Khánh Hòa
              </option>
              <option value="8a457f36-87f7-4f26-bed1-25ae9d8de289">
                Kiên Giang
              </option>
              <option value="e12bbe3b-3f3d-41a0-b2ae-c4730f53dbb9">
                Kon Tum
              </option>
              <option value="4920d21a-1bc1-4c7b-8eda-a149bb3cb884">
                Lai Châu
              </option>
              <option value="cf5dcc3f-e036-4066-8209-81f435cc9f2a">
                Lâm Đồng
              </option>
              <option value="ea8aec02-2fbb-4aa8-b284-04baa0fa8399">
                Lạng Sơn
              </option>
              <option value="4da56d0a-6b53-4b7e-babb-6cec7aba0e96">
                Lào Cai
              </option>
              <option value="c7c02a28-4f6a-4e4f-958a-337974e1b503">
                Long An
              </option>
              <option value="c93f32c0-9947-4e37-af66-8953136ae893">
                Nam Định
              </option>
              <option value="f4ebfade-624e-4a13-bca0-75c40d5299a3">
                Nghệ an
              </option>
              <option value="1ffd151d-f47e-44d4-9e15-b7d437b450eb">
                Ninh Bình
              </option>
              <option value="750e5b9a-6d8b-41ac-b1fd-e74df4e6c4ed">
                Ninh Thuận
              </option>
              <option value="9897e431-0e78-4ff0-9273-c08d3062c96d">
                Phú Thọ
              </option>
              <option value="f8bec3cf-fc43-4b2b-aa9e-2f9e15991a2e">
                Phú Yên
              </option>
              <option value="1bf500d9-4b3d-426a-8774-620928d94e7e">
                Quảng Bình
              </option>
              <option value="e1caa420-5ba8-47d2-863c-93e0e75d7bc3">
                Quảng Nam
              </option>
              <option value="38e258fe-aecd-4057-940b-3c3c4830fd52">
                Quảng Ngãi
              </option>
              <option value="b3f0926e-6679-4fbe-889f-140d7858b924">
                Quảng Ninh
              </option>
              <option value="7f33c3f7-e7c5-48ab-9cd9-f21ec39a3828">
                Quảng Trị
              </option>
              <option value="c55ec312-b75c-43ed-b33e-933f5382f46a">
                Sóc Trăng
              </option>
              <option value="a430815a-0ec0-4ec1-ba9b-148f8afe5566">
                Sơn La
              </option>
              <option value="8b4af1a8-4b5a-480c-9911-f3bb7ff509d1">
                Tây Ninh
              </option>
              <option value="5ae880e3-e74b-4377-8cf9-e6b0e9fe7f4c">
                Thái Bình
              </option>
              <option value="88629495-5def-49ff-bd06-f8a6e2e8cfea">
                Thái Nguyên
              </option>
              <option value="36e43856-f07f-41cf-ad85-18130067002b">
                Thanh Hóa
              </option>
              <option value="f0859fbc-6a21-473a-ac3a-8297268e6c3e">
                Thành phố Hải Dương
              </option>
              <option value="3e3e2012-7ced-45a8-b0e4-ced645e95be9">
                Tiền Giang
              </option>
              <option value="20c929a6-abd5-4faf-8883-a827579afaeb">
                Trà Vinh
              </option>
              <option value="c2319040-70cf-44ac-a9b4-d108c46bdcab">
                Tuyên Quang
              </option>
              <option value="4427317b-8773-4fb2-90c3-38586f2361a2">
                Vĩnh Long
              </option>
              <option value="3753d0f8-851a-44a5-b366-0f9f87a1bed2">
                Vĩnh Phúc
              </option>
              <option value="8490c957-6d3f-4a61-8b5a-4a0883e432d3">
                Yên Bái
              </option>
            </select>
            <select id="SupportGroup" className="hidden w-[220px] h-[40px]">
              <option value="">-</option>
            </select>
            <input
              className="text-[15px] w-[300px] h-[40px] mr-[10px] px-0 md:px-15 border border-solid border-1 border-gray-300"
              type="text"
              id="SupportName"
              placeholder="Tìm theo tên / Số điện thoại"
              value=""
            />
            <button id="SupportSearch" className="hover:bg-red">
              Tìm kiếm
            </button>
          </div>
          <ul>
            <li>
              <label>Trung tâm bảo hành miền Bắc - Trung</label>
              <span>
                <i className="fal fa-map-marker-alt"></i> Số 40, lô C3, Khu đô thị
                mới Geleximco Lê Trọng Tấn, Phường Dương Nội , Hà Đông, Hà Nội,
                Việt Nam
              </span>
              <a href="tel:0345845444">
                <i className="fal fa-phone-volume"></i>0345845444
              </a>
            </li>
            <li className="w-[calc(33% - 52px)] ">
              <label>Trung tâm bảo hành miền Nam</label>
              <span>
                <i className="fal fa-map-marker-alt"></i> 75 Võ Nguyên Giáp, Phường
                Phước Tân , Biên Hòa, Đồng Nai, Việt Nam
              </span>
              <a href="tel:0395534333">
                <i className="fal fa-phone-volume"></i>0395534333
              </a>
            </li>
          </ul>
        </div>
      </div>
      <FooterGuarantee />
    </>
  );
};

export default WarrantyStation;
