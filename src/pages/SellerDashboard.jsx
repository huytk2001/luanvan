import React, { useState } from "react";
import Header from "../components/common/Header";
import SideBar from "../components/SellerDashboard/SideBar";
import DashBoard from "../components/SellerDashboard/DashBoard";
import Product from "../components/SellerDashboard/Product";
import Order from "../components/SellerDashboard/Order"
import Profile from "../components/SellerDashboard/Profile"
import Setting from "../components/SellerDashboard/Setting";
import Title from "../components/Title/Title";
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
                <Title />
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
