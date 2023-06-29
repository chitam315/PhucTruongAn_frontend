import CardHome from "../Card/CardHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";
import ModalVideo from "./ModalVideo";

function VideoReview() {
  return (
    <CardHome title="Video review">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        keyBoardControl={true}
        renderButtonGroupOutside={true}
      >
        {arrayVideo.map((item, index) => (
          <ModalVideo item={item} index={index}/>
        ))}
      </Carousel>
    </CardHome>
  );
}

const arrayVideo = [
  {
<<<<<<< HEAD
    url: "AvSTtFAPLRI",
    name: "Hướng dẫn kích hoạt Bảo hành điện tử - Cải tiến mới trong thời kỳ công nghệ số",
=======
    url: "Az",
>>>>>>> a5e9ae18b6abadb378db550911095b18d4b9f9f0
  },
  {
    url: "dnYy5jLOou4",
    name: "So sánh đèn bàn chải NLMT 200W chính hãng và đèn trôi nổi trên thị trường",
  },
  {
    url: "J3aEC-CTZpU",
    name: "Cảnh báo “Cú lừa” với đèn năng lượng mặt trời giá rẻ!",
  },
  {
    url: "I3FRHXwyOoc",
    name: "Khách hàng nói gì về đèn năng lượng mặt trời TP Solar",
  },
  {
    url: "OjR0Y8b5AUY",
    name: "Lắp đặt và thử độ sáng đèn UFO TP Solar công suất 500W",
  },
  {
    url: "1tE40Zgk0LU",
    name: "Đại gia chân đất' Quang Tèo thắp sáng sân vườn căn biệt thự 1000m2 KHÔNG TỐN 1 ĐỒNG tiền điện",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 771, min: 0 },
    items: 1,
  },
  mobileS: {
    breakpoint: { max: 472, min: 0 },
    items: 1,
  },
};

export default VideoReview;
