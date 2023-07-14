import React from "react";
import "../SignUp/SignUp.css";
import { useAuth } from "../AuthContext";
import { useAsync } from '../../hooks/useAsync'
import Input from "../Input";
import { useForm } from "../../hooks/useForm"
import { minMax, required } from "../../utils/validate";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Signin() {
  const {  login } = useAuth()
  const { execute: loginService, loading} = useAsync(login)
  const rules = {
    username: [
      required(),
      // regexp('email')
    ],
    password: [
      required(),
      minMax(6)
    ]
  }
  const form = useForm(rules)
  const onLogin = (ev) => {
    ev.preventDefault()
    if (form.validate()) {
      loginService(form.values)
    }
  }
  return (
    <>
      <section className="register-layout">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-[#f3f3f3] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 pt-8 opacity-[0.9]">
            <div className="p-6 space-y-4 md:space-y-1 sm:px-8">
              <h1 className="text-[25px] mb-[0px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng Nhập
              </h1>
              <div className="space-y-4  mt-[5px]">

                <div className="mt-[3px]">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <Input placeholder="Email" type="email" id="email" name="email" {...form.register('username')}></Input>
                  {/* <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nhập email của bạn"
                    required=""
                  /> */}
                </div>
                <div className="mt-[3px]">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Input placeholder="password" id="password" name="password" {...form.register('password')} type="password"></Input>
                  {/* <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập vào mật khẩu của bạn"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  /> */}
                </div>

                <Button onClick={onLogin} Loading={loading}>Đăng nhập</Button>
                {/* <button
                  type="submit"
                  className="w-full bg-[#0039a0] hover:bg-[#6293ee] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng Nhập
                </button> */}
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  <Link
                    href="/forget-password"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-gray-600 text-center"
                  >
                    Quên mật khẩu.
                  </Link>
                </p> */}

                {/* <!-- Divider --> */}
                <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  {/* <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    Đăng nhập bằng
                  </p> */}
                </div>
                {/* <div class="d-flex align-items-center justify-content-center">
                  <a
                    href="#/"
                    className="social-login--facebook"
                    onclick="loginFacebook()"
                  >
                    <img
                      width="150px"
                      height="50px"
                      alt="facebook-login-button"
                      src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                    />
                  </a>
                  <a
                    href="#/"
                    className="social-login--google"
                    onclick="loginGoogle()"
                  >
                    <img
                      width="150px"
                      height="50px"
                      alt="google-login-button"
                      src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                    />
                  </a>
                </div> */}
                <p className="text-sm text-center text-black-600 dark:text-black-600">
                  Tạo khoản để quản lý nếu chưa có tài khoản

                </p>
                <div className="flex justify-center ">
                  <Link to="/signup"
                    className="w-8/12  bg-gray-700 hover:bg-[#0039a0] hover:text-black text-white bg-primary-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Tạo tài khoản
                  </Link>
                </div>
                <div className="flex justify-center ">
                  <Link to="/"
                    className="w-8/12  bg-gray-700 hover:bg-[#0039a0] hover:text-black text-white bg-primary-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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

