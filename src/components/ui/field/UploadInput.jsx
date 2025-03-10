import React, { useState } from "react";
import { FaFilePdf, FaCheckCircle } from "react-icons/fa";
import upload_icon from "../../../assets/icon/upload_icon.svg";

const UploadInput = () => {
     const [selectedFile, setSelectedFile] = useState(null);
    
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) {
          setSelectedFile(file);
        } else {
          alert("File size should be less than 10MB");
        }
      };
  return (
    <div>
      <div className="">
        <label
          htmlFor="fileUpload"
          className=" border-primary  w-full  cursor-pointer rounded-lg"
        >
          <div className="flex flex-col items-center p-5 gap-2 text-gray-500 border-2 border-dashed border-primary">
            <span className="text-2xl">
              <img src={upload_icon} alt="" />
            </span>
            <p className="text-sm text-[#727272]">
              Drop File Here, Or{" "}
              <span className="text-primary font-semibold">Browse</span>
            </p>
            <p className="text-xs text-gray-400">Max Size 10MB</p>
          </div>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </label>

        {selectedFile && (
          <div className="mt-4 flex items-center justify-between bg-primary text-white px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <FaFilePdf className="text-lg" />
              <p className="text-sm">{selectedFile.name}</p>
            </div>
            <FaCheckCircle className="text-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadInput;
