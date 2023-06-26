import React, { useEffect, useState } from "react";
// import ButtonHandleLoading from "../ButtonHandleLoading";
// import { ModalCustom } from "../Modal/ModalCustom";
// import { ModalCustom1 } from "../Modal/ModalCustom1";
import { ModalFlowbite } from "../ModalAndBtn/Modal";
import { Btn } from "../ModalAndBtn/Btn";
import Field from "../Field";

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
export const TableCustom = ({ listCategory }) => {
  var dataSource = [],
    index = 1;

  listCategory.map((category) => {
    category.listProduct.map((product) => {
      dataSource.push({
        number: index,
        name: product.name,
        category: category.category,
        price: product.price,
      });
      index++;
    });
  });

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {Object.keys(dataSource[0]).map((ele, i) => (
                <th scope="col" className="px-6 py-3" key={i}>
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((ele, i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white "
                  >
                    {ele.number}
                  </th>
                  <td className="px-6 py-4 flex justify-between items-center">
                    <p>{ele.name}</p>
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
                  <td className="px-6 py-4">{ele.category}</td>
                  <td className="px-6 py-4">{ele.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ModalFlowbite
        modalID={"modalDelete"}
        titleModal={"Bạn có chắc chắn muốn xoá sản phẩm này"}
      >
        <h3 className="p-4">Nếu bạn đồng ý thì sản phẩm này sẽ được xoá vĩnh viễn</h3>
      </ModalFlowbite>

      <ModalFlowbite
        modalID={"modalEdit"}
        titleModal={"Bạn đang chỉnh sữa sản phẩm này"}
      >
        <div className="form flex flex-col gap-3 my-5 w-4/5 mx-auto">
          <Field
            customField={{ display: "flex", justifyContent: "space-between" }}
            style={{
              width: "60%",
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
              width: "60%",
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
                className="block w-3/5 p-2 outline-none"
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
