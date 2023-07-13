import { Link, useNavigate, useNavigation } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";

function Search() {
  const [arrProduct, setArrProduct] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const { loading, data: listProduct } = useFetch(() => {
    return productService.getAllProducts();
  });
  useEffect(() => {
    const fetch = async () => {
      if (!loading) {
        await setArrProduct(listProduct.data.metadata);
      }
    };
    fetch();
  },[]);

  const [input, setInput] = useState("");
  const fetchData = (value) => {
    const result = arrProduct.filter((product) => {
      return (
        value &&
        product &&
        product.product_name &&
        product.product_name.toLowerCase().includes(value)
      );
    });
    setTimeout(() => {
      setArrFilter(result);
    }, 800);
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const navigate = useNavigate();
  const clickSearch = () => {
    if (input !== "") {
      navigate("/search", {
        state: {
          list: arrFilter,
          input: input,
        },
      });
    }
  };
  return (
    <div className="flex-center">
      <div className="flex border-1 border-solid border-[#ffb700] rounded-2 relative">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-[350px] rounded-1 border-none p-[20px] header-text-search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div
          className="bg-[#ff9419] h-full flex-center p-[11px] cursor-pointer block"
          onClick={clickSearch}
        >
          <GrSearch className="text-[1.2em] text-white svg-white" />
        </div>
        <div
          className={`absolute left-0 top-[103%] w-full overflow-hidden bg-white border-gray rounded-[5px] h-fit max-h-[385px] z-5000 ${
            input !== "" ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between rounded-[5px] bg-[var(--mainColor)] p-1 m-1">
            <span className="text-white text-[0.9em]">Sản phẩm ({arrFilter.length})</span>

          </div>
          {arrFilter.map((item, index) => (
            <Link
              to={`/detail/${item.product_id}`}
              className="flex items-center hover:bg-[#ebebeb] rounded-[5px]"
              key={index}
            >
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                alt=""
                className="w-[70px] h-[70px]"
              />
              <div className="w-[calc(100%-70px)]">
                <span className="block w-full font-bold line-2 text-black text-[0.8em]">
                  {item.product_name}
                </span>
                <span className="block w-full font-bold text-[var(--menuHover)] text-[0.8em]">
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
  );
}

export default Search;
