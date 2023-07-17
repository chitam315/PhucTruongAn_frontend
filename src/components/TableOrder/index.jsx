import React, { useState } from 'react'
import { Button, Modal, Pagination, Descriptions, Table } from "antd"
import { useFetch } from "../../hooks/useFetch";
import { orderService } from "../../service/order.service";
import { paymentService } from "../../service/payment.service"
// import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import { Icon } from '@iconify/react';
import { useAuth } from '../AuthContext';
import { useAsync } from '../../hooks/useAsync';
import { useNavigate } from 'react-router';

export const TableOrder = () => {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const { user } = useAuth()

  const [update,setUpdate] = useState(0)

  const { loading, data: listOrder } = useFetch(() => {
    return orderService.getAllOrder()
  },[])

  const { loadingPayment, data: listPayment } = useFetch(() => {
    return paymentService.getAllPayment()
  })

  const { execute: updatePaymentStatus } = useAsync(paymentService.updatePaymentStatus)

  const [dataPayment, setDataPayment] = useState({})

  const onClickShipped = async () => {
    try {
      const res = await updatePaymentStatus({
        ...dataPayment,
        payment_status: "done"
      })

    } catch (error) {
      console.log(error);
    }
  }

  const onClickFail = async () => {
    try {
      const res = await updatePaymentStatus({
        ...dataPayment,
        payment_status: "fail"
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'product_id',
      key: 'product_id',
    },
    {
      title: 'Product name',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    // {
    //   title: 'Tổng tiền',
    //   dataIndex: 'order_total',
    //   key: 'order_total',
    // },
  ];
  let dataSource = []

  const [orderShow, setOrderShow] = useState([])

  if (!loading) {
    // console.log(listOrder);
  }

  const changePage = (currentPage, pageSize) => {
    setCurrentPage(currentPage)
    setLimit(pageSize)
  }

  const [isModalDelOpen, setIsModalDelOpen] = useState(false);

  const showModalDel = (orderData) => {
    console.log(listPayment);
    const payment = listPayment.data.metadata.find(pay => pay.order_id == orderData.order_id)
    console.log(payment);
    orderData.products.map((product, index) => {
      dataSource.push({
        key: index + 1,
        product_id: product.product_id,
        product_name: product.product_name,
        quantity: product.quantity,
      })
    })
    setDataPayment({
      payment_id: parseInt(payment.payment_id),
      order_id: parseInt(orderData.order_id),
      user_id: parseInt(orderData.user_id)
    })
    setOrderShow(dataSource)
    setIsModalDelOpen(true);
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
              <th scope="col" className="px-6 py-3 text-center">Tổng hoá đơn</th>
              <th scope="col" className="px-6 py-3 text-center">Trạng thái</th>

            </tr>
          </thead>
          <tbody>
            {listOrder.data.metadata[0].slice(limit * (currentPage - 1), limit * currentPage).map((ele, i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white  text-center"
                  >
                    {ele.order_id}
                  </th>
                  <td className="px-6 py-4 text-center">
                    <p className='text-lg pl-4'>{ele.name}</p>
                    {/* <div className="flex">
                      <Button className="mx-2" type="primary" danger ghost onClick={() => { return showModalDel(ele.ID) }}>
                        Delte user
                      </Button>
                    </div> */}
                  </td>
                  <td className="px-6 py-4 text-center">{ele.phone}</td>
                  <td className="px-6 py-4 text-center">{ele.address}</td>
                  <td className="px-6 py-4 text-center">{ele.order_total}</td>
                  {
                    ele.order_status == "pending" ? (
                      <td className="px-6 py-4 text-center">
                        <Button className="mx-2" type="primary" danger ghost onClick={() => { return showModalDel(ele) }}>
                          Chưa thanh toán
                        </Button>
                      </td>
                    ) : (
                      <td className="px-6 py-4 text-center">
                        <Button className="mx-2" type="primary" ghost onClick={() => { return showModalDel(ele) }}>
                          Chờ xác nhận
                        </Button>
                      </td>
                    )
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination defaultCurrent={1} total={listOrder.data.metadata[0].length} onChange={changePage} />

      <Modal title="Thông tin sản phẩm trong đơn hàng" width={800} open={isModalDelOpen} onCancel={handleCancelDel}
        footer={[
          <Button key="back" onClick={handleCancelDel}>
            Close
          </Button>,
        ]}
      >
        <Table dataSource={orderShow} columns={columns} />;
        <div className="flex justify-end gap-2">
          <Icon onClick={onClickShipped} onMouseOver={({ target }) => (target.style.opacity = "0.6", target.style.cursor = "pointer")} onMouseOut={({ target }) => (target.style.opacity = "1", target.style.cursor = "default")} icon="ant-design:check-circle-outlined" color="#52c41a" width="40" height="40" />
          <Icon onClick={onClickFail} onMouseOver={({ target }) => (target.style.opacity = "0.6", target.style.cursor = "pointer")} onMouseOut={({ target }) => (target.style.opacity = "1", target.style.cursor = "default")} icon="ant-design:close-circle-outlined" color="#eb2f96" width="40" height="40" />
        </div>
      </Modal>
    </>
  )
}
