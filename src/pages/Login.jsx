import React from 'react'
import Header from '../components/common/Header'
import Bglogin from '../assets/images/log-in.png'
import BgFacebook from '../assets/images/facebook.png'
import BgGoogle from '../assets/images/google.png'
// import BgLogIn from '../assets/images/log-in-bg.png'
export default function Login() {
  return (
    <>
      <Header />
      <section>
        <div className=" w-[100%] h-[50px] bg-slate-200">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">

            <div className="z-10 "><h2>Đăng nhập</h2></div>


            <ol className="flex gap-x-[8px] font-medium text-[14px]">
              <li>
                <i className="fa-solid fa-house"></i>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <h4>Đăng nhập</h4>
              </li>
            </ol>

          </div>
        </div>
      </section>
      <section className='py-10 '  >
        <div className="container-fluid-lg  ">
          <div className="row w-[100%] h-auto flex   ">
            <div className='flex relative m-auto '>
              <div className="left ">
                <div className='flex items-center justify-center h-full px-3'>
                  <img src={Bglogin} />
                </div>
              </div>

              <div className='right  bg-gray-200 px-3'>
                <div className="log-in-box px-5 py-5">
                  <div className="log-in-title mb-2">
                    <h3 className='font-medium leading-tight m-0 text-20'>Chào mừng bạn đến với FamersMarket</h3>
                    <h4 className='leading-6 m-0 font-normal text-18 mt-2'>Đăng nhập vào tài khoản của bạn</h4>
                  </div>
                  <div className="input-box">
                    <form>
                      <div className="from-floating relative mt-4">
                        <input type="text" className="w-full h-[50px] px-3 border" id="email" placeholder='' required />
                        <label className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none" htmlFor='email'>Email</label>
                      </div>

                      <div className='from-floating relative mt-4'>
                        <input type='text' className="w-full h-[50px] px-3 border required:" id='password' placeholder='' required />
                        <label className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none" htmlFor='password'>Mật khẩu</label>
                      </div>
                      <div className='forgot-box mt-4 flex items-center justify-between'>
                        <div className="rm flex items-center ">
                          <input className='checkbox' type='checkbox' id='CheckDefault' />
                          <label className='form-check-label ml-2' htmlFor='CheckDefault'>Ghi nhớ</label>
                        </div>
                        <div className="flex "><a href='forgot.html' className='forgot-password ml-2'>Quên mật khẩu</a></div>
                      </div>

                      <div className=" mt-4 log-in flex justify-center items-center w-100 h-[50px] overflow-hidden transition-all duration-300 ease-in-out text-white rounded-lg font-semibold bg-red-600"  >
                        <button className='btn-login ' type='submit'>Đăng nhập</button>
                      </div>
                    </form>
                  </div>

                  <div className="other-log-in mt-4 relative text-center">
                    <div className="relative">
                      <h6 className="bg-gray-200 uppercase px-14 py-2 inline-block relative z-10">
                        Hoặc
                      </h6>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[0.5px] bg-gray-400"></div>
                    </div>
                  </div>


                  <div className='log-in-button  '>
                    <ul className="flex flex-wrap gap-4 ">
                      <li className="w-full bg-zinc-50 h-[50px] flex justify-center items-center ">
                        <a href='https://www.google.com/' className="flex items-center gap-2">
                          <img className='w-8' src={BgGoogle} />
                          <span>Đăng nhập bằng Google</span>
                        </a>
                      </li>
                      <li className="w-full bg-zinc-50 h-[50px] flex justify-center items-center ">
                        <a href='https://www.facebook.com/' className="flex items-center gap-2">
                          <img className='w-8' src={BgFacebook} />
                          <span>Đăng nhập bằng Facebook</span>
                        </a>
                      </li>
                    </ul>
                  </div>


                  <div className='other-log-in mt-6 relative'>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[0.5px] bg-gray-400"></div>
                    <h6></h6>
                  </div>
                  <div className='other-sign-up mt-10 text-center'>
                    <h4 className='text-gray-700 leading-6 m-0 font-normal font-light mb-2 text-sm'>Bạn chưa có tài khoản?</h4>
                    <a href="sign-up.html " className='text-green-500 text-sm'>Đăng ký</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}
