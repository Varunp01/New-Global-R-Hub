import Form from "./Form";

const HSec1 = () => {
    return (
        <>
            <div className="">
                <div className="flex bg-cover bg-center bg-[url('https://i.ibb.co/grJVQRq/globnal.jpg')]">
                    <div className="md:flex md:justify-around md:items-center h-full w-[100%] border-white bg-gradient-to-r from-white via-white to-transparent  md:py-8">
                        <div className="w-[100%] md:w-[40%] p-7">

                            <div className="fontInter font-semibold text-6xl">India’s No.1 <span className="text-[#0066FF]">Online Research Program</span> for High School Students</div>
                            <div className="fontInter font-medium text-base text-[#818181] my-5">Receive global expert mentorship from leading international faculty and PhD fellows to turn your academic interests into impactful, publishable research project!</div>
                            <div className="my-5">
                                <a href="#form">
                                    <div class=" bg-[#0F172A] relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#F93800] opacity-[3%]"></span>
                                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#F93800] opacity-100 group-hover:-translate-x-8"></span>
                                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Register Now</span>
                                        <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="w-[100%] md:w-[40%] flex justify-center " id="form"><Form></Form></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HSec1;