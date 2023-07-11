import React, { useState } from "react";
import { Modal } from "antd";
import { FaWindowClose } from "react-icons/fa";

const ModalSpecification = ({ name, content }) => {
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
      <div className="btn-shadow mt-[15px]" onClick={showModal}>
        Xem chi tiết cấu hình
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        closable={false}
        centered={true}
        footer={null}
      >
        <div className="relative">
          <div
            onClick={() => setOpen(false)}
            className="absolute top-[0px] right-[0px] text-[18px] cursor-pointer hover:text-[#ff0000]"
          >
            <FaWindowClose />
          </div>
          <h2 className="text-[1.2em] mb-[30px]">Thông số kỹ thuật</h2>
          <span className="w-100 h-[1px] block bg-[#ccc] my-[10px]"></span>
          <table
            border="1"
            className="text-[1.1em] width-100 table table-striped mb-0 rounded-[10px] overflow-hidden"
          >
            <tbody>
              <tr>
                <td>Mã sản phẩm:</td>
                <td>TP - D450N</td>
              </tr>
              <tr>
                <td>Thương hiệu:</td>
                <td>TP Solar</td>
              </tr>
              <tr>
                <td>Công suất:</td>
                <td>450W</td>
              </tr>
              <tr>
                <td>Kích thước đèn:</td>
                <td>600*345mm</td>
              </tr>
              <tr>
                <td>Chức năng đèn:</td>
                <td>Kiểm soát ánh sáng + Cảm ứng</td>
              </tr>
              <tr>
                <td>Tấm pin silicon poly:</td>
                <td>6V/28W</td>
              </tr>
              <tr>
                <td>Dung lượng:</td>
                <td>30000 mAh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};

export default ModalSpecification;
