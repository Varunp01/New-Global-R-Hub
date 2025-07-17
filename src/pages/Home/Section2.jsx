
const HSec2 = () => {
    return (
        <>
            <div className="w-full md:flex justify-items-center my-14">
                <div className="Numbers md:w-[50%] w-[100%] md:flex justify-center items-center p-5 pl-20 hidden">
                    <div class="grid grid-cols-2 gap-7">
                        <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers1)] before:content-[counter(num)]"> <span class="sr-only">180</span>+</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Project Ideas</dt>
                        </div>
                        <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers2)] before:content-[counter(num)]"> <span class="sr-only">30</span>+</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Mentors & Faculty Advisors</dt>
                        </div>
                        <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers3)] before:content-[counter(num)]"> <span class="sr-only">95</span> %</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Student Satisfaction Rate</dt>
                        </div>
                        {/* <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-7xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers4)] before:content-[counter(num)]"> <span class="sr-only">30</span>+</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Academic publications have published our student’s work</dt>
                        </div> */}
                    </div>
                </div>

                <div className="WeAchived md:w-[50%] w-[100%]  flex justify-center items-center p-5">
                    <div className="md:pr-16">
                        <div className="fontInter font-semibold text-[#0066FF] text-lg py-2">We Have Achieved</div>
                        <div className="fontInter font-bold text-black text-5xl py-2">EXPLORE RESEARCH INNOVATE WITH GLOBAL R-HUB</div>
                        <div className="fontInter font-medium text-[#818181] text-base py-2">Receive global expert mentorship from leading international faculty and PhD fellows to turn your academic interests into impactful, publishable research projects!</div>
                    </div>
                </div>

                <div className="Numbers md:w-[50%] w-[100%]  flex justify-center items-center p-5 px-11 md:hidden">
                    <div class="grid grid-cols-2 gap-7">
                    <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-5xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers1)] before:content-[counter(num)]"> <span class="sr-only">180</span>+</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Project Ideas</dt>
                        </div>
                        <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-5xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers2)] before:content-[counter(num)]"> <span class="sr-only">30</span>+</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Mentors & Faculty Advisors</dt>
                        </div>
                        <div className="">
                            <dd class="order-first tracking-tight">
                                <span class="fontInter font-bold text-[#0066FF] text-5xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-numbers3)] before:content-[counter(num)]"> <span class="sr-only">95</span> %</span>
                            </dd>
                            <dt class="fontInter font-medium text-[#818181] text-base">Student Satisfaction Rate</dt>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HSec2;