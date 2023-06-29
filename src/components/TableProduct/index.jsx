import React, { useState } from "react";
import { ModalFlowbite } from "../ModalAndBtn/Modal";
import { Btn } from "../ModalAndBtn/Btn";
import Field from "../Field";
import {Pagination} from "antd"

// import './index.css'
/**
 * 
 * listCategory = [
 *  {
 *      id: 1,
 *      category: "Đèn đường liền thể năng lượng mặt trời",
 *      listProduct: [
            {
                id: 1,
                name: "[600W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar TP-D600N Mẫu Mới Nhất 3 Mặt Đèn",
                price: "1.890.000"
            },
            {
                id: 2,
                name: "[450W] Đèn Đường Liền Thể Năng Lượng Mặt Trời TP Solar TP-D450N Tối ưu góc chiếu sáng",
                price: "1.690.000"
            },
 *  }
 * ]
 */
export const TableProduct = ({ listCategory }) => {
  const [limit,setLimit] = useState(10)
  const [currentPage,setCurrentPage] = useState(1)

  var dataSource = [],
    index = 1;

  listCategory.map((category) => {
    category.listProduct.map((product) => {
      dataSource.push({
        Số: index,
        Tên: product.name,
        Loại: category.category,
        Giá: product.price,
      });
      index++;
    });
  });

  const changePage = (currentPage,pageSize) => {
    setCurrentPage(currentPage)
    setLimit(pageSize)
  }

  return (
    <>
      <div className="relative overflow-x-auto mb-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {Object.keys(dataSource[0]).map((ele, i) => (
                <th scope="col" className="px-6 py-3 text-center" key={i}>
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.slice(limit * (currentPage - 1), limit * currentPage).map((ele, i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white  text-center"
                  >
                    {ele.Số}
                  </th>
                  <td className="px-6 py-4 flex justify-between items-center">
                    <p>{ele.Tên}</p>
                    <div className="flex">
                      <Btn
                        style={{
                          backgroundColor: "red",
                          width: "80px",
                          textAlign: "center",
                          height: "40px",
                        }}
                        modalID={"modalDelete"}
                      >
                        Delete
                      </Btn>
                      <Btn
                        style={{
                          width: "80px",
                          textAlign: "center",
                          height: "40px",
                          marginLeft: "10px",
                        }}
                        modalID={"modalEdit"}
                      >
                        Edit
                      </Btn>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{ele.Loại}</td>
                  <td className="px-6 py-4 text-center">{ele.Giá}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination defaultCurrent={1} total={dataSource.length} onChange={changePage} />

      <ModalFlowbite
        modalID={"modalDelete"}
        titleModal={"Bạn có chắc chắn muốn xoá sản phẩm này"}
        // key={"modalDelete"}
      >
        <h3 className="p-4">Nếu bạn đồng ý thì sản phẩm này sẽ được xoá vĩnh viễn</h3>
      </ModalFlowbite>

      <ModalFlowbite
        modalID={"modalEdit"}
        titleModal={"Bạn đang chỉnh sữa sản phẩm này"}
        // key={"modalEdit"}
      >
        <div className="form flex flex-col gap-3 my-5 w-4/5 mx-auto">
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Tên sản phẩm"
            placeholder="Tên sản phẩm có đc sau khi gọi api"
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Giá"
            placeholder="Nhập theo định dạng, ví dụ: 1.000.000 vnd"
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            label="Loại"
            renderInput={() => (
              <select
                className="block w-9/12 p-2 outline-none"
                id="inputPriceProduct"
              >
                {listCategory.map((ele) => (
                  <option value={ele.category}>{ele.category}</option>
                ))}
              </select>
            )}
          />
        </div>
      </ModalFlowbite>

      <ModalFlowbite
        modalID={"modalAddProduct"}
        titleModal={"Bạn đang thêm sản phẩm"}
        // key={"modalAddProduct"}
      >
        <div className="form flex flex-col gap-3 my-5 w-4/5 mx-auto">
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Tên sản phẩm"
            placeholder="Nhập tên sản phẩm"
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Giá"
            placeholder="Nhập theo định dạng, ví dụ: 1.000.000 vnd"
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            label="Loại"
            renderInput={() => (
              <select
                className="block w-9/12 p-2 outline-none"
                id="inputPriceProduct"
              >
                {listCategory.map((ele) => (
                  <option value={ele.category}>{ele.category}</option>
                ))}
              </select>
            )}
          />
        </div>
      </ModalFlowbite>
      
    </>
  );
};
