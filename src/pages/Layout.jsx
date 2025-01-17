import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'

const Layout = () => {
    const [ShowNav, setShowNav] = useState(false);
    return (
        <>
            <div className="nav w-full md:flex">
                <div className="logo md:w-1/3 p-5 px-7 flex justify-center md:justify-normal">
                    <a href="/#"><img src="https://i.ibb.co/GRgD0LL/Logo-trials-1-1.png" alt="Global R-Hub Logo" className="h-9" /></a>
                </div>
                <div className="navbtns md:w-2/3 hidden sm:flex sm:items-center justify-center text-center md:justify-normal">
                    <div className="navbtn1 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/" className=" hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Home</span></Link></div>
                    <div className="navbtn2 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/Whychoose" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 active:bg-[#F93800]/20 rounded-md">Why Choose Global R-Hub?</span></Link></div>
                    <div className="navbtn3 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/BandA" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Before & After</span></Link></div>
                    <div className="navbtn4 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/reviews" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Testimonials</span></Link></div>
                </div>

                {(!ShowNav)
                    ? <>
                        <div className="navbtns md:w-2/3  sm:hidden sm:items-center justify-center text-center md:justify-normal">
                            <div className="navbtn1 px-5 py-3 text-[#68696F] text-base font-medium" onClick={() => setShowNav(true)}>
                                <span className=" flex justify-center text-center p-2 text-2xl hover:bg-[#F93800]/20 rounded-md">
                                Tap to see more pages 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                                </span>
                                </div>
                        </div>
                    </>
                    : <>
                        <div className="navbtns md:w-2/3  sm:hidden sm:items-center justify-center text-center md:justify-normal">
                            <div className="navbtn1 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/" className=" hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Home</span></Link></div>
                            <div className="navbtn2 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/Whychoose" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 active:bg-[#F93800]/20 rounded-md">Why Choose Global R-Hub?</span></Link></div>
                            <div className="navbtn3 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/BandA" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Before & After</span></Link></div>
                            <div className="navbtn4 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/reviews" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Testimonials</span></Link></div>
                        </div>
                    </>
                }



            </div>

            <Outlet />


            <div className=" flex items-center justify-center text-center py-7 px-3">
                <div className="">
                    <div className="flex justify-center py-3">
                        <img src="https://i.ibb.co/GRgD0LL/Logo-trials-1-1.png" alt="Global R-Hub Logo" className="h-7" />
                    </div>
                    <div className="py-3 fontInter font-normal text-xs text-[#191919]">
                        Copyright ©2024 all rights reserved.
                    </div>
                    <div className="pb-3 fontInter font-normal text-base text-[#4069B1] underline">
                        <a href="http://www.arevei.com">Designed by <span className="fontInter font-bold text-base text-[#4069B1]">AREVEI</span></a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Layout;