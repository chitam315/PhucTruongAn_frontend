import { Col } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import "./ItemProduct.css";
import { Link } from "react-router-dom";

export default function ItemProductRelative() {
  return (
    <div className="col-md-4 col-tb-6 col-tbs-12 p-0">
      <a
        href="#id"
        className="border-gray p-[10px] block rounded-[10px] mx-[5px] mb-[10px] relative hover-scale-main overflow-hidden"
      >
        <div className="tag-discount2">- 9%</div>
        <div className="flex">
          <Link to="/detail" className="overflow-hidden w-[300px] block">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/3.jpg?v=1685091066000"
              alt=""
              className="max-h-full hover-scale-img"
            />
          </Link>
          <div className="ml-[10px]">
            <Link to="/detail">
              <p className="font-bold text-[0.9em]">
                [250W] Đèn UFO Năng Lượng Mặt Trời TP Solar TP-U250 Chiếu Sáng 360
                Độ
              </p>
              <div className="flex items-center">
                <p className="font-bold text-[0.9em] text-[var(--accentColor2)]">
                  1.350.000<span>đ</span>
                </p>
                <p className="line-through text-[0.7em] text-[#ccc]">
                  1.550.000<span>đ</span>
                </p>
              </div>
            </Link>
            <label className="flex items-center checkbox-compare relative cursor-pointer">
              <input type="checkbox" name="" id="" className=" cursor-pointer" />
              <AiFillCheckCircle className="absolute w-[17px] h-[17px] text-[#3246ff] hidden" />
              <p className="text-black p-0">So sánh</p>
            </label>
          </div>
        </div>
      </a>
    </div>
  );
}
