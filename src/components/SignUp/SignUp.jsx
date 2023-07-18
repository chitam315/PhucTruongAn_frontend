import React from "react";
import "./SignUp.css";
import { useForm } from "../../hooks/useForm";
import { regexp, required } from "../../utils/validate";
import Input from "../Input"
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button"
import { useAsync } from "../../hooks/useAsync";
import { authService } from "../../service/auth.service";
import { message } from "antd";
export default function SignUp() {
  const rules = {
    username: [
      required(),
    ],
    password: [
      required(),
    ],
    email: [
      required(),
      regexp('email')
    ],
    full_name: [
      required()
    ],
    phone: [
      required(),
      regexp('phone')
    ],
    address: [
      required()
    ]
  }
  const form = useForm(rules)
  const navigate = useNavigate()

  const {execute: register} = useAsync(authService.register)

  const onSignup = async () => {
    if (form.validate()) {
      const temp = {
        username: form.values.username,
        password: form.values.password,
        email: form.values.email,
        inforUser: {
          full_name: form.values.full_name,
          phone: form.values.phone,
          address: form.values.address
        }
      }
      try {
        const res = await register(temp)
        console.log(res);
        if (res.data.metadata.errno) {
          message.error('Tài khoản đã tồn tại')
        } else {
          message.success('Đăng kí thành công tài khoản')
          navigate("/")
        }
      } catch (error) {
        message.error('Đang gặp vấn đề về đường truyền, vui lòng thử lại sau')
      }
    }
  }
  return (
    <>
      <section className="register-layout">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0 signup-respon">
          <div className="w-full bg-[#f3f3f3] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 pt-8 opacity-[0.9]">
            <div className="p-6 space-y-4 md:space-y-1 sm:px-8">
              <h1 className="text-[25px] mb-[0px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng ký tài khoản
              </h1>
              <div className="space-y-4  mt-[5px]">
                <div>
                  <label
                    for="username"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <Input placeholder="Nhập username" id="username" name="username" {...form.register('username')}></Input>
                </div>
                <div className="mt-[1px]">
                  <label
                    for="full_name"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ và tên
                  </label>
                  <Input placeholder="Nhập họ và tên" id="full_name" name="full_name" {...form.register('full_name')}></Input>
                </div>
                <div className="mt-[1px]">
                  <label
                    for="phone"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  {/* <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nhập số điện thoại của bạn"
                    required=""
                  /> */}
                  <Input placeholder="Nhập số điện thoại" id="phone" name="phone" {...form.register('phone')}></Input>
                </div>
                <div className="mt-[1px]">
                  <label
                    for="address"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Địa chỉ
                  </label>
                  <Input placeholder="Nhập địa chỉ" id="address" name="address" {...form.register('address')}></Input>
                </div>
                <div className="mt-[1px]">
                  <label
                    for="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email của bạn
                  </label>
                  <Input placeholder="Nhập email" id="email" name="email" {...form.register('email')}></Input>
                </div>
                <div className="mt-[1px]">
                  <label
                    for="password"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Input placeholder="Nhập password" type="password" id="password" name="password" {...form.register('password')}></Input>
                </div>


                <Button
                  className="w-full bg-[#0039a0] hover:bg-[#4a82eb] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={onSignup}
                >
                  Đăng ký
                </Button>
                <p className="text-sm text-black-500 dark:text-gray-400">
                  Bạn đã có tài khoản?{" "}
                  <Link
                    to="/signin"
                    className=" text-black-600 hover:underline dark:text-primary-500 text-[#463f3f]"
                  >
                    Login here
                  </Link>
                </p>

                {/* <!-- Divider --> */}
                {/* <div className="my-1 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-2 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <a
                    href="/#"
                    className="social-login--facebook"
                    onclick="loginFacebook()"
                  >
                    <img
                      width="170px"
                      height="50px"
                      alt="facebook-login-button"
                      src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                    />
                  </a>
                  <a
                    href="/#"
                    className="social-login--google"
                    onclick="loginGoogle()"
                  >
                    <img
                      width="170px"
                      height="50px"
                      alt="google-login-button"
                      src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                    />
                  </a>
                </div> */}
                <div className="flex justify-center ">
                  <Link to="/"
                    className="w-8/12  bg-gray-700 hover:bg-[#0039a0] hover:text-black text-white bg-primary-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center "
                  >
                    Quay về trang chủ

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
