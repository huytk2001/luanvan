import Header from "../components/common/Header"
export default function Intro() {
    return (<>
        <Header />
        <section>
            <div className=" w-[100%] h-[50px] bg-slate-200">
                <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">

                    <div className="z-10 "><h2> Giới Thiệu</h2></div>


                    <ol className="flex gap-x-[8px] font-medium text-[14px]">
                        <li>
                            <i className="fa-solid fa-house"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            <h4>Giới thiệu </h4>
                        </li>
                    </ol>

                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className=" bg-slate-200">
                    <div>
                        <h1 className="text-center font-mono leading-normal text-green-500 text-[36px] font-normal">Chào mừng bạn đến với FamertMaket </h1>
                        <h2 className="text-center font-sans leading-normal text-[36px] font-normal"> Câu chuyện về chúng tôi</h2>

                        <div className="other-log-in mt-4 relative text-center">
                            <div className="relative max-w-[350px] mx-auto">
                                <div className="bg-gray-200 uppercase px-4 py-2 inline-block relative z-10">
                                    <i className="fa-solid fa-fan text-[30px] hover:animate-spin"></i>
                                </div>
                                <div className="absolute top-1/2  left-0 right-0 h-[0.5px] bg-gray-400"></div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    </>)
}