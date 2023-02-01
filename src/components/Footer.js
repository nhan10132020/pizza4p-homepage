import React from 'react'
import {TfiFacebook} from 'react-icons/tfi'
import {TfiInstagram} from 'react-icons/tfi'
const Footer = () => {
  return (
    <div className='pt-[40px] pb-[54px] md:py-[30px] px-[20px] md:mb-[57px] lg:mb-0'>
        <div className='mx-auto max-w-[1030px]'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between tracking-wide'>
                <div className='hidden md:block md:w-[120px] lg:w-[154px] '>
                    <img src={"https://pizza4ps.com/common2017/img/header/logo_white.svg"}/>
                </div>
                <div className='flex justify-center text-[10px] md:text-[11px] lg-[text-12px] mb-[20px] md:mb-0'>
                    <p className='pr-[30px] md:pr-[10px] lg:pr-[30px] border-r-[1px] border-white'>Company Profile</p>
                    <p className='pl-[30px] md:pl-[10px] lg:pl-[30px]'>Follow us</p>
                    <TfiFacebook size={"14px"} className="ml-[30px] md:ml-[10px] lg:ml-[30px]"/>
                    <TfiInstagram size={"14px"} className="ml-[30px] md:ml-[10px] lg:ml-[30px]"/>
                </div>
                <div className='mt-[8px] md:my-0 mb-[25px] text-[11px] md:text-[12px] lg:text-[14px] flex flex-col items-center lg:items-start  '>
                        <p>For inquiry:</p>
                        <p>info@pizza4ps.com</p>
                </div>
                <div className='mt-[8px] md:my-0 mb-[25px] text-[11px] md:text-[12px]  lg:text-[14px] flex flex-col items-center lg:items-start '>
                        <p>For feedback:</p>
                        <p>feedback@pizza4ps.com</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[#878887] text-[14px] tracking-widest md:text-[12px]'>@ 2023 PIZZA 4P'S</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer