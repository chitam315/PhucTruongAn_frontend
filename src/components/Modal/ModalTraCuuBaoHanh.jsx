import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaWindowClose } from "react-icons/fa";

const ModalTraCuuBaoHanh = ({ name, content }) => {
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
        className="w-fit text-[black] uppercase hover:bg-translate hover:text-[green]"
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
          <h2 className="uppercase text-[26px] font-bold ">Tra cứu bảo hành</h2>
          <p className="text-[16px] py-[12px] text-center">
            Tra cứu tình trạng yêu cầu bảo hành, sửa chữa bằng mã bảo hành
          </p>
          <input
            type="text"
            placeholder="Nhập mã bảo hành"
            className=" w-[350px] border rounded-[5px] m-[10px] text-center text-[16px] p-[5px]"
          ></input>
          <button className="uppercase m-[20px] px-[15px] h-[40px] text-[16px] rounded-[3px] bg-[#101C2C] border border-solid border-black text-white cursor-pointer block hover:bg-[#ff0000]">
            Tra cứu thông tin
          </button>
          <style></style>
        </div>
      </Modal>
    </>
  );
};

export default ModalTraCuuBaoHanh;
