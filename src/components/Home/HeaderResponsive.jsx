import { Link, useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useState } from "react";
import logo from "../../logo.jpg";

function HeaderResponsive() {
  const [arrFilter, setArrFilter] = useState([]);
  const { loading, data: listProduct } = useFetch(() => {
    return productService.getAllProducts();
  });
  const [input, setInput] = useState("");
  const handleChange = (value) => {
    setInput(value);
    setTimeout(() => {
      const result = listProduct?.data.metadata.filter((product) => {
        return (
          value &&
          product &&
          product.product_name &&
          product.product_name.toLowerCase().includes(value)
        );
      });
      setArrFilter(result);
    }, 800);
  };
  const navigate = useNavigate();
  const clickSearch = () => {
    if (input !== "" && arrFilter.length !== 0) {
      navigate("/search", {
        state: {
          list: arrFilter,
          input: input,
        },
      });
    }
  };

  window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");

  function myFunction() {
    // if (window.pageYOffset > header.offsetTop) {
    //   header.classList.add("fixed");
    // } else {
    //   header.classList.remove("fixed");
    // }
  }
  return (
    <header
      className="d-none-flex items-center p-[5px] fixed top-0 left-0 bg-white w-full z-500"
      id="myHeader"
    >
      <Link to="/" className="p-0 h-full">
        <img src={logo} alt="" className="w-[80px] h-full" />
      </Link>
      <div className="flex-center w-100">
        <div className="flex w-100 border-1 border-solid border-[#ffb700] rounded-2 relative">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full rounded-1 border-none p-[20px] header-text-search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <span
            className="bg-[#ff9419] h-full flex-center p-[11px] cursor-pointer"
            onClick={clickSearch}
          >
            <GrSearch className="text-[1.2em] text-white svg-white" />
          </span>
          <div
            className={`absolute top-[125%] lef-0 bg-white w-full max-h-[440px] border-gray overflow-hidden ${
              input !== "" ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center justify-between rounded-[5px] bg-[var(--mainColor)] p-1 m-1">
              <span className="text-white text-[0.9em]">
                Sản phẩm ({arrFilter.length})
              </span>
            </div>
            {arrFilter.slice(0, 5).map((item, index) => (
              <Link
                to={`/detail/${item.product_id}`}
                className="flex items-center hover:bg-[#ebebeb] rounded-[5px]"
                key={index}
              >
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <div className="w-[calc(100%-80px)]">
                  <span className="block w-full font-bold line-2 text-black text-[0.9em]">
                    {item.product_name}
                  </span>
                  <span className="block w-full font-bold text-[var(--menuHover)] text-[0.9em]">
                    {Number(item.product_price)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <span>₫</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderResponsive;
