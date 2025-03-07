import React from "react";
import { CheckCircle } from "lucide-react";

const PaymentSuccessCard = ({ payment }) => {
  return (
    <div className="  bg-white shadow-xl p-6 border border-[#DDDDDD] rounded-lg">
      <div className="flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
          <CheckCircle className="text-[#0183CE] w-10 h-10" />
        </div>
      </div>

      <div className="text-center ">
        <h2 className="text-[#474747] text-2xl py-6 font-medium">
          Payment Success!
        </h2>
        <p className="text-4xl font-bold  text-[#0183CE]">
          INR {payment.amount}
        </p>
      </div>

      <hr className="my-6  border-dotted " />

      <div className=" space-y-2">
        <div className="flex justify-between">
          <span className="text-[#818181] text-base lg:text-lg font-normal sm:w-44">Ref Number</span>
          <span className=" font-semibold text-base lg:text-lg">{payment.refNumber}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#818181] text-base lg:text-lg font-normal w-32  sm:w-44">
            Payment Time
          </span>
          <span className=" font-semibold text-base lg:text-lg">{payment.paymentTime}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#818181] text-base lg:text-lg font-normal w-28 sm:w-44">
            Payment Method
          </span>
          <span className=" font-semibold text-base lg:text-lg">{payment.method}</span>
        </div>

        <div className="flex justify-between pb-5">
          <span className="text-[#818181] text-base lg:text-lg font-normal w-28 sm:w-44">
            Sender Name
          </span>
          <span className=" font-semibold text-base lg:text-lg">{payment.senderName}</span>
        </div>

        <hr className=" py-2  border-dotted " />

        <div className="flex  border-t-dottedn justify-between font-semibold ">
          <span className="text-base lg:text-lg text-[#818181] font-medium">Amount</span>
          <span className="text-base lg:text-lg font-medium">INR {payment.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessCard;
