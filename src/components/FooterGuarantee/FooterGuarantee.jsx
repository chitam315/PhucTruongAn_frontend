import React from "react";
import "../Guarantee/Guarantee.css";
const FooterGuarantee = () => {
  return (
    <>
      <div className="footer w-full bg-[#F6F6F6]">
        <div className="container flex justify-start">
          <div className="w-4/12 p-[20px] text-[15px] leading-normal">
            <h2 className="mt-[5px] mb-[5px] text-black text-[18px] font-bold">
              CÔNG TY CỔ PHẦN TP SOLAR
            </h2>
            <div>
              Giấy chứng nhận Đăng ký Kinh doanh số 0109008737 do Sở Kế hoạch và
              Đầu tư Thành phố Hà Nội cấp ngày 29/11/2019
            </div>
            <div>
              <b>Trụ sở chính</b>: Số 20, Lô C61 KĐT Geleximco, Đường Lê Trọng
              Tấn, Phường Dương Nội, Quận Hà Đông,TP Hà Nội, Việt Nam.
            </div>
            <div>
              <b>Chi nhánh miền Nam</b>: 75 Võ Nguyên Giáp, Phước Tân, Biên Hòa,
              Đồng Nai
            </div>
            <div>
              <b>Email</b>:{" "}
              <a href="mailto:hotro@tpsolar.vn">hotro@tpsolar.vn</a>
            </div>
            <div>
              <b>Mã số DN</b>: 0109008737
            </div>
            <div>Website: http://tpsolar.vn</div>
            <div>
              <b>Hotline mua hàng</b>: <a href="tel:0363993993">0363 993 993</a>
            </div>
          </div>
          <div className="w-4/12 p-[20px] text-[15px] leading-normal">
            <h2 className="text-[18px] font-bold">
              TRUNG TÂM CHĂM SÓC KHÁCH HÀNG
            </h2>
            <div>Sáng: 8h30-12h00, Chiều 14h00-17h30</div>
            <div>Dương nội, Hà Đông, Hà Nội</div>
            <div>
              <b>Tổng đài CSKH</b>: 1800 64 64 50
            </div>
          </div>
          <div className="w-4/12 p-[20px] text-[15px] leading-normal">
            <h2 className="text-[18px] font-bold">TRUNG TÂM BẢO HÀNH</h2>
            <div>Miền bắc, miền trung:</div>
            <div>
              Số 40, lô C3, Khu đô thị mới Geleximco Lê Trọng Tấn, Phường Dương
              Nội, Quận Hà Đông, TP Hà Nội
            </div>
            <div>
              <b>Tel</b>: 0345845444
            </div>
            <div>Miền nam:</div>
            <div>
              75 Võ Nguyên Giáp, Phường Phước Tân, TP Biên Hòa, Đồng Nai
            </div>
            <div>
              <b>Tel</b>: 0395534333
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterGuarantee;
