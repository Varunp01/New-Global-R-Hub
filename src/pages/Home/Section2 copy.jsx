
const HSec2 = () => {
    return (
        <>
            <div className="w-full my-14">
                <div className="WeAchived flex justify-center items-center">
                    <div className="">
                        <div className="fontInter text-center font-semibold text-[#0066FF] text-lg py-2">We Have Achieved</div>
                        <div className="Numbers text-center items-center p-5 flex justify-evenly flex-wrap">
                            <div className="px-5 py-2">
                                <dd class="order-first tracking-tight">
                                    <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers1)] before:content-[counter(num)]"> <span class="sronly">60</span>+</span>
                                </dd>
                                <dt class="fontInter font-medium text-[#818181] text-base">Project Ideas</dt>
                            </div>
                            <div className="px-5 py-2">
                                <dd class="order-first tracking-tight">
                                    <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers2)] before:content-[counter(num)]"> <span class="sr-only">20</span>+</span>
                                </dd>
                                <dt class="fontInter font-medium text-[#818181] text-base">Mentors & Faculty Advisors</dt>
                            </div>
                            <div className="px-5 py-2">
                                <dd class="order-first tracking-tight">
                                    <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers3)] before:content-[counter(num)]"> <span class="sr-only">95</span> %</span>
                                </dd>
                                <dt class="fontInter font-medium text-[#818181] text-base">Student Satisfaction Rate</dt>
                            </div>
                        </div>
                        <div className="fontInter md:px-40 px-6  sm:text-center font-bold text-black text-5xl py-2">EXPLORE RESEARCH PROJECTS WITH GLOBAL R-HUB</div>
                        <div className="fontInter md:px-40 text-center px-5 font-medium text-[#818181] text-base py-2">Receive global expert mentorship from leading international faculty and PhD fellows to turn your academic interests into impactful, publishable research project!</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HSec2;