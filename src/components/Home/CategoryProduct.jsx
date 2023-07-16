import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: (
      <Link to="/see-more/1" className="dropdown-item font-semibold p-2 m-2">
        Đèn đường liền thể năng lượng mặt trời
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/see-more/2" className="dropdown-item font-semibold p-2 m-2">
        Đèn UFO năng lượng mặt trời
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link to="/see-more/3" className="dropdown-item font-semibold p-2 m-2">
        Đèn bàn chải năng lượng mặt trời
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link to="/see-more/4" className="dropdown-item font-semibold p-2 m-2">
        Đèn pha năng lượng mặt trời
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link to="/see-more/5" className="dropdown-item font-semibold p-2 m-2">
        Đèn trụ cổng & sân vườn
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <Link to="/see-more/6" className="dropdown-item font-semibold p-2 m-2">
        Đèn áp trần & Đèn thả hình loa
      </Link>
    ),
    key: "6",
  },
  {
    label: (
      <Link to="/see-more/7" className="dropdown-item font-semibold p-2 m-2">
        Đèn cầm tay năng lượng mặt trời
      </Link>
    ),
    key: "7",
  },
  {
    label: (
      <Link to="/see-more/8" className="dropdown-item font-semibold p-2 m-2">
        Quạt năng lượng mặt trời
      </Link>
    ),
    key: "8",
  },
  {
    label: (
      <Link to="/see-more/9" className="dropdown-item font-semibold p-2 m-2">
        Phụ kiện đèn năng lượng mặt trời
      </Link>
    ),
    key: "9",
  },
];
const CategoryProduct = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <div onClick={(e) => e.preventDefault()}>
      <Space className="flex items-center">
        <span className="font-bold text-[1em]"> Danh mục sản phẩm</span>
        <DownOutlined className="block text-[0.9em]"/>
      </Space>
    </div>
  </Dropdown>
);
export default CategoryProduct;
