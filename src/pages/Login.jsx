import React from "react";
import SideBar from "../components/SideBar";
import dooper from "../assets/Dooper.svg";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex p-[24px] bg-[#FFFFFF] min-h-screen">
        <SideBar />
        <div className="flex flex-col justify-between w-[800px] flex-1 ml-[32px] bg-white top-[24px] left-[616px] justify-between pt-[48px] pb-[24px] pr-[12px]">
          <img
            src={dooper}
            alt="dooper"
            className="mx-auto w-[170px]"
          />
            <Outlet />

          <div className="text-center text-[#5B6572] font-Montserrat text-[16px] font-normal pt-20">
            Join the community of smart and experienced doctors. Login to access
            your <br /> personalized dashboard, track your record or process and
            get informed by our services
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
