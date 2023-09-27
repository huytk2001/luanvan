import BgCafe from "../../assets/images/cafe.png"
import BgCove from "../../assets/images/cove.png"
import BgCarot from "../../assets/images/carot.png"
import BgCachua from "../../assets/images/cachua.png"
import BgCuden from "../../assets/images/cuden.png"
import Dualeo from "../../assets/images/dualeo.png"
function Product() {
    return (<>
        <div className="col-xxl-9 col-lg-8 w-[960px] h-[800px] px-3 bg-slate-200 ml-5 flex justify-center items-center">
            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none"></button>
            <div className="dashboard-right-sidebar w-[879px] h-[776px] px-7 py-7 ">
                <div className="tab-content " id="pills-tabContent">
                    <div className="dashboard-home flex flex-col">
                        <div className="title relative">
                            <h2 className="text-[21px] font-bold text-gray-700 relative ">Tất cả sản phẩm</h2>
                            <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                                <div className="absolute left-0 w-[45px] h-px bg-green-300 z-10"></div>
                                <i className="relative fa-solid fa-seedling z-0"></i>
                                <div className="absolute right-0 w-[45px] h-px bg-green-300 z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex">
                    <div className=" col-xxl-6  flex relative   ">
                        <div className="w-[840px] h-[auto] relative  overflow-auto">
                            <div className="table-responsive mt-3">


                                <div className="bg-white rounded-lg overflow-hidden">

                                    <table className="w-full table">
                                        <thead className="pt-2 border-b border-solid border-inherit border-0">
                                            <tr className="text-base font-semibold whitespace-nowrap min-w-[90px]">
                                                <th className="border border-solid border-inherit border-0" scope="col">Hình ảnh</th>
                                                <th className="w-[151px] border border-solid border-inherit border-0" scope="col">Tên sản phẩm</th>
                                                <th className="border border-solid border-inherit border-0" scope="col">Giá</th>
                                                <th className="border border-solid border-inherit border-0" scope="col">Lượt bán</th>
                                                <th className="" scope="col">Kho hàng</th>
                                                <th scope="col">Sữa/ Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <img src={BgCafe} className="w-[60px] h-[auto] mx-auto" alt="Hình ảnh sản phẩm" />
                                                </td>
                                                <td className="w-[151px] border border-solid border-inherit border-0">
                                                    <h6>Cà Phê Đắk Lắk</h6>
                                                </td>
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <h6>150.000₫</h6>
                                                </td>
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <h6>832</h6>
                                                </td>
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <h6>10</h6>
                                                </td>
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <button>Sửa/Xóa</button>
                                                </td>
                                            </tr>




                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                <td className="w-16 h-16">
                                                    <img src={BgCarot} className="w-12 h-auto mx-auto" alt="Hình ảnh sản phẩm" />
                                                </td>
                                                <td className="w-[151px] border border-solid border-inherit border-0">
                                                    <h6>Cà rốt lớn</h6>
                                                </td>
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <h6>50.000₫</h6>
                                                </td>
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <h6>332</h6>
                                                </td>
                                            </tr>



                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <img src={BgCove} className="w-12 h-auto mx-auto" alt="Hình ảnh sản phẩm" />
                                                </td>
                                                <td className="w-[151px] border border-solid border-inherit border-0">
                                                    <h6>Đậu Cove thường</h6>
                                                </td>
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <h6>60.000₫</h6>
                                                </td>
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <h6>500</h6>
                                                </td>
                                            </tr>


                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <img src={BgCachua} className="w-12 h-auto mx-auto" alt="Hình ảnh sản phẩm" />
                                                </td>
                                                <td className="w-[151px] border border-solid border-inherit border-0">
                                                    <h6>Cà Chua</h6>
                                                </td>
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <h6>40.000₫</h6>
                                                </td>
                                                <td className="w-16 h-16 border border-solid border-inherit border-0">
                                                    <h6>1200</h6>
                                                </td>
                                            </tr>



                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <img src={BgCuden} className="w-[60px] h-[auto] mx-auto" />
                                                </td>
                                                <td className="w-[151px] border border-solid border-inherit border-0">
                                                    <h6>Củ Dền</h6>
                                                </td>
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <h6>50.000₫</h6>
                                                </td>
                                                <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                                    <h6>2000</h6>
                                                </td>
                                            </tr>


                                            <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                                                <td className="w-[90px] h-[72px]">
                                                    <img src={Dualeo} className="w-[60px] h-[auto] mx-auto" />
                                                </td>
                                                <td className="w-[151px]">
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
                                    <nav className="custome-pagination ">
                                        <ul className="pagination flex r ">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="javascript:void(0)" tabIndex="-1">
                                                    <i className="fa-solid fa-angles-left"></i>
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="javascript:void(0)">1</a>
                                            </li>
                                            <li className="page-item" aria-current="page">
                                                <a className="page-link" href="javascript:void(0)">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript:void(0)">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript:void(0)">
                                                    <i className="fa-solid fa-angles-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Product;