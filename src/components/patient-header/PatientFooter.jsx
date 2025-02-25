import React, { useState } from "react";
import logo from "../../assets/images/patient-footer-logo.png";
import { div } from "framer-motion/client";
import PatientButton from "../ui/PatientButton";

const PatientFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-[#1D2128] rounded-t-[48px] text-white mt-16 xl:mt-20">
      <div className="container mx-auto py-10 xl:py-14">
        <div className="flex flex-col gap-4">
          <div>
            <img src={logo} alt="logo" className="max-w-[20%]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-10  justify-between">

            <div className="  flex flex-col gap-5  min-w-[30%]">
              <h2 className=" text-lg xl:text-xl font-semibold">Subscribe for More News</h2>
              <div className="  border relative rounded-full ">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" px-4 py-2 w-[100%]  text-black placeholder-[#BCC1CA]  rounded-full focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-[#0183CE] absolute right-0 hover:bg-[#2982b6] text-white font-semibold px-5 py-2 rounded-full "
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <ul className="flex flex-col gap-4">
                <li className=" text-lg xl:text-xl font-bold">Company</li>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className=" text-lg xl:text-xl   font-bold">Resources</li>
                <li>Blogs</li>
                <li>Podcasts</li>
                <li>Books</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="text-lg xl:text-xl font-bold">Contact </li>
                <li>Greyson Lane 6212-648 Palarni.</li>
                <li>(610) 945-7986</li>
                <li>hello@Transparent.co</li>
                <li className="pt-5 xl:pt-3">
                  <PatientButton value='Free Consultation' className=' text-sm sm:text-base   xl:px-7 xl:py-3 font-medium rounded-full' type={'button'}/>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFooter;
