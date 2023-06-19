import { Row } from "react-bootstrap";
import CardMain from "../Card/CardMain";
import ItemProduct from "../Items/ItemProduct";

export default function SeeMore() {
  return (
    <CardMain>
      <Row>
        <div className="col-12 col-lg-3">
          <div className="sidebar sidebar_mobi m-0 p-2 p-lg-0 mt-lg-1 d-flex flex-column">
            {/* <div className="heading d-none">
              <div className="h2 title-head font-weight-bold big text-uppercase mt-2 mb-0">
                Bộ lọc sản phẩm
              </div>
              <p className="font-italic pt-2 pb-2 mb-0">
                Giúp lọc nhanh sản phẩm bạn tìm kiếm
              </p>
            </div> */}
            <div className="aside-filter mb-3 modal-open w-100 pr-0 pr-md-2 clearfix">
              <div className="filter-container row">
                <aside className="aside-item filter-price mb-3 col-12 col-sm-12 col-lg-12">
                  <div className="text-[1.2em] pb-[10px] font-bold">
                    Lọc giá
                  </div>
                  <div className="aside-content filter-group mb-1">
                    <div className="row">
                      <div className="col-6 col-lg-12 col-xl-6">
                        <label for="">
                          <input
                            type="text"
                            className="form-control rounded-[10px]"
                            placeholder="Giá tối thiểu"
                          />
                        </label>
                      </div>
                      <div className="col-6 col-lg-12 col-xl-6">
                        <label for="">
                          <input
                            type="text"
                            className="form-control rounded-[10px]"
                            placeholder="Giá tối đa"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <a
                    className="btn-clr-main mt-[15px] w-fit"
                    href="#btn"
                    data-value=""
                  >
                    Áp dụng
                  </a>
                </aside>
                <aside className="aside-item filter-vendor mb-3 col-12 col-sm-4 col-lg-12">
                  <div className="text-[1.2em] pb-[10px] font-bold">
                    Thương hiệu
                  </div>
                  <div className="aside-content filter-group">
                    <ul className="filter-vendor filter-grid list-unstyled m-0">
                      <li className="filter-item filter-item--check-box  ">
                        <label
                          className="d-flex align-items-baseline m-0 tp-solar"
                          data-filter="tp solar"
                          for="filter-tp-solar"
                        >
                          <input
                            type="checkbox"
                            id="filter-tp-solar"
                            className="d-none"
                            onchange="toggleFilter(this)"
                            data-group="Hãng"
                            data-field="vendor"
                            value="(TP Solar)"
                            data-operator="OR"
                          />
                          <span className="btn-main">TP Solar</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside className="aside-item filter-type mb-3 col-12 col-sm-4 col-lg-12">
                  <div className="text-[1.2em] pb-[10px] font-bold">Loại</div>
                  <div className="aside-content filter-group">
                    <ul className="filter-type d-flex flex-wrap gap_8 list-unstyled m-0">
                      <li className="filter-item filter-item--check-box">
                        <label
                          className="d-flex align-items-baseline m-0"
                          data-filter="đèn đường"
                          for="filter-den-duong"
                        >
                          <input
                            type="checkbox"
                            id="filter-den-duong"
                            className="d-none"
                            data-group="Loại"
                            data-field="product_type"
                            data-operator="OR"
                          />
                          <span className="btn-main text-capitalize">
                            Đèn đường
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            {/* <div className="filter-container__selected-filter position-relative d-none order-lg-2 rounded-10 p-2 mb-3">
              <div className="filter-container__selected-filter-header d-flex clearfix pt-1 pb-1">
                <b className="filter-container__selected-filter-header-title text-white position-relative">
                  Lọc theo:
                </b>
              </div>
              <ul className="filter-container__selected-filter-list pl-0 m-0 list-unstyled d-block w-100 position-relative clearfix"></ul>
            </div> */}

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

              <label className="flex items-center btn-main">
                <input type="radio" name="sortBy" className="hidden" />
                <span>Mặc định</span>
              </label>

              <label>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">A → Z</span>
              </label>

              <label>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Z → A</span>
              </label>

              <label>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Giá tăng dần</span>
              </label>

              <label>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Giá giảm dần</span>
              </label>

              <label>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Mới nhất</span>
              </label>

              <label>
                <input type="radio" className="hidden" name="sortBy" />
                <span className="flex items-center btn-main">Cũ nhất</span>
              </label>
            </div>
          </div>
          <Row>
            <ItemProduct/>
            <ItemProduct/>
          </Row>
        </div>
      </Row>
    </CardMain>
  );
}
