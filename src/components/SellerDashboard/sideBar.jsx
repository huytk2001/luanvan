import React from "react";

import BgSeller from "../../assets/images/cover.png"
import BgStudio from '../../assets/images/studio.png'

function SideBar({ handleContentChange }) {
    const handleButtonClick = (content) => {
        // Gọi hàm handleContentChange để thay đổi nội dung hiện tại
        handleContentChange(content);
    };
    return (
        <div className="dashboard-left-sidebar flex w-[300px] relative  ">
            <div className="bg-slate-100 rounded-lg">
                <div className="profile-img  z-10">
                    <div className="">
                        <img src={BgSeller} className="w-full h-[150px] rounded-lg" alt="BgSeller" />
                    </div>
                </div>
                <div className="profile-content w-[300px] h-[180px]  z-20 flex relative mt-[-50px]">
                    <div className="profile-w  h-[180px] pl-4 pr-4 absolute">
                        <div className="  flex justify-center items-center  w-[270px] h-[105px] z-10">
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
                            <button onClick={() => handleButtonClick("dashboard")}>
                                <i className="fa-solid fa-house  mx-3  "></i>
                                <a>Trang quản lý </a>
                            </button>
                        </li>
                        <li className="flex items-center w-[100%] h-[42px] pl-2 ">
                            <button onClick={() => handleButtonClick("product")}>
                                <i className="fa-solid fa-shop  mx-3"></i>
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
    );
}

export default SideBar;
