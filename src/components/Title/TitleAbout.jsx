export default function TitleAbout() {
    return (<>
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
    </>)
}