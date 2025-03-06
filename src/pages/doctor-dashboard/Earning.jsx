import React from "react";
import RevenueChart from "../../components/chart/RevenueChart";
import AppointmentTable from "../../components/ui/table/AppointmentTable";
import transaction from "../../assets/images/transaction-image.png";
import balance from "../../assets/images/balance.png";
import more from "../../assets/images/more-black.png";



const columns = [
  { header: "Name", rowKey: "name" },
  { header: "Amount", rowKey: "amount" },
  { header: "Type", rowKey: "type" },
  { header: "Date", rowKey: "date" },
  {
    header: "Status",
    rowKey: "status",
    render: () => (
      <button className="bg-[#767676] px-2 py-[2px] text-white rounded-full">
        Complete
      </button>
    ),
  },
];

const tableData = [
  {
    name: "John Doe",
    profileImage: transaction,
    amount: "$455.00",
    type: "UPI",
    date: "01 Dec 2022",
  },
  {
    name: "John Doe",
    profileImage: transaction,
    amount: "$455.00",
    type: "UPI",
    date: "01 Dec 2022",
  },
  {
    name: "John Doe",
    profileImage: transaction,
    amount: "$455.00",
    type: "UPI",
    date: "01 Dec 2022",
  },
  {
    name: "John Doe",
    profileImage: transaction,
    amount: "$455.00",
    type: "UPI",
    date: "01 Dec 2022",
  },
];

const Earning = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">  <RevenueChart /></div>
      <div>
      <div className="bg-[#FF5363] px-4 py-3 rounded-[10px] shadow-2xl drop-shadow-[0px_4px_10px_rgba(255,83,99,0.2)]">
          <div className="flex justify-between ">
            <h1 className="text-base font-semibold text-[#39354E]">Balance</h1>
            <button>
              <img src={more} alt="" />
            </button>
          </div>
          <div className="py-6 flex justify-between">
            <div>
              <p className="text-base font-normal pb-1">Total Balance</p>
              <h1 className="text-2xl font-bold">$10,000.00</h1>
            </div>
            <img src={balance} alt="" />
          </div>
        </div>
      </div>
       
      </div>

      <h1 className="text-[26px] font-bold py-10">All Transaction History</h1>
      <div>
        <AppointmentTable
          columns={columns}
          data={tableData}
          tableRowClassname="text-sm font-semibold  text-[#1D2939]"
          className="border text-base text-[#1D2939] border-[#DFDFDF] border-b-none "
        />
      </div>
    </div>
  );
};

export default Earning;
