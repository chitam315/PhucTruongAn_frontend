import React, { useState } from "react";
import { Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { GrPlay } from "react-icons/gr";
import ReactPlayer from "react-player";
import "./HomePage.css";

const ModalVideo = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
          setIsPlay(true);
        }}
        className="mr-1"
      >
        <div className="rounded-[10px] overflow-hidden relative">
          <img
            src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
            alt=""
            className="w-100 p-0"
          />
          <div className="video-review-player-main absolute w-100 h-full top-0 left-0 bg-[#00000035] center">
            <div className="video-review-player center rounded-full border-3 border-solid border-white w-[60px] h-[60px]">
              <GrPlay className="text-[1.8em] text-white" />
            </div>
          </div>
        </div>
        <span className="text-[1em] font-bold text-black px-[5px] block">
          {item.name}
        </span>
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
            className="hover-rotate-svg absolute top-[-10%] right-[-9%] bg-white cursor-pointer rounded-full p-[5px] border-2 border-solid border-[#000]"
            onClick={() => {
              setOpen(false);
              setIsPlay(false);
            }}
          >
            <span>
              <AiOutlineClose className="text-[1.5em]" />
            </span>
          </div>
          <div className="">
            <ReactPlayer
              controls={true}
              width="100%"
              stopOnUnmount={true}
              playing={false}
              pip={true}
              url={`https://www.youtube.com/watch?v=${item.url}`}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalVideo;
