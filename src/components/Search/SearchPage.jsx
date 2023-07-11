import { useLocation } from "react-router";
import CardMain from "../Card/CardMain";
import ItemProduct6 from "../Items/ItemProduct6";
import Footer from "../Footer/Footer";
import "./Search.css";
import { useState } from "react";
import Header from "../Home/Header";

function SearchPage() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * 12;
  const firstIndex = lastIndex - 12;
  const arrayPagination = location.state.list.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(location.state.list.length / 12);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  return (
    <div>
      <Header />
      <div className="bg-main w-100">
        <CardMain>
          <div>
            <h2 className="mb-4">
              Có {location.state.list.length} kết quả tìm kiếm với từ khóa "
              {location.state.input}"
            </h2>
            <div className="row">
              {arrayPagination.map((item, index) => (
                <ItemProduct6 item={item} />
              ))}
            </div>
          </div>
          {location.state.list.length > 12 ? (
            <div className="flex items-center justify-center gap-2 overflow-auto">
              {numbers.map((n, i) => (
                <div
                  className={`px-[10px] rounded-[7px] border-gray w-[35px] h-[35px] flex items-center justify-center text-[0.9em] text-[var(--mainColor)] select-none duration-500  ${
                    currentPage === n
                      ? "border-[var(--mainColor)]"
                      : "cursor-pointer hover:bg-[var(--mainColor)] hover:border-[var(--mainColor)] hover:text-white"
                  }`}
                  onClick={() => setCurrentPage(n)}
                >
                  {n}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </CardMain>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
