import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dashboard from "./Dashboard";
import { BsPatchPlus } from "react-icons/bs";
import { LuTrash2 } from "react-icons/lu";
import "./Admin.css";

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
function AddProduct() {
  const [value, setValue] = useState("");
  return (
    <Dashboard>
      <div className="col-full">
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
        <div>
          <div className="add-product-card-image-item">
            <div className="add-product-upload-image" id="upload-img-2">
              <div className="add-product-upload-image-icon">
                <BsPatchPlus />
              </div>
              <input
                className="add-product-upload-image-input"
                type="file"
                accept="image/*"
                name="file"
                required
              />
            </div>
            <div className="add-product-show-image hidden" id="shown-img-2">
              <div className="add-product-upload-image-show">
                <img src="/" alt="" />
              </div>
              <div className="add-product-upload-image-remove">
                <LuTrash2 />
              </div>
            </div>
            <span>Ảnh 1</span>
          </div>
        </div>
        <label htmlFor="" className="flex flex-col mb-2">
          <span>Phân loại</span>
          <select className="rounded-[5px] py-[5px] w-full">
            <option value="">Đèn đường liền thể</option>
            <option value="">Đèn đường liền thể</option>
            <option value="">Đèn đường liền thể</option>
            <option value="">Đèn đường liền thể</option>
            <option value="">Đèn đường liền thể</option>
          </select>
        </label>

        <label htmlFor="" className="mb-2 block">
          <span>Mô tả sản phẩm: </span>
          <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            onChange={setValue}
          />
        </label>
        <button className="btn btn-success block w-full">Thêm mới</button>
        {/* <p>KẾT QUẢ:</p>
        <div dangerouslySetInnerHTML={{ __html: value }} /> */}
        <div>
          {value}
        </div>
      </div>
    </Dashboard>
  );
}

export default AddProduct;
