import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiChevronDown } from "react-icons/fi";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};
function AdminAddProduct() {
  const [value, setValue] = useState("");
  const [valuePrice, setValuePrice] = useState("");
  return (
    <AdminHeader>
      <div className="flex flex-col w-[70%] col-admin-full">
        <h1>Thêm sản phẩm mới</h1>
        <div htmlFor="" className="flex flex-col mb-2">
          <span>Mã sản phẩm</span>
          <input type="text" className="rounded-[5px]" />
        </div>
        <label htmlFor="" className="flex flex-col mb-2">
          <span>Tên sản phẩm</span>
          <input type="text" className="rounded-[5px]" />
        </label>
        <label htmlFor="" className="flex flex-col mb-2">
          <span>Giá niêm yết</span>
          <input type="text" className="rounded-[5px]" />
        </label>
        <label htmlFor="" className="flex flex-col mb-2">
          <span>Giá đang giảm</span>
          <input
            type="text"
            className="rounded-[5px]"
            placeholder="*Bỏ trống nếu không giảm giá ..."
          />
        </label>
        <label htmlFor="" className="flex flex-col mb-2">
          <span>Phân loại</span>
          <div className="cursor-pointer relative dropdown-ul">
            <div className="border-1 border-solid border-[#3e3e3e] rounded-[5px] px-2 py-1 flex-center">
              <span>Đèn đường liền thể</span>
              <FiChevronDown />
            </div>
            <ul className="absolute w-100 overflow-hidden bg-white top-[50%] left-0 border-1 border-solid border-[#3e3e3e] rounded-[5px] z-[9999] pl-0">
              <li className="list-none p-2 hover:bg-[#ededed]">
                Đèn đường liền thể
              </li>
              <li className="list-none p-2 hover:bg-[#ededed]">
                Đèn đường liền thể
              </li>
              <li className="list-none p-2 hover:bg-[#ededed]">
                Đèn đường liền thể
              </li>
              <li className="list-none p-2 hover:bg-[#ededed]">
                Đèn đường liền thể
              </li>
            </ul>
          </div>
        </label>

        <label htmlFor="" className="mb-2">
          <span>Mô tả sản phẩm: </span>
          <ReactQuill
            // theme="snow"
            value={value}
            modules={modules}
            onChange={setValue}
          />
        </label>
        <button className="btn btn-success">Thêm mới</button>
        <p>KẾT QUẢ:</p>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </AdminHeader>
  );
}

export default AdminAddProduct;
