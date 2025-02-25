import React, { Children } from "react";
import cn from "../utils/cn";
const SectionBanner = ({ children, className = "" }) => {
  return (
    <div className="container mx-auto ">
      <div className={cn(`grid grid-cols-1 sm:grid-cols-2 gap-10`, className)}>
        {children}
      </div>
    </div>
  );
};

export default SectionBanner;
