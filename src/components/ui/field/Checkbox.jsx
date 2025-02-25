const Checkbox = ({ title, options, selectedOptions, onChange }) => {
    return (
      <div>
        <h3 className="text-gray-700 font-semibold mb-2">{title}</h3>
        <div className="flex flex-col xl:flex-row flex-wrap  gap-7">
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => onChange(option.value)}

                className="w-5 h-5 pl-4 text-[#0183CE] border border-[#0183CE] focus:ring-[#0183CE80] rounded-full"
              />
              <span className="text-[#27476085] text-base font-normal">{option.value}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default Checkbox;
  