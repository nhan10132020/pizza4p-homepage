import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'

const Menu = () => {
    const menuItems = ["SEASONAL","PIZZA","FOOD","DESSERT"]
  return (
    <div className=' bg-bg-menu2 md:bg-bg-menu1 md:bg-cover md:bg-no-repeat' data-aos="fade-up">
        <div className='pt-[65px] pb-[50px] md:pt-[55px] md:pb[45px] max-w-[1100px] mx-auto'>
            <div className='text-[26px] md:text-[30px] flex items-center justify-center'>
                <AiOutlineMinus className="md:w-[25px] w-[16px] mr-[16px]"/>Our Menu<AiOutlineMinus className="ml-[16px] md:w-[25px] w-[16px]"/>
            </div>
            <div className='mt-[25px] md:mt-[35px] text-[15px] md:text-[22px] grid grid-cols-2 gap-y-6 md:gap-y-0 md:grid-cols-4'>
                {
                    menuItems.map((item,index)=>(
                        <h1 className={`pt-[17px] pb-[30px] md:pt-[40px] md:pb-[60px] text-center hover:text-[#9eaf3b] transition-all duration-200 ease-linear even:border-l-[1px] even:border-[#9b9da0] md:first:border-none md:border-r-[1px] md:border-[#9b9da0]`}>
                            {item}
                        </h1>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Menu