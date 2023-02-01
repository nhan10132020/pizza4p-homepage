import React, { useState } from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import { useContextProvider } from '../context/Provider'
const Subbar = () => {
    
    return (
    <div className='h-[57px] flex fixed z-[1001] mt-[56px] md:z-[1001] w-[100%] md:mt-[0px] md:bottom-0 lg:hidden'>
        <div className='px-4 bg-[#595959] flex items-center md:flex-[1] md:justify-center'>
            <FiPhoneCall size="20px"/>
        </div>
        <div className='flex-[1] flex text-[14px]'>
            <div className='w-[50%] flex justify-center items-center bg-[#9EAF3B] md:w-[100%]'>
                <p>Delivery</p>
            </div>
            <div className='w-[50%] flex items-center justify-center bg-[#394F80] md:hidden'>
                <p>Reservations online</p>
            </div>
        </div>
    </div>
  )
}

export default Subbar