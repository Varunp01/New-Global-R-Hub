import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
const CustomForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [codePhone, setCodePhone] = useState('');
  const [rawPhone, setRawPhone] = useState('');
  const [countryPhone, setCountryPhone] = useState('');
  const [domainInterest, setDomainInterest] = useState("");
  const [dataSend, setDataSend] = useState(false);
  const navigate = useNavigate();

  const handlePhoneInputChange = (value, data, event, formattedValue) => {
    setPhno(value); // Keep the full phone number with country code
    setCodePhone(data.dialCode);
    setRawPhone(value.slice(data.dialCode.length)); // Store the raw phone number
    setCountryPhone(data.name); // Store the raw phone number
    // console.log("Full Phone Number (with dial code):", value);
    // console.log("Dial Code:", data.dialCode);
    // console.log("Raw Phone Number (without dial code):", value.slice(data.dialCode.length));
    // console.log("Formatted Value:", formattedValue);
  };

  let onSubmitButton = async (e) => {
    e.preventDefault();
    console.log(name, "+", email, "+", countryPhone, "+", codePhone, "+", rawPhone, "+", phno, "+", domainInterest);

    // try {
    //   fetch('https://sheetdb.io/api/v1/bllevnx615ar0', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       data: [
    //         {
    //           'website': `globalrhub.arevei.tech`,
    //           'name': `${name}`,
    //           'email': `${email}`,
    //           'countryPhone': `${countryPhone}`,
    //           'codePhone': `${codePhone}`,
    //           'rawPhone': `${rawPhone}`,
    //           'Phone': `${phno}`,
    //           'domainInterest': `${domainInterest}`
    //         }
    //       ]
    //     })
    //   }).then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       setDataSend(true);
    //       document.body.scrollTop = document.documentElement.scrollTop = 0;
    //       setTimeout(() => {
    //         setDataSend(false);
    //       }, 5000);
    //       setName("");
    //       setEmail("");
    //       setPhno("");
    //       setDomainInterest("");
    //     });

    // } catch (error) {
    //   alert(`try again because of ${error}`);
    //   console.error('Error adding data:', error);
    // }
  }


  return (
    <>
      <div className="w-full mx-auto" id='formHeading'>

        {(!dataSend)
          ? <div className=" bg-[#000000] rounded-2xl shadow-xl p-8 md:p-10 text-black">
            <form className="space-y-8" onSubmit={onSubmitButton} role="form">
              <h1 className="text-2xl font-bold  sm:text-5xl md:text-3xl text-center text-white uppercase">
                Global R-Hub
              </h1>
              <hr />
              {/* Full Name */}
              <div>
                <label htmlFor="form-name" className="block text-lg font-semibold text-gray-100 mb-3">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="form-name"
                    type="text"
                    name="form-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="form-email" className="block text-lg font-semibold text-gray-100 mb-3">
                  Your Email
                </label>
                <div className="relative">
                  <input
                    id="form-email"
                    type="email"
                    name="form-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="userid@gmail.com"
                    pattern="[^ @]*@[^ @]*"
                    className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone-number" className="block text-lg font-semibold text-gray-100 mb-3">
                  Your WhatsApp No.
                </label>
                <div className="relative">
                  <PhoneInput
                    id="phone-number"
                    name="phone-number"
                    country={"in"}
                    enableSearch={true}
                    value={phno}
                    onChange={handlePhoneInputChange}
                    placeholder="Enter Your phone number"
                    className="w-full text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400 text-black"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Your Domain of Interest */}
              <div>
                <label htmlFor="domainInterest" className="block text-lg font-semibold text-gray-100 mb-3">
                  Your Domain of Interest
                </label>
                <div className="relative">
                  <select className='w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400' onChange={(e) => setDomainInterest(e.target.value)} value={domainInterest} name="domainInterest" id="domainInterest" required>
                    <option value="">Select Domain of Interest</option>
                    <option value="student">Student</option>
                    <option value="working-professional">Working Professional</option>
                    <option value="parent">Parent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className=" flex w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 justify-center"
                >
                  Request a Call Back &nbsp;<Send className="" />
                </button>
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-400">We'll get back to you within 24 hours</p>
              </div>
            </form>
          </div>
          : <>
            <div class="flex flex-row gap-2 justify-center">
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
            {/* submit notifictaion bar */}
            <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setDataSend(false)}
                  className="absolute top-3 right-3 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-full p-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Success Icon */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-lg font-semibold text-green-800 mb-1">Message Received!</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Your message has been received. We will be in touch shortly.
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-green-200 rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </>
        }
      </div>

    </>
  )
}

export default CustomForm