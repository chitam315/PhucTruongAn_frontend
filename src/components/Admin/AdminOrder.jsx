import React from "react";

import { Table } from "react-bootstrap";
import { BsCaretDown } from "react-icons/bs";
import { GrTrash } from "react-icons/gr";
import { TfiPencilAlt } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import AdminHeader from "./AdminHeader";

function AdminOrder() {
  return (
    <AdminHeader>
      <h1>Danh sách đơn hàng</h1>

      <div className="flex-block items-center gap-3">
        <div className="admin-input-search gap-2 admin-header-sm-flex-block mb-[10px]">
          <input
            type="text"
            spellCheck="false"
            autoComplete="false"
            placeholder="Tìm kiếm đơn hàng ..."
            className="w-full"
          />
          <button className="btn btn-primary flex items-center gap-1 whitespace-nowrap">
            <AiOutlineSearch />
            Tìm kiếm
          </button>
        </div>
        {/* <div className="admin-header-sm-flex-block items-center gap-2 mb-[10px]">
          <span className="block whitespace-nowrap">Lọc đơn hàng:</span>
          <div className="admin-filter-dropdown-content w-100 justify-between">
            <span>Tất cả đơn hàng</span>
            <BsCaretDown />
            <ul className="absolute">
              <li>Tất cả đơn hàng</li>
              <li>Đơn thanh toán qua ngân hàng</li>
              <li>Đơn thanh toán khi nhận hàng</li>
            </ul>
          </div>
        </div> */}
      </div>
      <table className="table w-100">
        <thead>
          <tr className="">
            <th>STT</th>
            <th>Mã đơn</th>
            <th>Tổng tiền</th>
            <th>Ngày đặt</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="admin-border-bottom">
            <td>1</td>
            <td>562</td>
            <td>3000000</td>
            <td>12/05/20203</td>
            <td className="admin-header-flex-block items-center gap-2">
              <button className="btn btn-info flex items-center gap-1 mb-[5px]">
                <FaRegEye className="svg-white" />
                <span className="admin-header-block-none">Chi tiết</span>
              </button>
              <button className="btn btn-danger flex items-center gap-1 mb-[5px]">
                <GrTrash className="svg-white" />
                <span className="admin-header-block-none">Hủy đơn</span>
              </button>
              <button className="btn btn-warning flex items-center gap-1 mb-[5px]">
                <TfiPencilAlt className="svg-white" />
                <span className="admin-header-block-none">Cập nhật</span>
              </button>
            </td>
          </tr>
          <tr className="admin-border-bottom">
            <td>2</td>
            <td>563</td>
            <td>6000000</td>
            <td>12/05/20203</td>
            <td className="admin-header-flex-block items-center gap-2">
              <button className="btn btn-info flex items-center gap-1 mb-[5px]">
                <FaRegEye className="svg-white" />
                <span className="admin-header-block-none">Chi tiết</span>
              </button>
              <button className="btn btn-danger flex items-center gap-1 mb-[5px]">
                <GrTrash className="svg-white" />
                <span className="admin-header-block-none">Hủy đơn</span>
              </button>
              <button className="btn btn-warning flex items-center gap-1 mb-[5px]">
                <TfiPencilAlt className="svg-white" />
                <span className="admin-header-block-none">Cập nhật</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminHeader>
  );
}

export default AdminOrder;
