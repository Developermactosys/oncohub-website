import React from "react";
import cn from "../../../utils/cn";

const Label = ({ name, className="" }) => {
  return (
    <label className={cn(`text-[#274760]  text-sm xl:text-base font-normal`, className)}>
      {name}
    </label>
  );
};

export default Label;
