import React from 'react';
import "./Slidebar.css"
import slide1 from "./slide-img1.webp"
import slide2 from "./slide-img2.webp"
import slide3 from "./slide-img3.webp"
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  handlePrevSlide = () => {
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide === 0 ? this.props.slides.length - 1 : prevState.currentSlide - 1
    }));
  }

  handleNextSlide = () => {
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide === this.props.slides.length - 1 ? 0 : prevState.currentSlide + 1
    }));
  }

  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="carousel w-[60%] flex justify-center items-center ">
        <div className="carousel-left ">
          <button className="carousel-control" onClick={this.handlePrevSlide}>
            &lt;
          </button>
          <div className="carousel-slide">
            {slides[currentSlide]}
          </div>
        </div>
        <div className="carousel-right">
          <button className="carousel-control" onClick={this.handleNextSlide}>
            &gt;
          </button>
          <div className="carousel-slide">
            {slides[currentSlide]}
          </div>
        </div>
      </div>
    );
  }
}

const Slidebarnew = () => {
  const slides = [
    <img src={slide1} alt="Slide 1" />,
    <img src={slide2} alt="Slide 2" />,
    <img src={slide3} alt="Slide 3" />
  ];

  return (
    <div>
      <Carousel  slides={slides} />
    </div>
  );
};

export default Slidebarnew;
