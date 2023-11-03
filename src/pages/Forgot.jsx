import React from 'react'
import Header from '../components/common/Header'
import BgForgot from '../assets/images/forgot.png'
import BgFacebook from '../assets/images/facebook.png'
import BgGoogle from '../assets/images/google.png'
// import BgLogIn from '../assets/images/log-in-bg.png'
export default function Forgot() {
    return (
        <>
            <Header />
            <section>
                <div className=" w-[100%] h-[50px] bg-slate-200">
                    <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">

                        <div className="z-10 "><h2>Quên mật khẩu </h2></div>


                        <ol className="flex gap-x-[8px] font-medium text-[14px]">
                            <li>
                                <i className="fa-solid fa-house"></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                            </li>
                            <li>
                                <h4>Quên mật khẩu </h4>
                            </li>
                        </ol>

                    </div>
                </div>
            </section>
            <section className='login-section py-10  flex relative items-center z-0 justify-center '  >
                <div className="container-fluid-lg  ">
                    <div className="row w-[100%]   mx-[-12px]  ">
                        <div className=' relative m-auto flex w-full '>
                            <div className="left flex ">
                                <div className="flex items-center justify-center h-full px-3 ml-[72px] ">
                                    <img src={BgForgot} />
                                </div>
                            </div>

                            <div className='right  bg-gray-200 px-3  ml-[72px] mr-[72px] px-3'>
                                <div className="log-in-box  px-10 py-10">
                                    <div className="log-in-title mb-2">
                                        <h3 className='font-medium leading-tight m-0 text-20'>Chào mừng bạn đến với FamersMarket</h3>
                                        <h4 className='leading-6 m-0 font-normal text-18 mt-2'>Quên mật khẩu của bạn </h4>
                                    </div>
                                    <div className="input-box ">
                                        <form className='flex flex-col w-full'>
                                            <div className="from-floating relative mt-4 w-full">
                                                <input type="text" className="w-full h-[50px] px-3 border" id="email" placeholder='' required />
                                                <label className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none" htmlFor='email'>Email</label>
                                            </div>

                                            <div className=" mt-4 log-in flex justify-center items-center w-full h-[50px] overflow-hidden transition-all duration-300 ease-in-out text-white rounded-lg font-semibold bg-red-600">
                                                <button className='btn-sign' type='submit'>Đăng ký</button>
                                            </div>
                                        </form>
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
