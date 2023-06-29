import React, { useState } from "react";
import { Modal } from "antd";
import { FaWindowClose } from "react-icons/fa";
// import ReactPlayer from "react-player/youtube";

const ModalPaymentBank = ({ name, content }) => {
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
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        closable={false}
        centered={true}
        footer={null}
        width="50%"
        height="60%"
      >
        <div className="relative">
          
          <h2 className="text-[1.2em] mb-[30px]">Video</h2>
          <span className="w-100 h-[1px] block bg-[#ccc] my-[10px]"></span>
          <div className="w-100">
            {/* <ReactPlayer */}
              controls={true}
              width="100%"
              url="https://www.youtube.com/watch?v=UlUkFrtAc6I"
            {/* /> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPaymentBank;
