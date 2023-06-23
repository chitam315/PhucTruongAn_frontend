import { Row } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";

import CardMain from "../Card/CardMain";
import ItemProduct from "../Items/ItemProduct";
import "./SeeMore.css";
import { useEffect, useState } from "react";
import { arrayCategory, arrayModel, arrayProduct } from "./DataViDu";

export default function SeeMore() {
  const [dataItem, setDataItem] = useState([]);
  const [dataDefault, setDataDefault] = useState([]);
  const [dataAZ, setDataAZ] = useState([]);
  const [dataZA, setDataZA] = useState([]);
  const [dataGoUp, setDataGoUp] = useState([]);
  const [dataGoDown, setDataGoDown] = useState([]);
  const [dataDateNew, setDataDateNew] = useState([]);
  const [dataDateOld, setDataDateOld] = useState([]);

  useEffect(() => {
    setDataItem(arrayProduct);
  }, []);

  function sortDefault() {
    var arr = dataItem.sort(function (a, b) {
      return a.id === b.id ? 0 : a.id < b.id ? -1 : 1;
    });
    setDataDefault(arr);
    setDataItem(dataDefault);
  }

  function sortAZ() {
    var arrAZ = dataItem.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setDataAZ(arrAZ);
    setDataItem(dataAZ);
  }
  function sortZA() {
    var arrZA = dataItem.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    setDataZA(arrZA);
    setDataItem(dataZA);
  }
  function sortPriceGoUp() {
    const arrPriceGoUp = dataItem.sort(function (a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
    setDataGoUp(arrPriceGoUp);
    setDataItem(dataGoUp);
  }

  function sortPriceGoDown() {
    const arrPriceGoDown = dataItem.sort(function (a, b) {
      return b.price - a.price;
    });
    setDataGoDown(arrPriceGoDown);
    setDataItem(dataGoDown);
  }

  function sortDateNew() {
    var arrDateNew = dataItem.sort(
      (a, b) =>
        new Date(...b.date.split("/").reverse()) -
        new Date(...a.date.split("/").reverse())
    );
    setDataDateNew(arrDateNew);
    setDataItem(dataDateNew);
  }

  function sortDateOld() {
    var arrDateOld = dataItem.sort(
      (a, b) =>
        new Date(...a.date.split("/").reverse()) -
        new Date(...b.date.split("/").reverse())
    );
    setDataDateOld(arrDateOld);
    setDataItem(dataDateOld);
  }

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [model, setModel] = useState([]);
  const [category, setCategory] = useState([]);
  const [addCategory, setAddCategory] = useState([]);

  function delItemCategory(item) {
    //Xóa item fliter loại sản phẩm
    const val = item;
    const newArr = category.filter((i) => i !== val);
    setCategory(newArr);

    //Ẩn trang thái checked của loại sản phẩm
    const iClass = document.getElementsByClassName("id-check-category");
    for (var i = 0; i < iClass.length; i++) {
      if (iClass[i].value === item) {
        iClass[i].click();
      }
    }
  }

  function delItemModel(item) {
    //Xóa item fliter thuong hieu
    const val = item;
    const newArr = model.filter((i) => i !== val);
    setModel(newArr);

    //Ẩn trang thái checked của thuong hieu
    const iClass = document.getElementsByClassName("id-check-model");
    for (var i = 0; i < iClass.length; i++) {
      if (iClass[i].value === item) {
        iClass[i].click();
      }
    }
  }
  function deleteAllItem(e) {
    e.preventDefault();
    setMinPrice("");
    setMaxPrice("");
    setModel([]);
    // const modelClass = document.getElementsByClassName("id-check-model");
    // for (var i = 0; i < modelClass.length; i++) {
    //   if (modelClass[i].checked) {
    //     modelClass[i].click();
    //   }
    // }

    setCategory([]);
    // const cateClass = document.getElementsByClassName("id-check-category");
    // for (var j = 0; j < cateClass.length; j++) {
    //   if (cateClass[j].checked) {
    //     cateClass[j].click();
    //   }
    // }
  }

  const clickFilterPrice = () => {
    const i = document.getElementById("price-min").value;
    const j = document.getElementById("price-max").value;
    if (i !== "" && j !== "") {
      setMinPrice(i);
      setMaxPrice(j);
    }
  };

  return (
    <CardMain>
      <Row>
        <div className="col-12 col-lg-3">
          <div className="">
            <div className="aside-filter mb-3 modal-open w-100 pr-0 pr-md-2 clearfix">
              <div className="filter-container row">
                <aside className="col-12 col-sm-12 col-lg-12">
                  {model.length !== 0 ||
                  category.length !== 0 ||
                  minPrice !== "" ? (
                    <div className="bg-[#6f42c1] rounded-[10px] px-[10px] py-[16px] text-white mb-[20px]">
                      <p className="font-bold text-[1em] mb-[8px]">Lọc theo:</p>
                      <div className="flex flex-wrap gap-2 text-white text-[1em]">
                        {model.length !== 0 ? (
                          model.map((item, index) => (
                            <p
                              className="filter-result-item"
                              onClick={() => delItemModel(item)}
                            >
                              {item}
                              <span>
                                <GrClose />
                              </span>
                            </p>
                          ))
                        ) : (
                          <></>
                        )}

                        {category.length !== 0 ? (
                          category.map((item, index) => (
                            <p
                              className="filter-result-item"
                              onClick={() => delItemCategory(item)}
                              key={index}
                            >
                              {item}
                              <span>
                                <GrClose />
                              </span>
                            </p>
                          ))
                        ) : (
                          <></>
                        )}
                        {minPrice !== "" ? (
                          <p
                            className="filter-result-item"
                            onClick={() => setMinPrice("")}
                          >
                            {minPrice}
                            <FaLongArrowAltRight className="px-[3px]" />
                            {maxPrice}
                            <span>
                              <GrClose />
                            </span>
                          </p>
                        ) : (
                          <></>
                        )}
                        <p
                          className="filter-result-item"
                          onClick={deleteAllItem}
                        >
                          Xóa hết
                        </p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="text-[1.2em] pb-[10px] font-bold">
                    Lọc giá
                  </div>
                  <div className="aside-content filter-group mb-1">
                    <div className="row">
                      <div className="col-6">
                        <label>
                          <input
                            type="text"
                            className="rounded-[10px] block w-100 p-[5px] border-gray bg-white focus:bg-white"
                            placeholder="Giá tối thiểu"
                            // onChange={onChangeFilterPrice}
                            name="minP"
                            id="price-min"
                            required
                          />
                        </label>
                      </div>
                      <div className="col-6">
                        <label>
                          <input
                            type="text"
                            className="rounded-[10px] w-100 p-[5px] border-gray bg-white focus:bg-white"
                            placeholder="Giá tối đa"
                            // onChange={onChangeFilterPrice}
                            name="maxP"
                            id="price-max"
                            required
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-clr-main mt-[15px] w-fit hover:text-white "
                    onClick={clickFilterPrice}
                  >
                    Áp dụng
                  </div>
                </aside>
                <div className="mt-[20px] col-12 col-sm-4 col-lg-12">
                  <div className="text-[1.2em] pb-[10px] font-bold">
                    Thương hiệu
                  </div>
                  <div className="gap-2 flex items-center">
                    {arrayModel.map((item, index) => (
                      <label className="flex">
                        <input
                          type="checkbox"
                          className="hidden id-check-model"
                          value={item.model}
                          onChange={(e) => {
                            if (e.target.checked) {
                              const val = model;
                              setAddCategory(val.push(item.model));
                              setModel(val);
                            } else {
                              delItemModel(item.model);
                            }
                          }}
                        />
                        <span className="btn-main text-capitalize flex">
                          {item.model}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[1.2em] pb-[10px] font-bold">Loại</div>
                  <div className="flex flex-wrap gap-2" id="card-category">
                    {arrayCategory.map((item, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          className="hidden id-check-category"
                          value={item.category}
                          onChange={(e) => {
                            if (e.target.checked) {
                              const val = category;
                              setAddCategory(val.push(item.category));
                              setCategory(val);
                            } else {
                              delItemCategory(item.category);
                            }
                          }}
                        />
                        <span className="btn-main text-capitalize flex">
                          {item.category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              className="py-[12px] px-[25px] text-center font-bold uppercase text-white text-[1.2em] bg-[var(--mainColor)] tag-trip relative w-fit"
              href="#meohaychoban"
            >
              Mẹo hay cho bạn
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="pb-2 border-bottom">
            <div className="flex items-center gap-3">
              <span className="m-0 pt-2 pb-2 font-bold text-[1.1em]">
                Sắp xếp:
              </span>

              <label onClick={() => sortDefault()}>
                <input
                  type="radio"
                  name="sortBy"
                  className="hidden"
                  defaultChecked
                  id="check-default"
                />
                <span className="flex items-center btn-main">Mặc định</span>
              </label>

              <label onClick={() => sortAZ()}>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">A → Z</span>
              </label>

              <label onClick={() => sortZA()}>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Z → A</span>
              </label>

              <label onClick={() => sortPriceGoUp()}>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Giá tăng dần</span>
              </label>

              <label onClick={() => sortPriceGoDown()}>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Giá giảm dần</span>
              </label>

              <label onClick={() => sortDateNew()}>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Mới nhất</span>
              </label>

              <label onClick={() => sortDateOld()}>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Cũ nhất</span>
              </label>
            </div>
          </div>
          <Row>
            {dataItem.map((item, index) => (
              <ItemProduct item={item} index={index} />
            ))}
          </Row>
        </div>
      </Row>
    </CardMain>
  );
}
