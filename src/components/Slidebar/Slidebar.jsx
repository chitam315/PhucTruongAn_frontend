import { Carousel } from 'antd';
import "./Slidebar.css"
import slide1 from "./slide-img1.webp"
import slide2 from "./slide-img2.webp"
import slide3 from "./slide-img3.webp"
const contentStyle = {
    margin: 0,
    height: '200px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
   
};

const Slidebar = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel className=' w-[80%] slidebar m-2 ' afterChange={onChange}>
            <div >
                <h3 style={contentStyle}><img src={slide1} alt="" /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src={slide2} alt="" /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src={slide3} alt="" /></h3>
            </div>
        
        </Carousel>


        
    );
};
export default Slidebar;