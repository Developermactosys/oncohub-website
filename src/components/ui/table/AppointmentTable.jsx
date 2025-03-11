import React from "react";
import cn from "../../../../src/utils/cn";

const AppointmentTable = ({ columns, data, className = "",tableRowClassname="" }) => {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full  border-blue-400 rounded-md">
        <thead
          className={cn(
            " text-left text-sm font-bold border-b border-b-[#C6C6C6]",
            className
          )}
        >
          <tr>
            {columns.map((column) => (
              <th key={column.rowKey} className="p-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn("border-b text-[13px] font-medium border-b-[#C6C6C6]",tableRowClassname)} 
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-3">
                  <div className="flex items-center gap-2">
                    {column.rowKey === "name" && row.profileImage ? (
                      <div className="flex flex-row items-center gap-2 w-32 ">
                        <img
                          src={row.profileImage}
                          alt={row.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <span className="text-center ">{row[column.rowKey]}</span>
                      </div>
                    ) : column.render ? (
                      column.render(row)
                    ) : (
                      row[column.rowKey]
                    )}
                  </div>
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
