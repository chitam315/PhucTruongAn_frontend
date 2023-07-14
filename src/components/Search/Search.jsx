import { useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useState } from "react";
import ItemSearch from "./ItemSearch";

function Search() {
  const [arrFilter, setArrFilter] = useState([]);
  const { loading, data: listProduct } = useFetch(() => {
    return productService.getAllProducts();
  });

  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    const result = listProduct?.data.metadata.filter((product) => {
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
          <div className="flex items-center justify-between rounded-[5px] bg-[var(--mainColor)] p-1 m-1 z-8000">
            <span className="text-white text-[0.9em]">
              Sản phẩm ({arrFilter.length})
            </span>
          </div>
          {arrFilter.map((item, index) => (
            <ItemSearch item={item} loading={loading} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
