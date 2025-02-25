import React from "react";
import cn from "../../../utils/cn";

const ButtonBox = ({
  children,
  onClick = () => {},
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        `text-white  px-3 py-3 flex gap-3 items-center  font-medium bg-[#0183CE] rounded-md`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBox;
