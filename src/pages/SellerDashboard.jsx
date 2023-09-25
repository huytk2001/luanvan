import BgSeller from "../assets/images/cover.png"
import BgStudio from '../assets/images/studio.png'
import BgProduct from "../assets/images/product.png"
import BgBill from "../assets/images/bill.png"
import BgSale from "../assets/images/sale.png"
import BgCafe from "../assets/images/cafe.png"
import BgCove from "../assets/images/cove.png"
import BgCarot from "../assets/images/carot.png"
import BgCachua from "../assets/images/cachua.png"
import BgCuden from "../assets/images/cuden.png"
import Dualeo from "../assets/images/dualeo.png"

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

                                <div className="total-box mt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                        <div className="w-[280px] h-[100px] border border-white rounded-lg bg-white">
                                            <div className="totle-contain flex flex-wrap gap-5 h-full relative items-center ml-1 overflow-hidden">
                                                <div className="" >
                                                    <img src={BgProduct}
                                                        className=" custom-width remove-background absolute right-[-30px]
                                                     opacity-20 top-[50%]  translate-y-[-50%] grayscale-[1]
                                                         duration-300 ease-in-out hover:rotate-[-15deg]
                                                         blur-up lazyloaded transition-filter duration-400 hover:blur-0 " />
                                                </div>
                                                <img src={BgProduct} className="w-[58px] h-[55px] remove-background" />
                                                <div className="totle-detail  ">
                                                    <h5 className="text-gray-700 overflow-hidden">Tổng Sản Phẩm</h5>
                                                    <h3 className="text-3xl font-bold">25</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-[280px] h-[100px] border border-white rounded-lg bg-white">
                                            <div className="totle-contain flex flex-wrap gap-5 h-full relative items-center ml-1 overflow-hidden">
                                                <div className="" >
                                                    <img src={BgBill}
                                                        className=" custom-width remove-background absolute right-[-30px]
                                                     opacity-20 top-[50%]  translate-y-[-50%] grayscale-[1]
                                                         duration-300 ease-in-out hover:rotate-[-15deg]
                                                         blur-up lazyloaded transition-filter duration-400 hover:blur-0 " />
                                                </div>
                                                <img src={BgBill} className="w-[58px] h-[55px] remove-background " />
                                                <div className="totle-detail ">
                                                    <h5 className="text-gray-700 overflow-hidden">Tổng Doanh Số</h5>
                                                    <h3 className="text-3xl font-bold">12550</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-[280px] h-[100px] border border-white rounded-lg bg-white">
                                            <div className="totle-contain flex flex-wrap gap-5 h-full relative items-center ml-1 overflow-hidden">
                                                <div className="" >
                                                    <img src={BgSale}
                                                        className=" custom-width remove-background absolute right-[-30px]
                                                     opacity-20 top-[50%]  translate-y-[-50%] grayscale-[1]
                                                         duration-300 ease-in-out hover:rotate-[-15deg]
                                                         blur-up  transition-filter duration-400 hover:blur-0 " />
                                                </div>
                                                <img src={BgSale} className="w-[58px] h-[55px] remove-background " />
                                                <div className="totle-detail ">
                                                    <h5 className="text-gray-700 overflow-hidden ">Đơn Hàng Chờ</h5>
                                                    <h3 className="text-3xl font-bold">36</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex">
                                    <div className="w-[480px] h-[600px] bg-slate-500 flex relative px-5 ">
                                        <div className="w-[420px] h-[auto] relative ">
                                            <div className="table-responsive">
                                                <div className="dashboard-title mb-5 pt-2">
                                                    <h3>Sản phẩm nổi bật</h3>
                                                </div>

                                                <div className="bg-white rounded-lg overflow-hidden">
                                                    <table className="w-full table">
                                                        <thead className="pt-2 border-b border-solid border-inherit border-0">
                                                            <tr className="text-base font-semibold whitespace-nowrap min-w-[90px]">
                                                                <th className="border border-solid border-inherit border-0" scope="col">Hình ảnh</th>
                                                                <th className="border border-solid border-inherit border-0" scope="col">Tên sản phẩm</th>
                                                                <th className="border border-solid border-inherit border-0" scope="col">Giá</th>
                                                                <th className="border border-solid border-inherit border-0" scope="col">Lượt bán</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="mt-4 border-b border-solid border-inherit border-0">
                                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                                    <img src={BgCafe} className="w-[60px] h-[auto] mx-auto" alt="Hình ảnh sản phẩm" />
                                                                </td>
                                                                <td className="max-w-[150px] border border-solid border-inherit border-0">
                                                                    <h6>Cà Phê Đắk Lắk</h6>
                                                                </td>
                                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                                    <h6>150.000₫</h6>
                                                                </td>
                                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                                    <h6>832</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                        <tbody className="mt-4 border-b border-solid border-inherit border-0">
                                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                                <td className="w-16 h-16">
                                                                    <img src={BgCarot} className="w-12 h-auto mx-auto" alt="Hình ảnh sản phẩm" />
                                                                </td>
                                                                <td className="max-w-[150px] border border-solid border-inherit border-0">
                                                                    <h6>Cà rốt lớn</h6>
                                                                </td>
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <h6>50.000₫</h6>
                                                                </td>
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <h6>332</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                        <tbody className="mt-4 border-b border-solid border-inherit border-0 ">
                                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <img src={BgCove} className="w-12 h-auto mx-auto" alt="Hình ảnh sản phẩm" />
                                                                </td>
                                                                <td className="max-w-[150px] border border-solid border-inherit border-0">
                                                                    <h6>Đậu Cove thường</h6>
                                                                </td>
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <h6>60.000₫</h6>
                                                                </td>
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <h6>500</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tbody className="mt-4 border-b border-solid border-inherit border-0">
                                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <img src={BgCachua} className="w-12 h-auto mx-auto" alt="Hình ảnh sản phẩm" />
                                                                </td>
                                                                <td className="max-w-[150px] border border-solid border-inherit border-0">
                                                                    <h6>Cà Chua</h6>
                                                                </td>
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <h6>40.000₫</h6>
                                                                </td>
                                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                                    <h6>1200</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                        <tbody className="mt-4 border-b border-solid border-inherit border-0">
                                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                                    <img src={BgCuden} className="w-[60px] h-[auto] mx-auto" />
                                                                </td>
                                                                <td className="max-w-[150px] border border-solid border-inherit border-0">
                                                                    <h6>Củ Dền</h6>
                                                                </td>
                                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                                    <h6>50.000₫</h6>
                                                                </td>
                                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                                    <h6>2000</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tbody className="mt-4 border-b border-solid border-inherit border-0">
                                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                                <td className="w-[90px] h-[72px]">
                                                                    <img src={Dualeo} className="w-[60px] h-[auto] mx-auto" />
                                                                </td>
                                                                <td className="max-w-[150px]">
                                                                    <h6>Dưa Leo</h6>
                                                                </td>
                                                                <td className="w-[90px] h-[72px]">
                                                                    <h6>54.000₫</h6>
                                                                </td>
                                                                <td className="w-[90px] h-[72px]">
                                                                    <h6>2123</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6  w-[480px] h-[600px] bg-slate-500 flex relative px-5">
                                        <div className="order-tab w-[420px] h-[auto] relative bg-white">
                                            <div className="dashboard-title mb-4 pt-2">
                                                <h3>Đơn Hàng Gần Đây</h3>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table order-table w-full ">
                                                    <thead>
                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <th scope="col">Mã Đơn Hàng</th>
                                                            <th scope="col">Tên Sản Phẩm</th>
                                                            <th scope="col">Trạng Thái</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#254834</td>
                                                            <td>
                                                                <h6>Choco Chip Cookies</h6>
                                                            </td>
                                                            <td>
                                                                <label className="success">Đã Giao Hàng</label>
                                                            </td>
                                                        </tr>

                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#355678</td>
                                                            <td>
                                                                <h6>Premium Butter Cookies</h6>
                                                            </td>
                                                            <td>
                                                                <label className="danger">Chờ Xử Lý</label>
                                                            </td>
                                                        </tr>

                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#647536</td>
                                                            <td>
                                                                <h6>Sprinkled Potato Chips</h6>
                                                            </td>
                                                            <td>
                                                                <label className="success">Đã Giao Hàng</label>
                                                            </td>
                                                        </tr>

                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#125689</td>
                                                            <td>
                                                                <h6>Thuỷ Đặc 1 Lít</h6>
                                                            </td>
                                                            <td>
                                                                <label className="danger">Chờ Xử Lý</label>
                                                            </td>
                                                        </tr>

                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#215487</td>
                                                            <td>
                                                                <h6>Cơm Nắm Gạo Lứt</h6>
                                                            </td>
                                                            <td>
                                                                <label className="danger">Chờ Xử Lý</label>
                                                            </td>
                                                        </tr>

                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#365474</td>
                                                            <td>
                                                                <h6>Cà Phê Hòa Tan</h6>
                                                            </td>
                                                            <td>
                                                                <label className="success">Đã Giao Hàng</label>
                                                            </td>
                                                        </tr>

                                                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                            <td className="product-image">#368415</td>
                                                            <td>
                                                                <h6>Que Kê Và Bánh Kê Gạo Lứt</h6>
                                                            </td>
                                                            <td>
                                                                <label className="danger">Chờ Xử Lý</label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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