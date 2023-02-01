import React, { useContext, useState } from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineBars3} from 'react-icons/hi2'
import { useContextProvider } from '../context/Provider'

import flag from '../assets/image/flag_en.png'
import useComponentVisible from '../hooks/useComponentVisible'
import Navbaritem from './Navbaritem'
const Navbar = () => {

    const {isSubbarOpen,setIsSubbarOpen} = useContextProvider()

    const navBar = [
        {
            largeItem:"About",
            haveSub:true,
            sub:["About","House-made cheese","Farm to table","Design",'"Omotenashi"',"Company Profile"]
        },
        {
            largeItem:"Location",
            haveSub:false,
        },
        {
            largeItem:"Menu",
            haveSub:false,
        },
        {
            largeItem:"E-invoice",
            haveSub:false,
        },
        {
            largeItem:"News",
            haveSub:false,
        },
        {
            largeItem:"Activities",
            haveSub:true,
            sub:["Sustainability Report","Workshop","Jar Return Programme","Projection Mapping",'Donation',"All"]
        },
        {
            largeItem:"Career",
            haveSub:false
        },
        {
            largeItem:"Online Store",
            haveSub:false
        }
    ]
  return (
    <div className="h-[57px] w-[100%] text-white bg-[rgb(0,0,0,0.8)] flex justify-between fixed z-[999] lg:h-[88px]">
            <div className='flex items-center ml-8'>
                <img src="https://pizza4ps.com/common2017/img/header/logo_white.svg" alt="logo 4p" className="w-[96px] lg:w-[120px] xl:w-[176px]"/> 
            </div>
            <div className='flex lg:hidden'>
                <div className='px-4 flex items-center bg-[#74726b]'>
                    <FiPhoneCall size="24px"/>
                </div>
                <div className='px-4 flex items-center' onClick={()=>{setIsSubbarOpen(!isSubbarOpen)}}>
                    <HiOutlineBars3 size="24px"/>
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='flex items-center justify-center h-[100%] text-[14px]'>
                    {
                        navBar.map((item,index)=>(
                            <Navbaritem item={item} index={index} navBarLength ={Navbar.length-1}/>
                        ))
                    }
                    <img src={flag} alt="Flag" className='lg:px-6 xl:px-8'/>
                    <div className='h-[100%] flex lg:text-[16px] xl:text-[20px] '>
                        <div className='bg-[#3a4f80] transition duration-300 ease-linear hover:opacity-[0.6] flex items-center justify-center px-4 tracking-[2px]'>
                            <p>Reservations</p>
                        </div>
                        <div className='bg-[#9eaf3c] transition duration-300 ease-linear hover:opacity-[0.6] flex items-center justify-center px-4 tracking-[2px]'>
                            <p>Delivery</p>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Navbar