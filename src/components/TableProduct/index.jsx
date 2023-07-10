import React, { useState } from "react";
import Field from "../Field";
import { Button, Modal, Pagination, message } from "antd"
import { useFetch } from "../../hooks/useFetch";
import { productService } from "../../service/product.service";
import { useForm } from "../../hooks/useForm";
import { required } from "../../utils/validate";

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
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, data: listProduct } = useFetch(() => {
    return productService.getAllProducts()
  });

  const rules = {
    product_id: [
      required(),
    ],
    product_name: [
      required(),
    ],
    product_price: [
      required(),
    ],
    product_discount: [
      required()
    ],
    flash_sale: [
      required()
    ],
    category_id: [
      required()
    ]
  }
  const form = useForm(rules)


  var dataSource = [],
    index = 1;

  if (!loading) {
    listProduct.data.metadata.map((product) => {
      dataSource.push({
        Số: index,
        ID: product.product_id,
        Tên: product.product_name,
        "Giá gốc": product.product_price,
        "Giá giảm": product.product_price - product.product_discount,
      });
      index++;
    })
  }

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [idDelete, setIdDelete] = useState("")

  const showModalEdit = () => {
    setIsModalEditOpen(true);
  };

  const handleOkEdit = () => {
    if (form.validate()) {
      setIsModalEditOpen(false);
      console.log(form.values);
    }
  };

  const handleCancelEdit = () => {
    setIsModalEditOpen(false);
  };

  const changePage = (currentPage, pageSize) => {
    setCurrentPage(currentPage)
    setLimit(pageSize)
  }

  const [isModalDelOpen, setIsModalDelOpen] = useState(false);

  const showModalDel = (id) => {
    console.log("get id of product : ",id);
    setIsModalDelOpen(true);
    setIdDelete(id)
  };

  const handleOkDel = async () => {
    console.log(idDelete);
    const temp = {
      product_id: idDelete
    }
    setIsModalDelOpen(false);
    try {
      const res = await productService.deleteProductById(temp)
      message.success("Xoá sản phẩm thành công")
      console.log(res);
    } catch (error) {
      message.error("Đã xảy ra lỗi mạng, vui lòng thử lại sau")
      console.log(error);
    }
  };

  const handleCancelDel = () => {
    setIsModalDelOpen(false);
  };

  if (loading) {
    return <h1>Loading ....</h1>
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
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white  text-center"
                  >
                    {ele.ID}
                  </th>
                  <td className="px-6 py-4 flex justify-between items-center">
                    <p>{ele.Tên}</p>
                    <div className="flex">
                      <Button className="mx-2" type="primary" ghost onClick={showModalEdit}>
                        Edit product
                      </Button>
                      <Button className="mx-2" type="primary" danger ghost onClick={() => {return showModalDel(ele.ID)}}>
                        Delte product
                      </Button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{ele["Giá gốc"]}</td>
                  <td className="px-6 py-4 text-center">{ele["Giá giảm"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination defaultCurrent={1} total={dataSource.length} onChange={changePage} />

      <Modal width={700} title="Điền thông tin sản phẩm cần thêm" open={isModalEditOpen} onOk={handleOkEdit} onCancel={handleCancelEdit}
        footer={[
          <Button key="back" onClick={handleCancelEdit}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} ghost onClick={handleOkEdit}>
            Submit
          </Button>,
        ]}
      >
        <div className="form flex flex-col gap-3 my-5 w-4/5 mx-auto">
          <Field
            customField={{ display: "flex", justifyContent: "space-between", marginBottom: "20px"}}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="ID sản phẩm"
            placeholder="ID sản phẩm"
            {...form.register("product_id")}
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Tên sản phẩm"
            placeholder="Tên sản phẩm"
            {...form.register("product_name")}
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Giá"
            placeholder="Giá"
            {...form.register("product_price")}
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Giá sau khi giảm"
            placeholder="Nhập giá sau khi giảm"
            {...form.register("product_discount")}
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
            style={{
              width: "75%",
              display: "block",
              borderRadius: "0px",
              padding: "10px",
            }}
            label="Flash sale"
            renderInput={(_,props) => (
              <select {...props}
                className="block w-9/12 p-2 outline-none"
              // id="inputPriceProduct"
              >
                {/* <option value="none" selected disabled hidden>Select an Option</option> */}
                <option value="" selected disabled="disabled">Select an Option</option>
                <option value={"1"}>Có</option>
                <option value={"0"}>Không</option>
              </select>
            )}
            {...form.register("flash_sale")}
          />
          <Field
            customField={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
            label="Loại"
            renderInput={(_,props) => (
              <select {...props}
                className="block w-9/12 p-2 outline-none"
              >
                <option value="" selected disabled="disabled">Select an Option</option>
                {listCategory.map((ele , index) => (
                  <option key={index} value={index}>{ele.category}</option>
                ))}
              </select>
            )}
            {...form.register("category_id")}
          />
        </div>
      </Modal>

      <Modal title="Bạn có chắc muốn xoá sản phẩm này" open={isModalDelOpen} onOk={handleOkDel} onCancel={handleCancelDel}
        footer={[
          <Button key="back" onClick={handleCancelDel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" ghost danger onClick={handleOkDel}>
            Submit
          </Button>,
        ]}
      >
        <h3 className="p-4">Nếu bạn đồng ý thì sản phẩm này sẽ được xoá vĩnh viễn</h3>
      </Modal>

    </>
  );
};
