import React from 'react'
const Banner = () => {
  return (
      <div className=" mt-[73px] h-[480px] md:h-[auto] md:mt-[auto] relative font-century">
        <img src={"https://pizza4ps.com/img2017/top/img_main.webp"} alt="banner" className='h-[100%] w-[100%] object-cover object-center md:aspect-[1000/578] '/>
        <h1 className='text-[30px] absolute tracking-[3px] text-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] pt-[57px] md:text-[60px] w-[360px] md:w-[530px] leading-[34px] md:leading-[60px] lg:text-[46px]'>
          Delivering Wow, Sharing Happiness
        </h1>
      </div>
  )
}

export default Banner