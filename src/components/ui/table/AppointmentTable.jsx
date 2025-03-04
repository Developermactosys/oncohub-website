import React from "react";

const AppointmentTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full  border-blue-400 rounded-md">
        <thead className=" text-left text-sm font-bold border-b border-b-[#C6C6C6]">
          <tr>
            {columns.map((column) => (
              <th key={column.rowKey} className="p-3 ">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b text-[13px] font-medium border-b-[#C6C6C6]"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-3 ">
                  {column.render ? column.render(row) : row[column.rowKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
