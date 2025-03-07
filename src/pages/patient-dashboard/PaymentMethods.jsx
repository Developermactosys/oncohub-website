import React, { useState } from "react";
import Label from "../../components/ui/field/Label";
import visa from "../../assets/images/visa.png";
import paypal from "../../assets/images/paypal.png";
import FormInput from "../../components/ui/field/FormInput";
import FormSelectInput from "../../components/ui/field/FormSelectInput";
import cardDetail from "../../assets/images/creditDetails.png";
import creditcard from "../../assets/images/creditcard.png";
import PatientButton from "../../components/ui/PatientButton";

import { CheckCircle, Divide } from "lucide-react";
import PaymentSuccessCard from "../../components/PaymentSuccessCard";

const paymentDetails = {
  amount: "1,000",
  refNumber: "000085752257",
  paymentTime: "25-02-2023, 13:22:16",
  method: "Bank Transfer",
  senderName: "Antonio Roberto",
};
const PaymentMethods = () => {
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  return (
    <div>
      {isPaymentDone ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <PaymentSuccessCard payment={paymentDetails} />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl  font-bold">Payment Methods</h1>

          <div className="py-10 xl:px-20 flex flex-col gap-3 xl:gap-4">
            <div className="">
              <div className="flex flex-col sm:flex-row gap-5 xl:gap-10">
                <div className="w-full">
                  <Label
                    name="Payment Method"
                    className="text-base font-semibold text-black"
                  />
                  <div className="flex items-center rounded-lg justify-between border border-[#D8D8D8] mt-2 px-3 py-1.5 sm:py-3 sm:px-5">
                    <img src={visa} alt="" />
                    <div className=" w-5 h-5 rounded-full border overflow-hidden flex justify-center items-center">
                      <input type="checkbox" className="w-5 h-5 " />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-end">
                  <div className="flex items-center rounded-lg justify-between border border-[#D8D8D8] px-3 py-2.5 sm:py-4 sm:px-5">
                    <img src={paypal} alt="" className="w-10" />
                    <div className=" w-5 h-5 rounded-full border overflow-hidden flex justify-center items-center">
                      <input type="checkbox" className="w-5 h-5 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 xl:gap-10 ">
              <div className="w-full">
                <Label
                  name="Holder Name"
                  className="text-base font-semibold text-black"
                />
                <FormInput
                  label="Holder Name"
                  onChange={() => console.log("")}
                />
              </div>
              <div className="w-full">
                <Label
                  name="Country"
                  className="text-base font-semibold text-black"
                />
                <FormSelectInput
                  className="border border-[#D8D8D8] placeholder-[#D8D8D8]"
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
            </div>
            <div>
              <div className="w-full">
                <Label
                  name="Payment Method"
                  className="text-base font-semibold text-black"
                />
                <div className="flex items-center rounded-lg justify-between border border-[#D8D8D8] mt-2 px-5">
                  <img src={cardDetail} alt="" />

                  <input
                    type=""
                    className=" border-0 w-full py-2 sm:py-3 px-5 focus:outline-none"
                  />
                  <span className="text-sm font- font-bold">MM/YY</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 xl:gap-10">
              <div className="w-full">
                <Label
                  name="Credit Card"
                  className="text-base font-semibold text-black"
                />
                <div className="flex items-center rounded-lg justify-between border border-[#D8D8D8] mt-2 px-5">
                  <img src={creditcard} alt="" />

                  <input
                    type="file"
                    className=" focus:outline-none w-full py-2 sm:py-3 px-5"
                  />
                </div>
              </div>

              <div className="w-full">
                <Label
                  name="Other Options"
                  className="text-base font-semibold text-black"
                />
                <FormSelectInput
                  className="border border-[#D8D8D8] placeholder-[#D8D8D8] "
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <PatientButton
                value="Submit"
                type="button"
                onClick={() => setIsPaymentDone(true)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
