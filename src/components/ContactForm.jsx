import React from "react";
import FormInput from "../components/ui/field/FormInput";

const Label = ({ labelName }) => {
  return (
    <label className="text-[#3C4959] font-medium xl:text-base ">
      {labelName}
    </label>
  );
};

const ContactForm = () => {
  return (
    <div>
      <div className="sm:flex sm:justify-center items-center mx-4 sm:mx-0 pt-10 sm:pt-14">
        <div>
          <div className="flex flex-col gap-2 justify-center items-center pb-6 sm:pb-12 xl:pb-14">
            <h1 className=" text-3xl sm:text-4xl xl:text-[40px] font-bold ">Get In Touch</h1>
            <p className="text-lg font-medium">Book an Appointment</p>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:gap-5">
            <div className="flex flex-col sm:flex-row  gap-4 xl:gap-10">
              <div className="w-full">
                <Label labelName={"First Name"} />
                <FormInput
                  label="first name"
                  onChange={() => console.log("")}
                />
              </div>
              <div className="w-full">
                <Label labelName={"Last Name"} />
                <FormInput
                  label="first name"
                  onChange={() => console.log("")}
                />
              </div>
            </div>
            <div>
              <Label labelName={"Email"} />
              <FormInput
                type="email"
                label="Info@gmail.com"
                onChange={() => console.log("")}
              />
            </div>

            <div className="flex  flex-col sm:flex-row  gap-4 xl:gap-10">
              <div className="w-full">
                <Label labelName={"Phone Number"} />
                <FormInput
                  label="first name"
                  onChange={() => console.log("")}
                />
              </div>
              <div className="w-full">
                <Label labelName={"Last Name"} />
                <FormInput
                  type="date"
                  label="first name"
                  onChange={() => console.log("")}
                />
              </div>
            </div>

            <div>
              <Label labelName={"Message"} />
              <textarea
                name="message"
                className="w-full h-20  sm:h-28 px-3 py-2 mt-2 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#0183CE] focus:border-transparent text-[#667085] placeholder-[#667085]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-white  font-semibold text-sm  xl:text-base rounded-[10px] px-4 py-2 sm:py-3 xl:px-7 xl:py-[14px] bg-[#0183CE] mt-6 xl:mt-9">Book an appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
