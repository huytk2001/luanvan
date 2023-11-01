import BgProduct from "../../assets/images/product.png"
import BgBill from "../../assets/images/bill.png"
import BgSale from "../../assets/images/sale.png"
import BgCafe from "../../assets/images/cafe.png"
import BgCove from "../../assets/images/cove.png"
import BgCarot from "../../assets/images/carot.png"
import BgCachua from "../../assets/images/cachua.png"
import BgCuden from "../../assets/images/cuden.png"
import Dualeo from "../../assets/images/dualeo.png"
function DashBoard() {
    return (
        <>
            <div className="contail-sell px-2">
                <div className="w-[960px] h-[100%]  bg-slate-400 flex  flex-wrap py-[30px]  ">
                    <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none"></button>
                    <div className="  h-[auto] px-[20px]   rounded-md">
                        <div className="tab-content px-5 " id="pills-tabContent">
                            <div className="dashboard-home ">
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

                        <div className="total-box mt-4 w-[880px] h-[140px] px-5 ">
                            <div className="flex">
                                <div className="flex space-x-3">
                                    <div className="border px-3 rounded-lg bg-white w-[276px] h-[104px] text-center flex justify-center items-center">
                                        <div className="totle-contain w-[230px]  flex flex-wrap gap-5 h-full relative items-center ml-1 overflow-hidden">
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

                                    <div className="border px-3 rounded-lg bg-white w-[276px] h-[104px] text-center flex justify-center items-center">
                                        <div className="totle-contain w-[230px]  flex flex-wrap gap-5 h-full relative items-center ml-1 overflow-hidden">
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

                                    <div className="border px-3 rounded-lg bg-white w-[276px] h-[104px] text-center flex justify-center items-center">
                                        <div className="totle-contain w-[230px]  flex flex-wrap gap-5 h-full relative items-center ml-1 overflow-hidden">
                                            <div className="" >
                                                <img src={BgSale}
                                                    className=" custom-width remove-background absolute right-[-30px]
                                    opacity-20 top-[50%]  translate-y-[-50%] grayscale-[1]
                                    duration-300 ease-in-out hover:rotate-[-15deg]
                                    blur-up  transition-filter duration-400 hover:blur-0 " />
                                            </div>
                                            <div><img src={BgSale} className="w-[58px] h-[55px] remove-background " /></div>
                                            <div className="totle-detail ">
                                                <h5 className="text-gray-700 overflow-hidden ">Đơn Hàng Chờ</h5>
                                                <h3 className="text-3xl font-bold">36</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row flex w-[900px]  ">
                            <div className=" col-xxl-6 w-[50%] h-[auto]  flex relative px-5 ">
                                <div className=" relative  overflow-auto">
                                    <div className="table-responsive mt-3">


                                        <div className="bg-white rounded-lg overflow-hidden">
                                            <div className="dashboard-title mb-5 pt-2 text-[18px] pl-2">
                                                <h3>Sản phẩm nổi bật</h3>
                                            </div>
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
                            <div className="col-xxl-6 w-[50%]  h-[auto]  flex relative px-5">
                                <div className="order-tab   relative  mt-3 ">
                                    <div className="table-responsive bg-white rounded-lg overflow-auto p-2">
                                        <div className="dashboard-title  mb-5 pt-2 text-[18px] pl-2">
                                            <h3>Đơn Hàng Gần Đây</h3>
                                        </div>
                                        <table className="table order-table w-full ">
                                            <thead className="border-b border-solid border-inherit border-0">
                                                <tr className="border border-solid border-inherit border-0 text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <th className="border border-solid border-inherit border-0" scope="col">Mã Đơn Hàng</th>
                                                    <th className="border border-solid border-inherit border-0" scope="col">Tên Sản Phẩm</th>
                                                    <th className="border border-solid border-inherit border-0" scope="col">Trạng Thái</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image border border-solid border-inherit border-0">#254834</td>
                                                    <td className="border border-solid border-inherit border-0">
                                                        <h6>Tiêu đen 500g</h6>
                                                    </td>
                                                    <td className="border border-solid border-inherit border-0">
                                                        <label className=" inline-block py-1 px-3  text-xs rounded-full bg-red-400 bg-opacity-10 text-red-400">Đã Giao Hàng</label>
                                                    </td>
                                                </tr>


                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image border border-solid border-inherit border-0">#355678</td>
                                                    <td className="border border-solid border-inherit border-0">
                                                        <h6>Hạt điều hữu cơ 1kg</h6>
                                                    </td>
                                                    <td className="border border-solid border-inherit border-0">
                                                        <label className="inline-block py-1 px-3 text-xs rounded-full bg-emerald-300 bg-opacity-10 text-green-400">Chờ xử lý</label>
                                                    </td>
                                                </tr>



                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image border border-solid border-inherit border-0">#647536</td>
                                                    <td className="border border-solid border-inherit border-0">
                                                        <h6>Dưa leo 500g</h6>
                                                    </td>
                                                    <td className="border border-solid border-inherit border-0">
                                                        <label className="inline-block py-1 px-3 text-xs rounded-full bg-red-400 bg-opacity-10 text-red-400">Đã Giao Hàng</label>
                                                    </td>
                                                </tr>



                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image">#125689</td>
                                                    <td>
                                                        <h6>Bí đỏ 1kg</h6>
                                                    </td>
                                                    <td>
                                                        <label className="inline-block py-1 px-3 text-xs rounded-full bg-emerald-300 bg-opacity-10 text-green-400">Chờ xử lý</label>
                                                    </td>
                                                </tr>


                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image">#215487</td>
                                                    <td>
                                                        <h6>Gạo Lứt 1kg</h6>
                                                    </td>
                                                    <td>
                                                        <label className="inline-block py-1 px-3 text-xs rounded-full bg-red-400 bg-opacity-10 text-red-400">Đã Giao Hàng</label>
                                                    </td>
                                                </tr>



                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image">#365474</td>
                                                    <td>
                                                        <h6>Cà Phê 100g</h6>
                                                    </td>
                                                    <td>
                                                        <label className=" inline-block py-1 px-3 text-xs rounded-full bg-emerald-300 bg-opacity-10 text-green-400">Chờ xử lý</label>
                                                    </td>
                                                </tr>



                                                <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                    <td className="product-image">#368415</td>
                                                    <td>
                                                        <h6>Cà Chua 1kg</h6>
                                                    </td>
                                                    <td>
                                                        <label className="inline-block py-1 px-3 text-xs rounded-full bg-emerald-300 bg-opacity-10 text-green-400">Chờ xử lý</label>
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
        </>
    );
}

export default DashBoard;