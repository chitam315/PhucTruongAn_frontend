import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn UFO năng lượng mặt trời
    </a>,
    key: '1',

  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn đường liền thể mặt trời
    </a>,
    key: '2',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn bàn chải năng lượng mặt trời
    </a>,
    key: '3',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn pha năng lượng mặt trời
    </a>,
    key: '4',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn trụ cổng & sân vườn
    </a>,
    key: '5',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn áp trần & Đèn thả hình loa
    </a>,
    key: '6',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn cầm tay năng lượng mặt trời
    </a>,
    key: '7',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Đèn áp trần & Đèn thả hình loa
    </a>,
    key: '8',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Quạt năng lượng mặt trời
    </a>,
    key: '9',
  },
  {
    label: <a className="dropdown-item font-semibold p-2 m-2" href="see-more">
      Phụ kiện đèn năng lượng mặt trời
    </a>,
    key: '10',
  },
];
const CategoryProduct = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className=' p-1 '>
  <span className='font-extrabold text-xl'> Danh mục sản phẩm</span>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default CategoryProduct;