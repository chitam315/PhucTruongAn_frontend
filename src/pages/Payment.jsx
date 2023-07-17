import { BiCreditCard } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import "../components/Order/Order.css"
// import { useAuth } from "../AuthContext";
import logo from "../logo.jpg"
import QR from "../QR_banking.jpg"
import { useAsync } from '../hooks/useAsync'
import { orderService } from "../service/order.service";
import { message } from "antd";
import { useAuth } from "../components/AuthContext";
import { paymentService } from "../service/payment.service"


function Payment() {

    const [openQRCode, setOpenQRCode] = useState(false);
    const { order_id } = useParams()
    const { user } = useAuth()
    const { execute: createPayment } = useAsync(paymentService.createPayment)

    // const {user} = useAuth()
    const navigate = useNavigate()

    const clickPay = async () => {
        let payment_method = "COD"
        let payment_status = "Chờ xác nhận"
        if (openQRCode) {
            payment_method = "banking"
        }
        const temp = {
            payment_method,
            payment_status,
            order_id: parseInt(order_id),
            user_id: user.id
        }
        console.log('click thanh toan');
        console.log(temp);
        try {
            console.log('before call');
            const res = await createPayment(temp)
            console.log('after call');
            console.log(res);
            message.success("Chúc mừng bạn đã đặt hàng thành công, chúng tôi sẽ liên lạc lại để xác nhận đơn hàng")
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-[#fff] w-100 h_100vh-fit mlr_auto-0">
            <div className="flex-block w-100">
                <div className="col-8-12 py-[20px] container-sm">
                    <div className="w-fit">
                        <Link to="/">
                            <img
                                src={logo}
                                alt=""
                                className="w-[150px]"
                            />
                        </Link>
                    </div>
                    <div className="flex-block w-100">
                        <div className="col-8-12">
                            <div className="px-[5px]">
                                <p className="flex items-center pt-0 font-bold text-[1.2em] text-black mb-[15px] mt-[30px]">
                                    <BiCreditCard className="transform scale-x-[-1] mr-[8px] text-[1.1em] none-block" />
                                    Thanh toán
                                </p>
                                <label htmlFor="check-paying1" className="w-100">
                                    <input
                                        type="radio"
                                        name="check-paying"
                                        id="check-paying1"
                                        className="hidden paying-radio-payment"
                                        onChange={(e) => {
                                            if (e.target.checked) setOpenQRCode(true);
                                        }}
                                    />
                                    <div className="py-[12px] px-[25px] border-gray cursor-pointer radius-top-5 flex-center w-100">
                                        <div className="flex items-center">
                                            <span className="paying-checkbox-payment"></span>
                                            <span className="font-medium text-[1em]">
                                                Chuyển khoản qua ngân hàng
                                            </span>
                                        </div>
                                        <FaRegMoneyBillAlt className="text-[1.5em] fill-[#197bbd]" />
                                    </div>
                                    {openQRCode === true ? (
                                        <div className="paying-qrcode">
                                            <img
                                                src={QR}
                                                alt=""
                                            />
                                            <span className="text-[1em] text-[#262626] text-center">
                                                Nguyễn Anh Trường
                                            </span>
                                            <span className="text-[1em] text-[#262626] text-center">
                                                0121002557771 - Vietcombank
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </label>
                                <label htmlFor="check-paying2" className="w-100">
                                    <input
                                        type="radio"
                                        name="check-paying"
                                        id="check-paying2"
                                        defaultChecked
                                        className="hidden paying-radio-payment"
                                        onChange={(e) => {
                                            if (e.target.checked) setOpenQRCode(false);
                                        }}
                                    />
                                    <div className="py-[12px] px-[25px] border-gray cursor-pointer radius-bottom-5 flex-center w-100">
                                        <div className="flex items-center">
                                            <span className="paying-checkbox-payment"></span>
                                            <span className="font-medium text-[1em]">
                                                Thanh toán khi nhận hàng (COD)
                                            </span>
                                        </div>
                                        <FaRegMoneyBillAlt className="text-[1.5em] fill-[#197bbd]" />
                                    </div>
                                    {openQRCode === false ? (
                                        <div className="px-[25px] py-[35px] bg-[#ccc] rounded-bl-[5px] rounded-br-[5px]">
                                            Bạn chỉ phải thanh toán khi nhận được hàng
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </label>
                                <button onClick={clickPay} className="paying-btn-apply uppercase mt-4">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
