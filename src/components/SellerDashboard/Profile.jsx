import React, { useState } from 'react';



function Profile() {
    // State variables
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        companyName: 'Cửa Hàng Tạp Hóa',
        email: 'joshuadbass@rhyta.com',
        country: '107 Đường Veltri',
        // Add other profile data fields here
    });

    // Function to open the edit profile modal
    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    // Function to handle profile data submission (you can replace this)
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Process and update the profile data here (e.g., make an API call)
        // Then, close the modal
        setIsEditModalOpen(false);
    };
    return (<>
        <div className="contail-sell px-2">
            <div className="w-[960px] h-[100%]  bg-slate-400 flex  flex-wrap py-[30px] px-[35px] ">
                <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none"></button>
                <div className=" w-[879px] h-[auto] px-[22px]    rounded-md">
                    <div className="tab-content " id="pills-tabContent">
                        <div className="dashboard-home flex flex-col">
                            <div className="title relative">
                                <h2 className="text-[21px] font-bold  relative ">Tất cả sản phẩm</h2>
                                <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                                    <div className="absolute left-0 w-[45px] h-px bg-green-300 z-10"></div>
                                    <i className="relative fa-solid fa-seedling z-0"></i>
                                    <div className="absolute right-0 w-[45px] h-px bg-green-300 z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xxl-6 w-[840px] h-[436]  flex relative bg-slate-200 "> */}
                    <div className=" px-4 py-4 profile-tab  relative bg-slate-200">
                        <div className="dashboard-title flex justify-between items-center px-4 ">
                            <h3 className=" leading-5 relative font-semibold">Tên Hồ Sơ</h3>
                            <button className="btn-sm py-2 px-4 text-base font-medium bg-green-500 text-white" data-bs-toggle="modal" data-bs-target="#chinh-sua-ho-so" onClick={openEditModal}>Chỉnh Sửa Hồ Sơ</button>
                        </div>

                        <ul className="flex flex-wrap flex-col custom-gap">

                            <li className="flex items-center">
                                <h5 className="block w-[220px]">Tên Công Ty :</h5>
                                <h5 className="block">Cửa Hàng Tạp Hóa</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Địa Chỉ Email :</h5>
                                <h5 className="block">joshuadbass@rhyta.com</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Quốc Gia / Khu Vực :</h5>
                                <h5 className="block">107 Đường Veltri</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Thành Lập :</h5>
                                <h5 className="block">2022</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Số Lượng Nhân Viên :</h5>
                                <h5 className="block">154 - 360 Người</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Danh Mục :</h5>
                                <h5 className="block">Tạp Hóa</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Địa Chỉ Đường :</h5>
                                <h5 className="block">234 Đường High</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Thành Phố / Tỉnh :</h5>
                                <h5 className="block">107 Đường Veltri</h5>
                            </li>
                            <li className="flex">
                                <h5 className="block w-[220px]">Mã Zip :</h5>
                                <h5 className="block">B23 6SN</h5>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
export default Profile;