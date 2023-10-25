import React from "react";
import { Link } from "react-router-dom";
import india from "../assets/image.svg";
import arrow from "../assets/arrow.png";
import rect from "../assets/rect.png";

export default function LoginForm() {
  return (
    <div className=",t-[30px]">
      <div className="font-Montserrat h-[44px] w-[159px] text-[32px] font-[700] leading-[44px] text-center mx-auto">
        Welcome
      </div>
      <div className="text-center text-[#1A1C1F] mt-[2px] font-big text-[14px] mb-[40px] font-[500]">
        {" "}
        Welcome to <span className="font-[600] text-[#E40443]">DOOPER</span>,
        please enter your details
      </div>

      <div className="flex flex-col mx-auto w-[416px]">
        <label
          htmlFor=""
          className="text-[#8D98A4] h-[14px] text-[12px] font-[400] mb-1"
        >
          Phone Number
        </label>

        <div className="flex items-center border-solid border-[1px] border-[#EEF0F3] rounded-[8px] px-2 mb-[16px]">
          <div className="flex">
            <img src={india} alt="india" />
            <img src={arrow} alt="arr" />
            <img src={rect} alt="rect" srcSet="" />
          </div>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="flex text-center placeholder-[#5B6572]  text-[red] font-Montserrat  text-[14px] font-medium mx-auto w-[416px] h-[44px] mt-[4px] py-[12px] px-[16px] pr-[80px]"
          />
        </div>

        <Link
          to="/verify"
          className="text-center pt-[13px] h-[44px] w-[416px] rounded-[8px] px-[24px] text-white bg-[#E40443] font-Montserrat text-[14px] font-[600] "
        >
          Send OTP
        </Link>

        <div className="flex flex-col gap-[8px] mt-[60px] ml-[23px]">
          <div className="flex items-center text-black font-Montserrat text-[14px] font-normal flex flex-row">
            <input
              type="checkbox"
              className="mr-[14px] -mt-[2px] h-[18px] w-[18px] border-[#4B465C] border-2 "
            />
            By signing up you agree to{" "}
            <span className="text-[#E40443] ml-1"> Terms of use</span>
          </div>
          <div className="flex items-center text-black font-Montserrat text-[14px] font-normal flex flex-row">
            <input
              type="checkbox"
              className="mr-[14px] -mt-[2px] h-[18px] w-[18px] border-2 border-[#4B465C]"
            />
            By signing up you agree to{" "}
            <span className="text-[#E40443] ml-1">Marketing condition</span>
          </div>
        </div>
      </div>
    </div>
  );
}
