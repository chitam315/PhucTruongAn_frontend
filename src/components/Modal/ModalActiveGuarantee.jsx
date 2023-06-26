import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaWindowClose } from "react-icons/fa";

const ModalActiveGuarantee = ({ name, content }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(content);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <div
        className="w-fit text-[black] uppercase hover:bg-translate"
        type="primary"
        onClick={showModal}
      >
        {name}
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        closable={false}
        centered={true}
        footer={null}
      >
        <div className="relative flex flex-col justify-center items-center py-[20px] p-[10px]">
          <div
            onClick={() => setOpen(false)}
            className="absolute top-[0px] right-[0px] uppercase text-[18px] cursor-pointer hover:text-[#ff0000]"
          >
            <FaWindowClose />
          </div>
          <h2 className="uppercase text-[26px] font-bold">
            Kích hoạt bảo hành
          </h2>
          <p className="text-[16px] py-[12px] text-center">
            Chức năng kích hoạt bảo hành từ mã bảo hành
          </p>
          {/* <table className="table">
            <tbody>
              <tr className="border-bottom-none">
                <td className="text-[14px] font-bold">Mã khách hàng *</td>
                <td colSpan={3}>
                  <input
                    type="text"
                    className="w-100 h-[40px]"
                    placeholder="Nhập mã bảo hành"
                    
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Mã khách hàng *</td>
                <td colSpan={3}>
                  <input type="text"></input>
                </td>
              </tr>
            </tbody>
          </table> */}
          <div className="row">
            <label className="font-bold text-[14px] text-[#000] w-[160px] h-[40px] justify-start flex items-center">
              Mã bảo hành *
            </label>
            <input
              type="text"
              placeholder="Nhập mã bảo hành"
              className="center w-[160px]"
            />
          </div>
          <div class="row w-full justify-between items-center">
            <label className="font-bold text-[14px] text-[#000] w-[160px] h-[40px]  flex items-center">
              Tên khách hàng *
            </label>
            <input
              required
              type="text"
              placeholder="Tên khách hàng"
              class="center w-[calc(100%-190px)] border rounded-[5px] m-[10px] text-center text-[16px] p-[5px]"
            />
          </div>
          <div class="row w-full justify-between items-center">
            <label className="font-bold text-[14px] text-[#000] w-[160px] h-[40px]  flex items-center">
              Số điện thoại *
            </label>
            <input
              required
              type="number"
              placeholder="Số điện thoại"
              class="center w-[calc(100%-190px)] border rounded-[5px] m-[10px] text-center text-[16px] p-[5px]"
            />
          </div>
          <div class="row w-full flex justify-between items-center">
            <label className="font-bold text-[14px] text-[#000] w-[160px] h-[40px]  flex items-center">
              Thành phố
            </label>
            <select
              class="form-select form-select-sm mb-3 w-[calc(100%-190px)] m-[10px]"
              id="city"
              aria-label=".form-select-sm"
            >
              <option value="" selected>
                Chọn tỉnh thành
              </option>{" "}
            </select>

              {/* <select className="w-[160px]">
              <option value="" selected>
                Chọn thành phố
              </option>
              <option value="TPHCM">An Giang</option>
              <option value="Hanoi">Hà Nội</option>
              <option value="Danang">Đà Nẵng</option>
              <option value="Camau">Cà Mau</option>
              <option value="Cantho">Cần Thơ</option>
            </select> */}
            </div>
            <div class="row w-full flex justify-between items-center">
              <label className="font-bold text-[14px] text-[#000] w-[160px] h-[40px]  flex items-center">
                Thành phố
              </label>
              <select
                class="form-select form-select-sm mb-3  w-[calc(100%-190px)] m-[10px]"
                id="district"
                aria-label=".form-select-sm"
              >
                <option value="" selected>
                  Chọn quận huyện
                </option>
              </select>
            </div>
            <div class="row w-full justify-between items-center">
              <label className="font-bold text-[14px] text-[#000] w-[160px] h-[40px]  flex items-center">
                Địa chỉ
              </label>
              <input
                required
                type="text"
                placeholder="Địa chỉ"
                class="center w-[calc(100%-190px)] border rounded-[5px] m-[10px] text-center text-[16px] p-[5px]"
              />
            </div>
            <button className="uppercase m-[20px] px-[15px] h-[40px] text-[16px] rounded-[2px] bg-[#101C2C] border border-solid border-black text-white cursor-pointer block hover:bg-[#ff0000]">
              kích hoạt
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalActiveGuarantee;
