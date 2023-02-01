import React from 'react'

const Description = () => {
  return (
        <div className='py-[60px] px-[15px] md:pt-[100px] md:px-[20px] md:pb-[85px] md:flex lg:max-w-[1060px] lg:mx-auto'>
            <div className='pb-[29px] text-[27px] md:flex-1 md:text-[32px] md:pr-[75px] md:pb-0 md:flex md:justify-center md:flex-col' data-aos="fade-right" >
                <h1 className='mb-[29px] md:mb-[20px]'><span className='text-[#9EAF3B] block'>“Magic of Pizza”</span>is the origin of our restaurant.</h1>
                <p className='text-[11px] text-[#ccc] tracking-[1.2px] leading-5 md:text-[14px] md:leading-[30px]'>
                    Back in 2005, the founder of Pizza 4P's, Masuko, built a wood-fired pizza oven with his friends in the backyard of his house. He invited his friends and family and hosted pizza parties.
                    In 2011, the original members who once made the pizza oven gathered again and started the history of Pizza 4P's. We named our restaurant Pizza 4P's, based on our vision, Make the World Smile "For Peace."
                </p>
            </div>
            <div className='md:flex-1 md:flex md:items-center' data-aos="fade-left">
                <img src="https://pizza4ps.com/img2017/top/img_top1.webp" className='block w-full bg-cover'/>
            </div>
        </div>
  )
}

export default Description