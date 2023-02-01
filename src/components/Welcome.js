import React from 'react'
import {FiArrowUpLeft} from 'react-icons/fi'
const Welcome = () => {
  return (
    <div className='bg-img01 bg-no-repeat bg-[length:259px_auto] md:bg-no-repeat md:bg-image01-ipad md:bg-auto '>
        <div className='py-[60px] px-[15px] md:pt-[100px] md:px-[20px] md:pb-[85px] md:flex lg:max-w-[1060px] lg:mx-auto'>
            <div className='pb-[32px] text-[27px] md:flex-1 md:text-[38px] md:flex md:items-center md:justify-center' data-aos="fade-right" data-aos-delay="150">
                <h1>Welcome to <span className='text-[#9EAF3B]'>Pizza 4P's</span></h1>
            </div>
            <div className='md:flex-1' data-aos="fade-left" >
                <p className='text-[11px] text-[#ccc] mb-[24px] tracking-[1.2px] leading-5 md:text-[14px] md:leading-[30px]'>
                    With our mission of "Delivering Wow, Sharing Happiness," we have been striving 
                    every day to provide the best dining experience to all of our dear guests. A restaurant 
                    should not be a place to simply have a meal. We truly want every guest to leave happy with our food, service, and 
                    environment that delivers the "Wow" factor. We continue to evolve and improve every day so that we can always fulfill our mission of "Delivering Wow, Sharing Happiness" to every guest.
                </p>
                <button className='border-[1px] border-[#fff] hover:text-[#9eaf3b] hover:border-[#9eaf3b] transition-all ease duration-300 w-[100%] flex justify-center items-center py-[6px] md:w-fit md:px-5 md:py-2.5'>
                    <h1 className='text-[18px] flex items-center'>About Pizza 4P's<FiArrowUpLeft size="16px" className='ml-[20px]'/></h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Welcome