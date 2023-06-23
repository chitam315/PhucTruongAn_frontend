import React, { useState } from "react";
import { Modal } from "antd";
import { FaWindowClose } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";

const ModalVideo = ({ name, content }) => {
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
      <div
        className="bg-white cursor-pointer absolute rounded-[10px] overflow-hidden border-2 border-solid border-[var(--mainColor)] z-[1000] top-[60%] left-[10%] w-[60px] h-[60px] flex items-center p-[10px]"
        onClick={showModal}
      >
        <img src={require("../../assets/Icon/youtube.png")} alt="" />
      </div>

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
          <div
            onClick={handleCancel}
            className="absolute top-[0px] right-[0px] text-[18px] cursor-pointer hover:text-[#ff0000]"
          >
            <FaWindowClose />
          </div>
          <h2 className="text-[1.2em] mb-[30px]">Video</h2>
          <span className="w-100 h-[1px] block bg-[#ccc] my-[10px]"></span>
          <div className="w-100">
            <ReactPlayer
              controls={true}
              width="100%"
              url="https://www.youtube.com/watch?v=UlUkFrtAc6I"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalVideo;
