import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='text-2xl font-semibold bg-blue-700 '>
        <h2 className='font-bold text-xl text-center'>CÔNG TY TNHH ĐIỆN CÔNG NGHIỆP PHÚC TRƯỜNG AN

</h2>
      </div>
      <div class="bg-white">
        <div class="border ">
          <div class="flex justify-between">
            <div class="flex items-center w-[20%]">

              <span class="font-semibold w-full text-[#252C32]">
          <a href="/"><img className='w-full' src="https://bizweb.dktcdn.net/100/463/111/themes/889675/assets/logo.png?1686880710266" alt="logo" /></a>  
              </span>
            </div>

            <div class="ml-6 py-[20px] flex flex-1 gap-x-3">


              <input type="text" class="w-full h-[50px] rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" value="DJI phantom" />
            </div>

            <div class="ml-2 flex">
              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div>
                  <i class="fa-solid fa-phone"></i>
                  <b>Hotline:0933819292</b>
                </div>

              </div>

              

              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
                </div>
                <span class="text-sm font-medium">Cart</span>
              </div>

              <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                <span class="text-sm font-medium">Sign in</span>
              </div>
            </div>
          </div>
          {/* Navbar */}

          <div class="flex items-center justify-center  bg-yellow-500 p-3 w-[100%]">
            {/* <div class="flex gap-x-2 py-1 px-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <sp   an class="text-sm font-medium">Đồng Nai</span>
            </div> */}

            <div class="flex gap-x-8  ">

              <a className="nav-link dropdown-toggle font-bold" alt="product" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Danh mục sản phẩm
              </a>
              <ul className="dropdown-menu gap-3 ">
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn UFO năng lượng mặt trời</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn đường liền thể mặt trời</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn bàn chải năng lượng mặt trời</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn pha năng lượng mặt trời</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn trụ cổng & sân vườn</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn áp trần & Đèn thả hình loa</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Đèn cầm tay năng lượng mặt trời</a></li>
                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Quạt năng lượng mặt trời</a></li>

                <li><a className="dropdown-item font-semibold p-2 m-2" href="#">Phụ kiện đèn năng lượng mặt trời</a></li>

              </ul>


              <span class="cursor-pointer rounded-sm py-1 px-2  font-bold text-lg hover:bg-gray-100"><a href="/introduce">Giới thiệu</a></span>
              <span class="cursor-pointer rounded-sm py-1 px-2  font-bold text-lg hover:bg-gray-100"><a href="/project">Dự Án & Hoạt Động</a></span>
              <span class="cursor-pointer rounded-sm py-1 px-2  font-bold text-lg hover:bg-gray-100"><a href="/news">Tin Tức</a></span>
              <span class="cursor-pointer rounded-sm py-1 px-2  font-bold text-lg hover:bg-gray-100"><a href="">Liên Hệ</a></span>
              <span class="cursor-pointer rounded-sm py-1 px-2  font-bold text-lg hover:bg-gray-100"><a href="/baohanh">Bảo Hành</a></span>

            </div>

           
          </div>
        </div>
      </div>



    </div>


  )
}

export default Header