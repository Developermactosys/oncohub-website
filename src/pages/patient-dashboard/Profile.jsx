import React from "react";
import PatientButton from "../../components/ui/PatientButton";
import profile_image from "../../assets/images/profile-image.png";
import FormInput from "../../components/ui/field/FormInput";
import FormSelectInput from "../../components/ui/field/FormSelectInput";
import { UploadCloud } from "lucide-react";

const Label = ({ labelName }) => {
  return (
    <label className="text-black font-medium xl:text-base  ">{labelName}</label>
  );
};
const Profile = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full object-cover">
              <img src={profile_image} alt="" />
            </div>

            <div>
              <p className="text-lg font-bold">Alexa Rawles</p>
              <p className="text-sm text-[#727272] font-normal">alexarawles@gmail.com</p>
            </div>
          </div>
          <div className="pt-4 sm:pt-0">
            <PatientButton value={"Edit"} className="px-4 py-1  sm:px-7 sm:py-2 text-base" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold py-8">Personal Detail</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <Label labelName={"Enter Your Title"} />
                <FormInput
                  className="border border-[#DBDBDB] placeholder-[#727272]"
                  label="first name"
                  placeholder="Enter Your Title"
                  onChange={() => console.log("")}
                />
              </div>
              <div className="w-full">
                <Label labelName={"Name"} />
                <FormInput
                  className="border border-[#DBDBDB] placeholder-[#727272]"
                  label="Full Name"
                  placeholder="Full Name"
                  onChange={() => console.log("")}
                />
              </div>
            </div>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="w-full">
                <Label labelName={"City "} />
                <FormSelectInput
                  className="border border-[#DBDBDB]"
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
              <div className="w-full">
                <Label labelName={"Specialization "} />
                <FormSelectInput
                  className="border border-[#DBDBDB]"
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
            </div>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="w-full">
                <Label labelName={"Gender"} />
                <FormSelectInput
                  className="border border-[#DBDBDB]"
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
              <div className="w-full">
                <Label labelName={"Experience"} />
                <FormInput
                  className="border border-[#DBDBDB] placeholder-[#727272]"
                  label="Enter years of experience"
                  placeholder="Enter years of experience"
                  onChange={() => console.log("")}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold py-8">
            Education Qualification & Proof
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <Label labelName={"Qualification Details"} />
                <FormInput
                  className="border border-[#DBDBDB] placeholder-[#727272]"
                  placeholder="Enter qualification details"
                  onChange={() => console.log("")}
                />
              </div>
              <div className="w-full">
                <Label labelName={"Registration details and proof"} />
                <FormInput
                  className="border border-[#DBDBDB] placeholder-[#727272]"
                  placeholder="Enter registration details"
                  onChange={() => console.log("")}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col w-full ">
                <Label labelName={"Registration details and proof"} />
                <div className="flex flex-col w-full relative">
                  <div className="relative border h-28 sm:h-40 mt-2 border-[#DBDBDB] rounded-lg flex items-center justify-center bg-gray-100 cursor-pointer">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />

                    <div className="flex flex-col items-center text-gray-500">
                      <UploadCloud size={32} />
                      <p className="text-base text-[#727272] font-medium mt-2">Click to upload</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col  ">
                <Label labelName={"About"} />
                <textarea
                  rows={4}
                  className=" border p-2 h-28 sm:h-40 mt-2 border-[#DBDBDB] rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#0183CE]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
