import React, { useState } from 'react'
import { Btn } from '../ModalAndBtn/Btn';
import { ModalFlowbite } from '../ModalAndBtn/Modal';
import {Pagination} from "antd"

export const TableUser = ({ listUsers }) => {
  const [limit,setLimit] = useState(10)
  const [currentPage,setCurrentPage] = useState(1)

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
              <th scope="col" className="px-6 py-3 text-center">ID</th>
              <th scope="col" className="px-6 py-3 text-center">Họ và tên</th>
              <th scope="col" className="px-6 py-3 text-center">Số điện thoại</th>
              <th scope="col" className="px-6 py-3 text-center">Địa chỉ</th>

            </tr>
          </thead>
          <tbody>
            {listUsers.slice(limit * (currentPage - 1), limit * currentPage).map((ele, i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white  text-center"
                  >
                    {ele.id}
                  </th>
                  <td className="px-6 py-4 flex justify-between items-center">
                    <p className='text-lg pl-4'>{ele.full_name}</p>
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
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{ele.phone}</td>
                  <td className="px-6 py-4 text-center">{ele.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination defaultCurrent={1} total={listUsers.length} onChange={changePage} />

      <ModalFlowbite
        modalID={"modalDelete"}
        titleModal={"Bạn có chắc chắn muốn xoá người dùng này"}
      >
        <h3 className="p-4">Nếu bạn đồng ý thì người dùng này sẽ được xoá vĩnh viễn</h3>
      </ModalFlowbite>
    </>
  )
}
