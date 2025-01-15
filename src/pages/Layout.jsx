import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="nav w-full md:flex">
                <div className="logo md:w-1/3 p-5 px-7 flex justify-center md:justify-normal">
                    <a href="/#"><img src="https://i.ibb.co/GRgD0LL/Logo-trials-1-1.png" alt="Global R-Hub Logo" className="h-9" /></a>
                </div>
                <div className="navbtns md:w-2/3 sm:flex sm:items-center justify-center text-center md:justify-normal">
                    <div className="navbtn1 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/" className=" hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Home</span></Link></div>
                    <div className="navbtn2 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/Whychoose" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 active:bg-[#F93800]/20 rounded-md">Why Choose Global R-Hub?</span></Link></div>
                    <div className="navbtn3 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/BandA" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Before & After</span></Link></div>
                    <div className="navbtn4 px-5 py-3 text-[#68696F] text-base font-medium"><Link to="/reviews" className="hover:text-[#F93800]"><span className="p-2 hover:bg-[#F93800]/20 rounded-md">Testimonials</span></Link></div>
                </div>
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