import "./ItemProduct.css";

export default function ItemProductRelative({ item }) {
  return (
    <div className="col-md-4 col-tb-6 col-tbs-12 p-1">
      <div className="border-gray p-[10px] block rounded-[10px] relative hover-scale-main h-full">
        {/* <div className="tag-discount-relative">- 9%</div> */}
        <div className="flex">
          <a
            href={`/detail/${item?.product_id}`}
            className="overflow-hidden w-[100px] h-[100px]"
          >
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/3.jpg?v=1685091066000"
              alt=""
              className="w-[100px] h-[100px] hover-scale-img"
            />
          </a>
          <div className="ml-[10px] w-[calc(100%-100px)] h-full">
            <a href={`/detail/${item?.product_id}`}>
              <p className="font-bold text-[0.9em]">{item?.product_name}</p>
              <div className="flex items-center">
                <p className="font-bold text-[0.9em] text-[var(--accentColor2)]">
                  {Number(item?.product_price)
                    .toFixed(0)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  <span>₫</span>
                </p>
                {/* <p className="line-through text-[0.7em] text-[#ccc]">
                  {Number(item.product_price)
                    .toFixed(0)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  <span>₫</span>
                </p> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
