import React, { useState } from 'react'
import { Button, Modal, Pagination } from "antd"
import { useFetch } from "../../hooks/useFetch";
import { userService } from "../../service/user.service";

export const TableUser = ( ) => {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const { loading , data: listUsers} = useFetch(() => {
    return userService.getAllUser()
  })

  

  if (!loading) {
    console.log(listUsers);
  }

  const changePage = (currentPage, pageSize) => {
    setCurrentPage(currentPage)
    setLimit(pageSize)
  }

  const [isModalDelOpen, setIsModalDelOpen] = useState(false);

  const showModalDel = (id) => {
    setIsModalDelOpen(true);
    // setIdDelete(id)
  };

  const handleOkDel = async () => {
    setIsModalDelOpen(false);
    // try {
    //   const res = await productService.deleteProductById(idDelete)
    //   message.success("Xoá sản phẩm thành công")
    //   console.log(res);
    //   window.location.reload()
    // } catch (error) {
    //   message.error("Đã xảy ra lỗi mạng, vui lòng thử lại sau")
    //   console.log(error);
    // }
  };

  const handleCancelDel = () => {
    setIsModalDelOpen(false);
  };

  if (loading) {
    return <h1>Loading ...</h1>
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
            {listUsers.data.metadata.slice(limit * (currentPage - 1), limit * currentPage).map((ele, i) => {
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
                      <Button className="mx-2" type="primary" danger ghost onClick={() => { return showModalDel(ele.ID) }}>
                        Delte user
                      </Button>
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

      <Pagination defaultCurrent={1} total={listUsers.data.metadata.length} onChange={changePage} />

      <Modal title="Bạn có chắc muốn xoá người dùng này" open={isModalDelOpen} onOk={handleOkDel} onCancel={handleCancelDel}
        footer={[
          <Button key="back" onClick={handleCancelDel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" ghost danger onClick={handleOkDel}>
            Submit
          </Button>,
        ]}
      >
        <h3 className="p-4">Nếu bạn đồng ý thì người dùng này sẽ được xoá vĩnh viễn</h3>
      </Modal>
    </>
  )
}
