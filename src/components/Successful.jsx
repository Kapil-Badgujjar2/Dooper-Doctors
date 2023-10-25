import React from 'react'
import done from '../assets/Done.svg'
import { Link } from 'react-router-dom'
export default function Successful() {
  return (
    <div className='flex flex-col items-center'>
       <img src={done} alt="" srcset="" className='mx-auto w-[200px] h-[200px]'/>
       <h1 className='font-Montserrat mx-auto h-[28px] font-[700] text-[27px] leading-[28px] mt-[40px]'>Successful</h1>
       <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] mx-auto mt-[7px]'>OPT Is verified successfully, Start your work as pharmacy</h2>
       <Link to='/profileunderreview' className= 'text-center mt-[40px] w-[416px] h-[44px] bg-[#FCE6EC] rounded-[8px] text-[14px] font-[600] font-Montserrat text-[#E40443] pt-[12px]'>Continue</Link>
    </div>
  )
}
