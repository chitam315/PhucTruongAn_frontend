import React, { useState } from 'react';
import './index.css';
import { Button, Modal } from 'antd';

const ModalAntd = ({children,btnContent,className}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Button type="primary" onClick={showModal} className={className}>
        {btnContent}
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};

export default ModalAntd;