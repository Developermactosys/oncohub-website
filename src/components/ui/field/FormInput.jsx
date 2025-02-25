import React from 'react'



const FormInput = ({ label, type = "text", value, onChange, placeholder }) => {
    return (
      <div className="w-full">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder || label}
          className="w-full p-2 sm:p-3 mt-2 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#0183CE] focus:border-transparent text-[#667085] placeholder-[#667085]"
        />
      </div>
    );
  };
  
  export default FormInput;
  