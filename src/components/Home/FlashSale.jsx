import "../../App.css";
import ItemProductSale from "../Items/ItemProductSale";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";

export default function FlashSale() {
  var arrFlashSale = []
  const { loading, data: listProduct } = useFetch(() => {
    return productService.getAllProducts();
  });

  if (!loading) {
    console.log(listProduct);
    arrFlashSale = listProduct?.data.metadata.filter((item) => {
      return (item.flash_sale = true);
    })
  }

  if (loading) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <div>
        <div className="container-sm">
          <div className="bg-flash pb-[15px] rounded-[10px]">
            <div className="flex-center py-[10px] px-[15px] d-tbs-block text-center">
              <div className="flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/flash.gif?1685679333702"
                  alt=""
                  className="w-[55px]"
                />
                <p className="pt-0 uppercase text-[1.6em] cl-orange ml-[5px] font-bold f-cl-orange ">
                  flash sale
                </p>
              </div>
              <div className="flex-center banner-flash relative w-auto justify-center">
                <p
                  className="uppercase text-[1em] text-white"
                  id="change-text"
                ></p>
              </div>
              <div className="w-[200px]"></div>
            </div>
            <div className="select-none">
              <Carousel
                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                keyBoardControl={true}
                renderButtonGroupOutside={true}
                removeArrowOnDeviceType={["desktop"]}
              >
                {arrFlashSale.slice(0, 5).map((item, index) => (
                  <ItemProductSale item={item} key={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 771, min: 0 },
    items: 2,
  },
  mobileS: {
    breakpoint: { max: 472, min: 0 },
    items: 1,
  },
};
