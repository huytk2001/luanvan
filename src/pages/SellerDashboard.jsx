import BgSeller from "../assets/images/cover.png"
import BgStudio from '../assets/images/studio.png'
import Header from "../components/common/Header";
function SellerDashboard() {
    return (
        <>
            <Header />
            <div className="container-dashboard w-[100%]  h-[1000px] bg-slate-400">
                <div className="wrap w-[1280px] h-[800px] m-auto">
                    <div>
                        <div className=" w-[1280px] h-[90px] container-fluid-lg flex justify-between items-center bg-slate-200  text-textDark ">
                            <div className="font-bold text-[18px]" >
                                <h2>Tổng quan người dùng</h2>
                            </div>
                            <div >
                                <ol className="flex gap-x-[8px] font-medium text-[14px]">
                                    <li><i className="fa-solid fa-house"></i></li>
                                    <li><i className="fa-solid fa-chevron-right"></i></li>
                                    <li><h4>Tổng quan người dùng</h4></li>
                                </ol>
                            </div>


                        </div>
                    </div>
                    <div className="wrap-1 w-[1280px] h-[590px] pt-10 flex  relative  ">
                        <div className="dashboard-left-sidebar flex w-[300px] relative  ">
                            <div className="bg-slate-100 rounded-lg ">
                                <div className="profile-img  z-10 ">
                                    <div className="">
                                        <img src={BgSeller} className="w-full h-[150px] rounded-lg" alt="BgSeller" />
                                    </div>
                                </div>
                                <div className="profile-content w-[300px] h-[180px]  z-20 flex relative mt-[-50px] ">
                                    <div className="profile-w  h-[180px] pl-4 pr-4 absolute  ">
                                        <div className="  flex justify-center items-center  w-[270px] h-[105px] z-10 ">
                                            <div className="">
                                                <img src={BgStudio} className="w-[93px] h-[93px] bg-gray-200 rounded-full" alt="BgStudio" />
                                            </div>

                                        </div>
                                        <div className="profile text-center w-[270px] h-[65px] border-b border-gray-300">
                                            <div className="text-[21px] font-medium ">
                                                <h3>Farmers Market</h3>
                                            </div>
                                            <div className="text-[14px] font-normal">
                                                <h6>Farmersmarket.gmail.com</h6>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="profile-box relative">
                                    <ul className="w-[100%] ">
                                        <li className="flex items-center w-[100%] h-[52px] pl-2">
                                            <button>
                                                <i className="fa-solid fa-house  mx-3  "></i>
                                                <a>Trang quản lý </a>
                                            </button>

                                        </li>
                                        <li className="flex items-center w-[100%] h-[42px] pl-2 ">
                                            <button><i className="fa-solid fa-shop  mx-3"></i>
                                                <a>Sản phẩm</a>
                                            </button>

                                        </li>
                                        <li className="flex items-center w-[100%] h-[42px] pl-2 ">
                                            <button>
                                                <i className="fa-solid fa-shop  mx-3"></i>
                                                <a>Đơn hàng</a>
                                            </button>

                                        </li>

                                        <li className="flex items-center w-[100%] h-[42px] pl-2 ">
                                            <button>
                                                <i className="fa-solid fa-user  mx-3"></i>
                                                <a>Thông tin</a>
                                            </button>

                                        </li>

                                        <li className="flex items-center w-[100%] h-[42px] pl-2 ">
                                            <button>
                                                <i className="fa-solid fa-gear  mx-3"></i>
                                                <a>Cài đặt</a>
                                            </button>

                                        </li>
                                        <li className="flex items-center w-[100%] h-[42px] pl-2 ">
                                            <button>
                                                <i className="fa-solid fa-arrow-right-from-bracket  mx-3"></i>
                                                <a>Thoát</a>
                                            </button>

                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8 w-[946px] h-[1183px] pl-5 bg-slate-200">
                            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none"></button>
                            <div className="dashboard-right-sidebar">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="dashboard-home flex flex-col">
                                        <div className="title relative">
                                            <h2 className="text-[21px] font-bold text-gray-700 relative ">Trang quản lý của tôi</h2>
                                            <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                                                <div className="absolute left-0 w-[45px] h-px bg-green-300 z-10"></div>
                                                <i className="relative fa-solid fa-seedling z-0"></i>
                                                <div className="absolute right-0 w-[45px] h-px bg-green-300 z-10"></div>
                                            </div>
                                        </div>
                                        <div className="dashboard-user-name block ">
                                            <h6 className="text-content">Xin chào, <span className="text-title font-bold">Bạn</span></h6>
                                            <p className="text-content">
                                                Từ Trang quản lý tài khoản của bạn, bạn có khả năng xem bản tóm tắt về hoạt động tài khoản gần đây của mình và cập nhật thông tin tài khoản của mình. Chọn một liên kết dưới đây để xem hoặc chỉnh sửa thông tin.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="total-box">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                        <div className="col-span-1">
                                            <div className="totle-contain">
                                                <img src="../assets/images/svg/order.svg" className="img-1 blur-up lazyloaded" alt="" />
                                                <div className="totle-detail">
                                                    <h5 className="text-gray-700">Tổng Sản Phẩm</h5>
                                                    <h3 className="text-3xl font-bold">25</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <div className="totle-contain">
                                                <img src="../assets/images/svg/pending.svg" className="img-1 blur-up lazyloaded" alt="" />
                                                <div className="totle-detail">
                                                    <h5 className="text-gray-700">Tổng Doanh Số</h5>
                                                    <h3 className="text-3xl font-bold">12550</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <div className="totle-contain">
                                                <img src="../assets/images/svg/wishlist.svg" className="img-1 blur-up lazyloaded" alt="" />
                                                <div className="totle-detail">
                                                    <h5 className="text-gray-700">Đơn Hàng Chờ</h5>
                                                    <h3 className="text-3xl font-bold">36</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div >
            </div>
        </>
    )

        ;
}

export default SellerDashboard;