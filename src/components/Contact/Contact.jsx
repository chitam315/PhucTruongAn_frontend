import React from "react";
import Header from "../Home/Header";
import Footer from "../Footer/Footer";
import "../../components/IntroducePage/IntroducePage.css";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="com_info">
        <div className="container-sm mt-[15px] mb-[15px]">
          <div className="rounded p-2 p-md-3 bg-white col-main page-title">
            <h1 className="font-weight-bold pt-2 pt-lg-0 mb-2 mb-lg-3 mt-0">
              Liên hệ
            </h1>
            <div className="m-auto bg-white flex flex-wrap">
              <div className="row flex">
                <div className="col-6 col-sm-12 pr-[10px]">
                  <address className="vcard mb-4">
                    <p className="adr mb-1">
                      <b>Trụ sở chính: </b>224 ấp Tân Thành, huyện Bắc Sơn,
                      Trảng Bom, Đồng Nai
                    </p>

                    <p className="mb-1">
                      <b>Email: </b>
                      <a
                        href="mailto:hotro@tpsolar.vn"
                        title="hotro@tpsolar.vn"
                      >
                        23011987truong@gmail.com
                      </a>
                    </p>

                    <p className="mb-1">
                      <b>Hotline: </b>
                      <a href="tel:0363993993" title="0363 993 993">
                        0933819292
                      </a>
                    </p>

                    <p className="mb-1">
                      Giấy chứng nhận Đăng ký Kinh doanh số 3603829836 do Sở Kế
                      hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/11/2019
                    </p>
                  </address>
                  {/* <div className="mt-3">
                    <form
                      method="post"
                      action="/postcontact"
                      id="contact"
                      accept-charset="UTF-8"
                    >
                      <input name="FormType" type="hidden" value="contact" />
                      <input name="utf8" type="hidden" value="true" />
                      <input
                        type="hidden"
                        id="Token-4c5b12e754874310b2f23b15541eb633"
                        name="Token"
                        value="03AAYGu2SSrKJXJRg0gTLXD8hC0_kL0fk8uo_SMPZzA3EmJAH7o4VMfwROpz9ldoBu9Jf5QYRW9sMEgZ4A-EkoB6VLzhDSbvX5NFFptpPf3p-uzmMhH9RLTZxGAEGAUEazWwdUwbAoPeoQsstaHyZ0Zb8GwBBtzMFMIysvJdqcSUWmFN8rRpRYwC_UiTsXBkEEc7jQi45WUFLN5Vip_EQDJZ1AOe-8WHpQXJPdVPN2OzEQAFxfxqPFzLvQ2mG2bKPPbwIs0Ab-UyxE4pyE4Y6ws0SZn4t5wn7gLZa-8ZV3PXLTQJyoEo7OxiHtDJobqXtcMusj_DKJQ2FX26ONb3zrGyaHnhao1xA_h0IrufByo3rYMuDdoQnFGhH7LpJKboWygEFVvOrbkNF1by4i8rg-kT3G9qUdGpC827aTNZkIe4NwfXGI2DIrt4SpnUVBlQ7CH8ECKD37qr5uCywy3Y1YPTK_wenQXuevwuL8817c3fNqC50rxlwDP7Nn_reyd8LWlXKcjCCHSdn3f1GFSMTi2VNllV0fGkZ_vLuqRnRh6lOJUtqLAFGZR78"
                      />
                      <div className="customer-name row">
                        <div className="col-12 form-group pb-[10px]">
                          <input
                            type="text"
                            className="form-control"
                            name="contact[Name]"
                            placeholder="Tên *"
                            required=""
                          />
                        </div>
                        <div className="col-12 form-group pb-[10px]">
                          <input
                            type="email"
                            className="form-control"
                            name="contact[email]"
                            placeholder="Địa chỉ email *"
                            required=""
                          />
                        </div>
                        <div className="col-12 form-group pb-[10px]">
                          <textarea
                            name="contact[Body]"
                            placeholder="Nội dung *"
                            className="form-control"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <span className="require d-block mb-3">
                        <em className="required">* </em>Thông tin bắt buộc
                      </span>
                      <div>
                        <button
                          type="submit"
                          title="Submit"
                          className="sitdown bg-[#0d6efd] rounded-10 modal-open relative book-submit btn btn-primary text-center flex items-center font-bold subml cursor-pointer"
                        >
                          Gửi liên hệ
                        </button>
                      </div>
                    </form>{" "}
                  </div> */}
                </div>
                <div className="col-6 col-sm-12">
                  <div className="google-map pl-[10px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15668.571333294527!2d106.9587759!3d10.9525814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e785ec1ab281%3A0x405563cecdca91d7!2zQ8OUTkcgVFkgVE5ISCDEkEnhu4ZOIEPDlE5HIE5HSEnhu4ZQIFBIw5pDIFRSxq_hu5xORyBBTg!5e0!3m2!1sen!2s!4v1689391345325!5m2!1sen!2s"
                      width="100%"
                      height="350"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      title="maps"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
