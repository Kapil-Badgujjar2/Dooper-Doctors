import React, { useEffect, useState } from 'react'
import Frame from '../assets/Frame.svg'
import { useNavigate } from 'react-router-dom';
export default function ProfileUnderReview() {
  const navigate = useNavigate();


  const [redirectTo, setRedirectTo] = useState(null);


  useEffect(() => {
    const timer = setTimeout(() => {
     
      setRedirectTo('/home'); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);
  return (
    <div>
       <img src={Frame} alt="" srcset="" className='text-center  mx-auto w-[200px] h-[200px]'/>
       <h1 className='font-Montserrat text-center mx-auto w-[221px]  h-[28px] font-[700] text-[20px] leading-[28px] justify-center  mt-[40px]'>Profile Under Review</h1>
       <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] text-center mx-auto mt-[8px] '>You profile is under review, which will be shown if <br /> the sign-up is completed.</h2>
    </div>
  )
}
