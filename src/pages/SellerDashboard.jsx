import React, { useState } from "react";
import Header from "../components/common/Header";
import SideBar from "../components/SellerDashboard/SideBar";
import DashBoard from "../components/SellerDashboard/DashBoard";
import Product from "../components/SellerDashboard/Product";

function SellerDashboard() {
    const [currentContent, setCurrentContent] = useState("dashboard");

    const handleContentChange = (content) => {
        // Gọi hàm này để thay đổi nội dung hiện tại dựa trên lựa chọn từ SideBar
        setCurrentContent(content);
    };

    return (
        <>
            <Header />
            <div className="container-dashboard w-[100%] h-[1000px]">
                <div className="wrap w-[1280px] h-[800px] m-auto">
                    <div>
                        <div className="w-[1280px] h-[90px] container-fluid-lg flex justify-between items-center bg-slate-200 text-textDark">
                            <div className="font-bold text-[18px]">
                                <h2>Tổng quan người dùng</h2>
                            </div>
                            <div>
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
                    </div>
                    <div className="wrap-1 w-[1280px] h-[590px] pt-10 flex relative">
                        <SideBar handleContentChange={handleContentChange} />
                        {currentContent === "dashboard" && <DashBoard />}
                        {currentContent === "product" && <Product />}
                    </div>

                </div>
            </div>
        </>
    );
}

export default SellerDashboard;
