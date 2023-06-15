import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
      
            <div className='flex items-center justify-center h-[100vh] bg-slate-700 border border-solid'>
                <div className='w-[50%]'>
                    <div className='flex items-center border border-solid rounded-2xl '>
                        <img className='w-[100px]' src="" />
                        <h2 className='text-2xl font-semibold'>Công ty TNHH Điện Công Nghiệp Phúc Trường An</h2>
                    </div>

                    <form
                      
                        className=' p-10 border border-solid border-gray-800 rounded-md mt-10 bg-[#808080c7]'>
                        <h2 className='text-xl font-semibold'>Sign in to Your Account</h2>
                        <h3>Your Email</h3>
                        <input
                        
                            name='email'
                            className='w-full border border-solid border-orange-500 rounded-md text-lg py-1 px-2 outline-none focus:border-green-700 focus:border-2' type="email" />
                        

                        <h3>Pass Word</h3>
                        <input
                          
                            name='passWord'
                            className='w-full border border-solid border-orange-500 rounded-md text-lg py-1 px-2 outline-none focus:border-green-700 focus:border-2' type="passWord" />
                        

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-start gap-3 py-4'>
                                <input type="checkbox" name="" id="" />
                                <p>Remember Me</p>
                            </div>
                            <div>Forgot Password </div>

                        </div>
                        <button className='py-4 w-full hover:bg-orange-700 transition-all duration-500 hover:text-white bg-orange-400 rounded-md ' type='submit'>Sign in </button>
                        <p>Don't have account yet ?   <Link to="/">Sign Up</Link></p>


                    </form>

                </div>
            </div>
   
    )
}

export default Login