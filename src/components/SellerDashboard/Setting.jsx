



function Setting() {

    return (<>
        <div className="contail-sell px-2">
            <div className="w-[960px] h-[100%]  bg-slate-400 flex  flex-wrap py-[30px] px-[35px] ">
                <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none"></button>
                <div className=" w-[879px] h-[auto] px-[22px]    rounded-md">
                    <div className="tab-content " id="pills-tabContent">
                        <div className="dashboard-home flex flex-col">
                            <div className="title relative">
                                <h2 className="text-[21px] font-bold  relative ">Cài đặt của tôi</h2>
                                <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                                    <div className="absolute left-0 w-[45px] h-px bg-green-300 z-10"></div>
                                    <i className="relative fa-solid fa-seedling z-0"></i>
                                    <div className="absolute right-0 w-[45px] h-px bg-green-300 z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xxl-6 w-[840px] h-[436]  flex relative bg-slate-200 "> */}
                    <div className="  rounded-md relative bg-slate-200 px-4 py-4 mt-4">
                        <div className="dashboard-title mb-4">
                            <h3>Notifications</h3>
                        </div>
                        <div className="privacy-box">
                            <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                <input className="form-check-input" type="radio" id="desktop" name="desktop" checked />
                                <label className="form-check-label ms-2" htmlFor="desktop">
                                    Show Desktop Notifications
                                </label>
                            </div>
                        </div>

                        <div className="privacy-box">
                            <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                <input className="form-check-input" type="radio" id="enable" name="desktop" />
                                <label className="form-check-label ms-2" htmlFor="enable">
                                    Enable Notifications
                                </label>
                            </div>
                        </div>

                        <div className="privacy-box">
                            <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                <input className="form-check-input" type="radio" id="activity" name="desktop" />
                                <label className="form-check-label ms-2" htmlFor="activity">
                                    Get notification for my own activity
                                </label>
                            </div>
                        </div>

                        <div className="privacy-box">
                            <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                <input className="form-check-input BG" type="radio" id="dnd" name="desktop" />
                                <label className="form-check-label ms-2" htmlFor="dnd">
                                    DND
                                </label>
                            </div>
                        </div>

                        <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white bg-green-600 rounded-md">Save Changes</button>
                    </div>

                    <div className="rounded-md relative bg-slate-200 px-4 py-4 mt-4">
                        <div className="">
                            <div className="dashboard-title mb-4">
                                <h3>Deactivate Account</h3>
                            </div>

                            <div className="privacy-box">
                                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                    <input className="form-check-input" type="radio" id="concern" name="concern" />
                                    <label className="form-check-label ms-2" htmlFor="concern">
                                        I have a privacy concern
                                    </label>
                                </div>
                            </div>

                            <div className="privacy-box">
                                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                    <input className="form-check-input" type="radio" id="temporary" name="concern" />
                                    <label className="form-check-label ms-2" htmlFor="temporary">
                                        This is temporary
                                    </label>
                                </div>
                            </div>

                            <div className="privacy-box">
                                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                    <input className="form-check-input" type="radio" id="other" name="concern" />
                                    <label className="form-check-label ms-2" htmlFor="other">
                                        other
                                    </label>
                                </div>
                            </div>

                            <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white bg-green-600 rounded-md">Deactivate Account</button>
                        </div>
                    </div>


                    <div className="rounded-md relative bg-slate-200 px-4 py-4 mt-4">
                        <div className="dashboard-bg-box">
                            <div className="dashboard-title mb-4">
                                <h3>Delete Account</h3>
                            </div>

                            <div className="privacy-box">
                                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                    <input className="form-check-input" type="radio" id="usable" name="usable" />
                                    <label className="form-check-label ms-2" htmlFor="usable">
                                        No longer usable
                                    </label>
                                </div>
                            </div>

                            <div className="privacy-box">
                                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                    <input className="form-check-input" type="radio" id="account" name="usable" />
                                    <label className="form-check-label ms-2" htmlFor="account">
                                        Want to switch on other account
                                    </label>
                                </div>
                            </div>

                            <div className="privacy-box">
                                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                    <input className="form-check-input" type="radio" id="other-2" name="usable" />
                                    <label className="form-check-label ms-2" htmlFor="other-2">
                                        Other
                                    </label>
                                </div>
                            </div>

                            <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white bg-green-600 rounded-md">Delete My Account</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >




    </>);
}
export default Setting;