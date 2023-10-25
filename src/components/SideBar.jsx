import React from "react";
import Profile from "../assets/image.svg";
import star from "../assets/Star.svg";

const SideBar = () => {
  return (
    <div className="box-border w-[480px] rounded-[16px] p-10 bg-primary-darker min-h-full">
      <h1 className="text-white font-Montserrat text-base font-semibold">
        DOOPER
      </h1>
      <div className="box-border flex flex-col justify-between min-h-full ">
        <div className="mt-[60px]">
          {/* Headings */}
          <h2 className="flex text-white w-full font-montserrat text-4xl font-bold pr-32">
            Start your journey with us
          </h2>
          <h3 className="text-[#FFF] font-Montserrat text-2xl mt-[32px] font-normal w-[357px] pr-12">
            Discover the world’s best community of doctors and DHAs
          </h3>
        </div>
        <div>
          {/* Card */}
          <div className="w-full p-[32px] bg-white rounded-[16px] mb-[24px]">
            <div className="font-Montserrat text-[#1A1C1F] w-full text-[16px] font-normal mb-4">
              Simply unbelievable! I am really satisfied with the doctor who
              treated me. This is absolutely wonderful!
            </div>
            <div className="flex">
              <img
                src={Profile}
                alt="profile"
                className="w-[56px] rounded-[8px]"
              />
              <div className="ml-2">
                <div className="font-Montserrat text-[18px] font-[600] text-black">
                  Timson K
                </div>
                <ul className="mt-[9px] flex gap-1">
                  <li>
                    <img src={star} alt="" className="h-[16px] w-[16px]" />
                  </li>
                  <li>
                    <img src={star} alt="" className="h-[16px] w-[16px]" />
                  </li>
                  <li>
                    <img src={star} alt="" className="h-[16px] w-[16px]" />
                  </li>
                  <li>
                    <img src={star} alt="" className="h-[16px] w-[16px]" />
                  </li>
                  <li>
                    <img src={star} alt="" className="h-[16px] w-[16px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
