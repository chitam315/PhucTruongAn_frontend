import CardHome from "../Card/CardHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function VideoReview() {
  return (
    <CardHome title="Video review">
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        keyBoardControl={true}
        renderButtonGroupOutside={true}
      >
        {arrayVideo.map((item, index)=>(
          <div>
            <img src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`} alt="" />
          </div>
        ))}
      </Carousel>
    </CardHome>
  );
}
const arrayVideo = [
  {
    url: "Az",
  },
  {
    url: "dnYy5jLOou4",
  },
  {
    url: "J3aEC-CTZpU",
  },
  {
    url: "I3FRHXwyOoc",
  },
  {
    url: "OjR0Y8b5AUY",
  },
  {
    url: "1tE40Zgk0LU",
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
