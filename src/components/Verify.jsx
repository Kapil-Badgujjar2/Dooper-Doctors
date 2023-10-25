import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Verify() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    const handleOtpChange = (e, index) => {
      const newOtp = [...otp];
  
      // Ensure the value is a single digit (0-9)
      const inputValue = e.target.value.slice(-1).replace(/[^0-9]/g, '');
  
      // Update the OTP array with the single digit
      newOtp[index] = inputValue;
      setOtp(newOtp);
  
      // Move focus to the next input if available
      if (index < otp.length - 1 && inputValue !== '') {
        inputRefs[index + 1].current.focus();
      }
    };
  return (
    <div className='mb-[100px]' >
        <div className='w-[416px] h-[211px] text-center mx-auto'>
        <h1 className='font-Montserrat text-[32px] font-[700] leading-[44px]'>Verify</h1>
        <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] mt-[7px]'>Enter OTP which we sent to you</h2>
        <div className='mt-4 flex justify-center space-x-4'>
              {otp.map((value, index) => (
                <>
              
              <div key={index} className="relative">
                <input
                  key={index}
                  type='text'
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  className='border font-Montserrat relative border-gray-300 rounded-md w-[62px] h-[44px] px-[16px] py-[12px] text-center text-[14px] font-[500] mt-[40px]'
                  maxLength="1"
                  ref={inputRefs[index]} 
                />
             </div>
             </> ))}
            </div>
            <Link to="/successful" className='inline-block w-[416px] rounded-[8px] bg-[#E40443] text-center mx-auto mt-[16px] justify-center font-Montserrat text-[14px] font-[600] text-white py-[12px]'>Verify OTP</Link>
      </div>
    </div>
  )
}
