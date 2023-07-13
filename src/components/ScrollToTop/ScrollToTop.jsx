import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [onTop, setOnTop] = useState(false);
  const toggleScrollToTopBtn = () => {
    if (window.pageYOffset > 500) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  useEffect(() => {
    if (window.pageYOffset > 500) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
  },[]);

  return (
    <div
      className={`cursor-pointer center sticky bottom-[50px] right-[15px] bg-[var(--main)] rounded-[50%] w-[40px] h-[40px] float-right ${
        onTop === true ? "flex" : "none"
      }`}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <FaAngleUp className="text-white text-[2em]" />
    </div>
  );
}

export default ScrollToTop;
