import React, { useEffect, useRef, useState } from "react";

import { Table } from "react-bootstrap";
import { BsCaretDown } from "react-icons/bs";
import { GrTrash } from "react-icons/gr";
import { TfiPencilAlt } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronDoubleRight,
  HiChevronRight,
} from "react-icons/hi";
import AdminHeader from "./AdminHeader";
import { Modal } from "antd";

function AdminProduct() {
  const [modalView, setModalView] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const [itemProductModal, setItemProductModal] = useState([]);
  const okModalView = () => {
    setTimeout(() => {
      setModalView(false);
    }, 2000);
  };

  //Pagination table data
  const [currentPage, setCurrentPage] = useState(1);
  const [numberItem, setNumberItem] = useState(10);
  const lastIndex = currentPage * numberItem;
  const firstIndex = lastIndex - numberItem;
  const records = arrProduct.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(arrProduct.length / numberItem);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prePage() {
    setCurrentPage(1);
  }
  function nextPage() {
    setCurrentPage(nPage);
  }

  function selectShowNumberItem(num) {
    setNumberItem(num);
  }

  //Search data
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) =>
      item.product_name.toLowerCase().includes(query)
    );
  };

  return (
    <AdminHeader>
      <h1>Danh sách sản phẩm</h1>
      <button className="btn btn-success admin-header-block mb-[10px]">
        Thêm sản phẩm
      </button>
      <div className="flex-block items-center gap-3">
        <div className="admin-input-search items-center gap-2 admin-header-sm-flex-block mb-[10px]">
          <input
            type="text"
            spellCheck="false"
            autoComplete="false"
            placeholder="Tìm kiếm sản phẩm ..."
            className="w-full rounded-[5px] text-[1em] p-2"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary flex items-center gap-1 whitespace-nowrap">
            <AiOutlineSearch />
            Tìm kiếm
          </button>
        </div>
        <div className="admin-header-sm-flex-block items-center gap-2 mb-[10px]">
          <span className="block whitespace-nowrap">Lọc sản phẩm:</span>
          <div className="admin-filter-dropdown-content">
            <span className="text-[1em]">Đèn đường liền thể</span>
            <BsCaretDown />
            <ul>
              <li>Tất cả sản phẩm</li>
              <li>Đèn đường liền thể</li>
              <li>Đèn ngủ</li>
            </ul>
          </div>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr className="">
            <th>ID</th>
            <th>Sản phẩm</th>
            <th>Giá tiền</th>
            <th>Giảm</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {search(records).map((item, index) => (
            <tr className="admin-border-bottom" key={index}>
              <td>{item.product_id}</td>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td>20%</td>
              <td className="admin-header-flex-block items-center gap-2">
                <button
                  className="btn btn-info flex items-center gap-1 mb-[5px] text-white"
                  onClick={() => {
                    setModalView(true);
                    setItemProductModal(item);
                  }}
                >
                  <FaRegEye className="svg-white" />
                  <span className="admin-header-block-none">Xem</span>
                </button>
                <button
                  className="btn btn-danger flex items-center gap-1 mb-[5px]"
                  onClick={() => setModalDel(true)}
                >
                  <GrTrash className="svg-white" />
                  <span className="admin-header-block-none">Xóa</span>
                </button>
                <button className="btn btn-warning flex items-center gap-1 mb-[5px]">
                  <TfiPencilAlt className="svg-white" />
                  <span className="admin-header-block-none">Sửa</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {search(records).length === 0 ? <div>Không có dữ liệu</div> : <></>}
      </table>

      <div className="flex items-center gap-1  mb-8">
        <div
          onClick={prePage}
          className="border-1 border-solid border-[var(--main)] p-2 rounded-tl-[50%] rounded-bl-[50%] cursor-pointer hover:border-[var(--main)] select-none"
        >
          <HiChevronDoubleLeft className="text-[1.1em]" />
        </div>
        <div
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          className="border-1 border-solid border-[var(--main)] p-2 cursor-pointer hover:border-[var(--main)] select-none"
        >
          <HiChevronLeft className="text-[1.1em]" />
        </div>
        {numbers.map((n, i) => (
          <div
            key={i}
            onClick={() => setCurrentPage(n)}
            className={`border-1 border-solid border-[var(--main)] py-1 px-3 cursor-pointer hover:border-[var(--mainColor)] text-[1.1em] select-none ${
              currentPage === n ? "bg-[#e8e8e8]" : ""
            }`}
          >
            {n}
          </div>
        ))}
        <div
          onClick={() => {
            if (currentPage < nPage) setCurrentPage(currentPage + 1);
          }}
          className="border-1 border-solid border-[var(--main)] p-2 cursor-pointer hover:border-[var(--main)] select-none"
        >
          <HiChevronRight className="text-[1.1em]" />
        </div>
        <div
          onClick={nextPage}
          className="border-1 border-solid border-[var(--main)] p-2 rounded-tr-[50%] rounded-br-[50%] cursor-pointer select-none hover:border-[var(--main)]"
        >
          <HiChevronDoubleRight className="text-[1.1em]" />
        </div>
        <select
          className="flex items-center relative rounded-[30px] border-1 border-solid border-[var(--main)] select-none py-1 px-[15px] cursor-pointer"
          onClick={(e) => setNumberItem(e.target.value)}
        >
          <option value="5">5 item/page</option>
          <option value="10">10 item/page</option>
          <option value="15">15 item/page</option>
          <option value="20">20 item/page</option>
          <option value="25">25 item/page</option>
          <option value="30">30 item/page</option>
          <option value="35">35 item/page</option>
        </select>
      </div>

      <Modal
        open={modalView}
        onOk={okModalView}
        closable={true}
        centered={true}
        footer={null}
        width={1000}
        className="admin-modal-view-product"
        onCancel={() => setModalView(false)}
      >
        <div>
          <h1 className="uppercase text-[1.2em] text-[var(--mainColor)]">
            Chi tiết sản phẩm
          </h1>
          <p className="font-bold text-[1.2em] text-black">
            {itemProductModal.product_name}
          </p>
          <p className="text-[0.9em] text-black">
            <b>Giá niêm yết:</b> {itemProductModal.product_price}đ
          </p>
          <p className="text-[0.9em] text-black">
            <b>Phần trăm giảm:</b> 0%
          </p>
          <p className="text-[0.9em] text-black">
            <b>Giá giảm:</b> {itemProductModal.product_price}đ
          </p>

          <div className="flex items-center flex-wrap gap-2 mt-2">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/10-bb4b6857-9bb3-47a0-bafd-3104e02bc5e6.png?v=1680771041217"
              alt=""
              className="w-[100px] h-[100px] border-1 border-dashed border-red"
            />
          </div>
          <b>Mô tả:</b>
          <div className="w-100 h-[220px] overflow-y-auto border-gray p-2">
            ...
          </div>
        </div>
      </Modal>
      <Modal
        open={modalDel}
        onOk={okModalView}
        closable={true}
        centered={true}
        footer={null}
        className="admin-modal-view-product"
        onCancel={() => setModalDel(false)}
      >
        <div>
          <h2 className="text-[1.2em] font-medium">
            Bạn có muốn xóa sản phẩm này?
          </h2>
          <div className="flex gap-2 mt-[30px]">
            <button className="btn w-100 border-gray hover:border-[#ff0000] hover:text-[#ff0000]">
              OK
            </button>
            <button className="btn w-100 border-gray hover:border-blue-500 hover:text-blue-500">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </AdminHeader>
  );
}

const arrProduct = [
  {
    product_id: "TP-1",
    product_name: "Đèn đường học sinh giá rẻ",
    product_price: "3000000",
  },
  {
    product_id: "TP-2",
    product_name: "Đèn đường học sinh giá tốt",
    product_price: "6000000",
  },
  {
    product_id: "TP-3",
    product_name: "Đèn đường học sinh giá đắt",
    product_price: "9000000",
  },
  {
    product_id: "TP-4",
    product_name: "Đèn đường học sinh giá mềm",
    product_price: "12000000",
  },
  {
    product_id: "TP-5",
    product_name: "Đèn đường học sinh giá cao",
    product_price: "15000000",
  },
  {
    product_id: "TP-6",
    product_name: "Đèn đường học sinh giá bèo",
    product_price: "18000000",
  },
  {
    product_id: "TP-7",
    product_name: "Đèn đường học sinh giá giảm",
    product_price: "21000000",
  },
  {
    product_id: "TP-8",
    product_name: "Đèn đường học sinh giá tăng",
    product_price: "24000000",
  },
  {
    product_id: "TP-9",
    product_name: "Đèn đường học sinh giá như",
    product_price: "27000000",
  },
  {
    product_id: "TP-10",
    product_name: "Đèn đường học sinh giá mà",
    product_price: "30000000",
  },
  {
    product_id: "TP-11",
    product_name: "Đèn đường học sinh giá mạt",
    product_price: "33000000",
  },
  {
    product_id: "TP-1",
    product_name: "Đèn đường học sinh giá rẻ",
    product_price: "3000000",
  },
  {
    product_id: "TP-2",
    product_name: "Đèn đường học sinh giá tốt",
    product_price: "6000000",
  },
  {
    product_id: "TP-3",
    product_name: "Đèn đường học sinh giá đắt",
    product_price: "9000000",
  },
  {
    product_id: "TP-4",
    product_name: "Đèn đường học sinh giá mềm",
    product_price: "12000000",
  },
  {
    product_id: "TP-5",
    product_name: "Đèn đường học sinh giá cao",
    product_price: "15000000",
  },
  {
    product_id: "TP-6",
    product_name: "Đèn đường học sinh giá bèo",
    product_price: "18000000",
  },
  {
    product_id: "TP-7",
    product_name: "Đèn đường học sinh giá giảm",
    product_price: "21000000",
  },
  {
    product_id: "TP-8",
    product_name: "Đèn đường học sinh giá tăng",
    product_price: "24000000",
  },
  {
    product_id: "TP-9",
    product_name: "Đèn đường học sinh giá như",
    product_price: "27000000",
  },
  {
    product_id: "TP-10",
    product_name: "Đèn đường học sinh giá mà",
    product_price: "30000000",
  },
  {
    product_id: "TP-11",
    product_name: "Đèn đường học sinh giá mạt",
    product_price: "33000000",
  },
];

export default AdminProduct;
