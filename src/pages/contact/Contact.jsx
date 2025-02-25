import React from "react";
import ContactForm from "../../components/ContactForm";
import phoneIcon from "../../assets/icon/phone.svg";
import emailIcon from "../../assets/icon/email.svg";
import locationIcon from "../../assets/icon/location.svg";

const Contact = () => {
  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <div className="container mx-auto">
        <ContactForm />
      </div>

      <div className="container mx-auto">
        <div>
          <h1 className="text-[#274760] text-3xl lg:text-4xl font-bold pb-10 xl:pb-16">
            Find Us Here
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3  gap-6">
            <div className="flex  gap-4  px-4 py-4 xl:px-7 xl:py-5  rounded-3xl  bg-[#D2EAEF80] shadow-xl">
              <img src={phoneIcon} alt="" className="max-w-7" />
              <div>
                <h6 className="text-[#274760] font-bold text-base xl:text-lg">Phone</h6>
                <p className="text-[#274760] text-base font-normal">
                  123-456-7890
                </p>
              </div>
            </div>
            <div className="flex  gap-4  px-4 py-4 xl:px-7 xl:py-5  rounded-3xl  shadow-xl bg-[#D2EAEF80]">
              <img src={emailIcon} alt="" className="max-w-7" />
              <div>
                <h6 className="text-[#274760] font-bold text-base xl:text-lg">Phone</h6>
                <p className="text-[#274760] text-base font-normal">
                  123-456-7890
                </p>
              </div>
            </div>
            <div className="flex  gap-4  px-4 py-4 xl:px-7 xl:py-5  rounded-3xl shadow-xl  bg-[#D2EAEF80]">
              <img src={locationIcon} alt="" className="max-w-7" />
              <div>
                <h6 className="text-[#274760] font-bold text-base xl:text-lg">Phone</h6>
                <p className="text-[#274760] text-base font-normal">
                  123-456-7890
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-7 xl:mt-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652949.2449954575!2d30.108150182091517!3d50.262372313978176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcdb32b1af5ab%3A0x81a520a075b9fa71!2sOncoHub!5e0!3m2!1sen!2sin!4v1740391468347!5m2!1sen!2sin"
              // width="100%"
              // height="500"
              className="w-full sm:h-64 lg:h-96 xl:h-[500px]"
              style={{ border: 0 ,borderRadius:12}}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
