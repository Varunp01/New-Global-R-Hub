import { useState } from 'react'

function Form() {
    const [count, setCount] = useState(0)


    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Domain, setDomain] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [dataSend, setDataSend] = useState(false);

    let onSubmitButton = async (e) => {
        e.preventDefault();
        console.log(FName, "+", LName, "+", Email, "+", Domain, "+", PhoneNo);

        try {
            fetch('https://sheetdb.io/api/v1/tc6wqv9vuayj4', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: [
                        {
                            'FName': `${FName}`,
                            'LName': `${LName}`,
                            'Email': `${Email}`,
                            'Domain': `${Domain}`,
                            'PhoneNo': `${PhoneNo}`
                        }
                    ]
                })
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setDataSend(true);
                    setTimeout(() => {
                        setDataSend(false);
                    }, 5000);
                    setFName("");
                    setLName("");
                    setEmail("");
                    setDomain("");
                    setPhoneNo("");
                });

        } catch (error) {
            alert(`try again because of ${error}`);
            console.error('Error adding data:', error);
        }
    }


    return (
        <>
            {(!dataSend)
                ? <form className="bg-white border-white border-2 px-9 py-4 w-[90%] rounded-[24px]" onSubmit={onSubmitButton} role="form">
                    <h2 className="font-semibold text-3xl fontInter">Begin Your Research Journey Today!</h2>
                    <div className="text-center mb-3">
                    </div>
                    <hr />
                    <div className="md:flex">
                        <div className=" md:mr-4">

                            <label for="First-Name" class="mt-4 block mb-2 text-sm font-medium text-gray-900">First Name</label>
                            <div class=" relative mb-2">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input onChange={(e) => setFName(e.target.value)} value={FName} type="text" id="First-Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="First Name" required></input>
                            </div>
                        </div>
                        <div className="">

                            <label for="Last-Name" class="mt-4 block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                            <div class=" relative mb-2">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input onChange={(e) => setLName(e.target.value)} value={LName} type="text" id="Last-Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Last Name" required></input>
                            </div>
                        </div>
                    </div>

                    <label for="email-address-icon" class=" mt-4 block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                    <div class="relative mb-2 ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input onChange={(e) => setEmail(e.target.value)} value={Email} pattern="[^ @]*@[^ @]*" type="email" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="username@company.com" required></input>
                    </div>

                    <label for="Domain-Interest" class=" mt-4 block mb-2 text-sm font-medium text-gray-900">Domain Of Interest</label>
                    <div class="relative mb-2 ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                            </svg>
                        </div>
                        <select id="Domain-Interest" onChange={(e) => setDomain(e.target.value)} value={Domain} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" required>
                            <option value="">Select User Type</option>
                            <option value="Economics">Economics</option>
                            <option value="Finance & Accounting">Finance & Accounting</option>
                            <option value="Business Studies">Business Studies</option>
                            <option value="AI & Emerging Technology">AI & Emerging Technology</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                            <option value="Psychology">Psychology</option>
                            <option value="International Relations">International Relations</option>
                            <option value="Law">Law</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <label for="phone-number" class=" mt-4 block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                    <div class="relative mb-2 ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input onChange={(e) => setPhoneNo(e.target.value)} value={PhoneNo} type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="+91 xxx xxx xxxx" id="phone-number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" required></input>
                    </div>

                    <div className="mt-4 ">
                        {/* <button type="submit" className="bg-[#F93800] px-4 py-2 fontInter text-white font-semibold text-base rounded-full text-center ">Request a Call Back</button> */}
                        <button type="submit" className="fontInter  font-semibold text-base rounded-full  px-5 py-2.5 overflow-hidden group bg-[#F93800] relative hover:bg-gradient-to-r hover:from-[#F93800] hover:to-[#fc501e] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#F93800] transition-all ease-out duration-300">Request a Call Back</button>
                    </div>



                    {/* <div className="ebook-download-form-body">
                        <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="" style={{ width: "45%" }}>
                                Your Name
                                <div className="input-group mb-4">
                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="form-name" id="ebook-form-name" className="form-control" aria-label="ebook-form-name" aria-describedby="basic-addon1" placeholder="Your Name" required></input>
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="custom-form-icon bi-person"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="" style={{ width: "50%" }}>
                                Your User Type
                                <div className="input-group mb-4">
                                    <select onChange={(e) => setUserType(e.target.value)} value={userType} name="user-type" id="user-type" className="form-control" required>
                                        <option value="">Select User Type</option>
                                        <option value="student">Student</option>
                                        <option value="working-professional">Working Professional</option>
                                        <option value="parent">Parent</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="custom-form-icon bi-person"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            Your City
                            <div className="input-group mb-4">
                                <input onChange={(e) => setCity(e.target.value)} value={city} type="text" name="form-city" id="form-city" className="form-control" aria-label="form-city" aria-describedby="basic-addon4" placeholder="eg. London" required></input>
                                <span className="input-group-text" id="basic-addon4">
                                    <i className="custom-form-icon bi-globe"></i>
                                </span>
                            </div>
                        </div>
                        <div className="">
                            Your Email
                            <div className="input-group mb-4">
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="form-email" id="ebook-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="company@gmail.com" aria-label="ebook-form-email" aria-describedby="basic-addon2" required></input>
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="custom-form-icon bi-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className="">
                            Your WhatsApp
                            <div className="input-group mb-4">
                                <input onChange={(e) => setPhno(e.target.value)} value={phno} type="tel" name="phone-number" id="phone-number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" className="form-control" placeholder="+91 xxx xxx xxxx" aria-label="phone-form-number" aria-describedby="basic-addon3" required></input>
                                <span className="input-group-text" id="basic-addon3">
                                    <i className="custom-form-icon bi-telephone"></i>
                                </span>
                            </div>
                        </div>

                        </div> */}

                </form>
                : <>
                    <div class="inline-flex overflow-hidden text-white bg-gray-900 rounded group" onClick={() => setDataSend(false)}>
                        <span class="px-3.5 py-2 text-white bg-[#F93800] group-hover:bg-[#fc501e] flex items-center justify-center">
                        <span aria-hidden="true" className='text-2xl font-extrabold'>&times;</span>
                        </span>
                        <span class="pl-4 pr-5 py-2.5"><strong>Your message has been received. </strong><br /> We will be in touch shortly.</span>
                    </div>
                </>
            }

        </>
    )
}

export default Form