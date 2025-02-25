import React from 'react'
import cn from '../../../utils/cn';



const InputField = ({ placeholder, value, onChange,type,className="" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn("w-full px-4 py-2 border rounded-lg text-gray-600 outline-none mt-2 border-[#0183CE80] focus:ring-2 focus:ring-[#0183CE80]",className)}
    />
  );
};

export default InputField;
