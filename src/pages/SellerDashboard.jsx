import React, { useState } from "react";
import Header from "../components/common/Header";
import SideBar from "../components/SellerDashboard/SideBar";
import DashBoard from "../components/SellerDashboard/DashBoard";
import Product from "../components/SellerDashboard/Product";
import Order from "../components/SellerDashboard/Order"
import Profile from "../components/SellerDashboard/Profile"
import Setting from "../components/SellerDashboard/Setting";
function SellerDashboard() {
    const [currentContent, setCurrentContent] = useState("dashboard");

    const handleContentChange = (content) => {
        // Gọi hàm này để thay đổi nội dung hiện tại dựa trên lựa chọn từ SideBar
        setCurrentContent(content);
    };

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
                    <div className="row w-[100%] h-[100%] flex">
                        <div className="wrap-1  pt-10 flex relative m-auto">
                            <SideBar handleContentChange={handleContentChange} />
                            {currentContent === "dashboard" && <DashBoard />}
                            {currentContent === "product" && <Product />}
                            {currentContent === "order" && <Order />}
                            {currentContent === "profile" && <Profile />}
                            {currentContent === "setting" && <Setting />}
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}

export default SellerDashboard;
