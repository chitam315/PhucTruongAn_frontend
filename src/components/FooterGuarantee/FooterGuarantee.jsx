import React from "react";
import "../Guarantee/Guarantee.css";
const FooterGuarantee = () => {
  return (
    <>
      <div className="footer w-full bg-[#F6F6F6]">
        <div className="container flex justify-start">
          <div className="w-4/12 p-[20px] text-[15px] leading-normal">
            <h2 className="mt-[5px] mb-[5px] text-black text-[18px] font-bold">
              CÔNG TY TNHH ĐIỆN PHÚC TRƯỜNG AN
            </h2>
            <div>
              <b>Trụ sở chính</b>: 224 ấp Tân Thành, huyện Bắc Sơn, Trảng Bom, ĐN.
            </div>
            <div>
              <b>Email</b>:{" "}
              <a href="mailto:23011987truong@gmail.com">23011987truong@gmail.com</a>
            </div>
            <div>
              <b>Mã số thuế</b>: 0109008737
            </div>
            <div>
              <b>Hotline mua hàng</b>: <a href="tel:0933819292">0933 819 292</a>
            </div>
          </div>
          <div className="w-4/12 p-[20px] text-[15px] leading-normal">
            <h2 className="text-[18px] font-bold">
              TRUNG TÂM CHĂM SÓC KHÁCH HÀNG
            </h2>
            <div>Sáng: 8h30-12h00, Chiều 14h00-17h30</div>
            <div>224 ấp Tân Thành, huyện Bắc Sơn, Trảng Bom, ĐN</div>
            <div>
              <b>Tổng đài CSKH</b>: 0933 819 292
            </div>
          </div>
          <div className="w-4/12 p-[20px] text-[15px] leading-normal">
            <h2 className="text-[18px] font-bold">TRUNG TÂM BẢO HÀNH</h2>
            <div>
              224 ấp Tân Thành, huyện Bắc Sơn, Trảng Bom, ĐN
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterGuarantee;
