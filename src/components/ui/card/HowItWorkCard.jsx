import PatientButton from "../../ui/PatientButton"


const HowItWorkCard = ({ image, heading, description, highlightedText }) => {
    return (
      <div className=" flex flex-col lg:flex-row gap-6 lg:gap-14 xl:gap-16 ">
        <img src={image} alt="" className=" w-full lg:max-w-[60%]  xl:max-w-[70%] " />
        <div className="flex flex-col justify-between ">
          <div>
            <h1 className=" text-2xl lg:text-3xl  xl:text-4xl font-bold lg:leading-[40.56px] xl:leading-[50.56px] ">
              {heading}{" "}
              <span className=" text-[#0183CE] font-normal border-b-2 border-b-[#0183CE]">
                {highlightedText}
              </span>
            </h1>
            <p className="text-base xl:text-lg font-medium pt-5 xl:pt-7">{description}</p>
          </div>
          <div className="flex  justify-center sm:justify-start items-center py-5 lg:py-0">
            <PatientButton
              className="  px-6 py-2 font-medium  xl:px-9 xl:py-3 text-sm  xl:text-base"
              value={"Register Now"}
              type="button"
              onChange={() => console.log("")}
            />
          </div>
        </div>
      </div>
    );
  };


  export default HowItWorkCard