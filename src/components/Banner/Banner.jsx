import React from 'react';
import "./banner.css"; // Import file CSS cho component

const Banner = () => {
  return (
    <div className="container banner ">
      <div className="grid-item grid-banner ">
        <div className="item d-flex align-items-center p-2 p-xl-3 bg-white rounded-10 modal-open h-100 ">
          <div className="mr-2 mr-sm-3">
            <img src="//bizweb.dktcdn.net/thumb/icon/100/463/111/themes/889675/assets/img_poli_1.png?1686880710266" alt="Bảo hành 3 năm" decoding="async" />
          </div>
          <div className="media-body">
            Bảo hành 3 năm
          </div>
        </div>

      </div>
      <div className="grid-item grid-banner">
        <div className="item d-flex align-items-center p-2 p-xl-3 bg-white rounded-10 modal-open h-100 ">
          <div className="mr-2 mr-sm-3">
            <img src="//bizweb.dktcdn.net/thumb/icon/100/463/111/themes/889675/assets/img_poli_2.png?1686880710266" alt="Dịch vụ hàng đầu" decoding="async" />
          </div>
          <div className="media-body">
            Dịch vụ hàng đầu
          </div>
        </div>

      </div>
      <div className="grid-item grid-banner">
        <div className="item d-flex align-items-center p-2 p-xl-3 bg-white rounded-10 modal-open h-100 ">
          <div className="mr-2 mr-sm-3">
            <img src="//bizweb.dktcdn.net/thumb/icon/100/463/111/themes/889675/assets/img_poli_3.png?1686880710266" alt="Bảo hành điện tử " decoding="async" />
          </div>
          <div className="media-body">
            Bảo hành điện tử
          </div>
        </div>

      </div>
      <div className="grid-item grid-banner">
        <div className="item d-flex align-items-center p-2 p-xl-3 bg-white rounded-10 modal-open h-100 ">
          <div className="mr-2 mr-sm-3">
            <img src="//bizweb.dktcdn.net/thumb/icon/100/463/111/themes/889675/assets/img_poli_4.png?1686880710266" alt="Vận chuyển miễn phí" decoding="async" />
          </div>
          <div className="media-body">
            Vận chuyển miễn phí
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
