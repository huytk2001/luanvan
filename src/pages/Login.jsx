import React from 'react'
import Header from '../components/common/Header'
import Bglogin from '../assets/images/log-in.png'
import BgFacebook from '../assets/images/facebook.png'
import BgGoogle from '../assets/images/google.png'
export default function Login() {
  return (
    <>
      <Header />
      <section>
        <div className=" w-[100%] h-[50px] bg-slate-200">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">

            <div className="z-10 "><h2>Tổng quan người dùng</h2></div>


            <ol className="flex gap-x-[8px] font-medium text-[14px]">
              <li>
                <i className="fa-solid fa-house"></i>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <h4>Tổng quan người dùng</h4>
              </li>
            </ol>

          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg  ">
          <div className="row w-[100%] h-auto flex   ">
            <div className='flex relative m-auto '>
              <div className="left px-3">
                <div className='flex items-center justify-center h-full'>
                  <img src={Bglogin} />
                </div>
              </div>

              <div className='right  bg-slate-300 px-3'>
                <div className="log-in-box px-5 py-5">
                  <div className="log-in-title mb-2">
                    <h3 className='font-medium leading-tight m-0 text-20'>Welcome To Fastkart</h3>
                    <h4 className='leading-6 m-0 font-normal text-18 mt-2'>Log In Your Account</h4>
                  </div>
                  <div className="input-box">
                    <form>
                      <div className="Email relative">
                        <label
                          htmlFor="email"
                          className="absolute transition-all left-3 top-2 text-gray-500"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder=""
                          className="border-2 border-gray-300 rounded-md p-2 pl-8 focus:outline-none focus:border-blue-500 transition-all"
                          onFocus="document.querySelector('.Email label').classList.add('top-0', 'text-blue-500', 'text-sm')"
                          onBlur="if (this.value === '') document.querySelector('.Email label').classList.remove('top-0', 'text-blue-500', 'text-sm')"
                        />
                      </div>
                      <div className='pw'>
                        <input type='password' className='' id='password' placeholder='password' ></input>
                        <label htmlFor='password'>Mật khẩu</label>
                      </div>
                      <div className='forgot-box'>
                        <div className='rm'>
                          <input className='checkbox' type='checkbox' id='CheckDefault' />
                          <label className='form-check-label' htmlFor='CheckDefault' >Ghi nhớ</label>
                        </div>
                        <a href='forgot.html' className='forgot-password'>Quên mật khẩu</a>
                      </div>
                      <div className='log-in'>
                        <button className='btn-login ' type='submit'>Đăng nhập</button>
                      </div>
                    </form>
                  </div>
                  <div className='other-log-in'>
                    <h6>Hoặc</h6>
                  </div>
                  <div className='log-in-button'>
                    <ul>
                      <li>
                        <a href='https://www.google.com/'>
                          <img src={BgGoogle} />Đăng nhập bằng Google
                        </a>
                      </li>
                      <li>
                        <a href='https://www.facebook.com/'>
                          <img src={BgFacebook} /> Đăng nhập bằng Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='other-log-in'>
                    <h6></h6>
                  </div>
                  <div className='other-singt-up'>
                    <h4>Bạn chưa có tài khoản?</h4>
                    <a href="sign-up.html">Đăng ký</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
