import React, { useEffect, useState } from 'react'
import {AiOutlineMinus} from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
const Location = () => {
  const [onitem,setOnitem] = useState(0)
  const onSlider= (item)=>{
    setOnitem(item)
  }

  //set window Width
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      setWindowWidth(window.innerWidth)
    })
    return ()=>{
      window.removeEventListener("resize",()=>{
        setWindowWidth(windowWidth)
      })
    }
  },[])
  return (
    <div>
        <h1 className='pt-[90px] text-[26px] md:text-[30px] pb-[30px] text-center flex items-center justify-center '  data-aos="zoom-in"><AiOutlineMinus className="mr-[16px] md:w-[25px] w-[16px]"/>Location<AiOutlineMinus className="ml-[16px] md:w-[25px] w-[16px]"/></h1>
        <div className='py-[40px] text-[22px] grid grid-cols-2 gap-16 grid-center md:flex md:items-center md:justify-evenly max-w-[1000px] mx-auto' data-aos="fade-down">
          <h1 className={`${onitem==0?"content-none after:w-[100%] after:h-[4px] after:bg-blue-50 after:absolute after:bottom-0 after:left-0 after:animate-underlineCenter ":""} cursor-pointer hover:text-[#9eaf3b] transition-colors duration-200 ease-linear relative justify-self-center md:justify-self-auto `} onClick={()=>{setOnitem(0)}} >Binh Duong</h1>
          <h1 className={`${onitem==1?"content-none after:w-[100%] after:h-[4px] after:bg-blue-50 after:absolute after:bottom-0 after:left-0 after:animate-underlineCenter ":""} cursor-pointer hover:text-[#9eaf3b] transition-colors duration-200 ease-linear relative justify-self-center md:justify-self-auto`} onClick={()=>{setOnitem(1)}} >Hai Phong</h1>
          <h1 className={`${onitem==2?"content-none after:w-[100%] after:h-[4px] after:bg-blue-50 after:absolute after:bottom-0 after:left-0 after:animate-underlineCenter ":""} cursor-pointer hover:text-[#9eaf3b] transition-colors duration-200 ease-linear relative justify-self-center md:justify-self-auto`} onClick={()=>{setOnitem(2)}} >Ho Chi Minh</h1>
          <h1 className={`${onitem==3?"content-none after:w-[100%] after:h-[4px] after:bg-blue-50 after:absolute after:bottom-0 after:left-0 after:animate-underlineCenter ":""} cursor-pointer hover:text-[#9eaf3b] transition-colors duration-200 ease-linear relative justify-self-center md:justify-self-auto`} onClick={()=>{setOnitem(3)}} >Ha Noi</h1>
        </div>


        <Carousel 
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          centerMode={windowWidth>=760&&windowWidth<=1024?true:false}
          autoPlay={true}
          stopOnHover={true}
          infiniteLoop={true}
          onChange={onSlider}
          selectedItem={onitem}
        >
            <div className='w-full h-[400px]  md:h-[621px]'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1ChZLp3-f0FwOrYMyNyv0uKMiCq2dcdo&ehbc=2E312F" className={`h-full ${windowWidth>=1024&&"!m-0 !w-[100%]"}`}  ></iframe>
            </div>
            <div className='w-full h-[400px] md:h-[621px]'>
              <iframe src="https://www.google.com/maps/d/embed?mid=1Lxot1KvY0zlYwD7dWM7K_OJIHhINvxda&ehbc=2E312F" className={`h-full ${windowWidth>=1024&&"!m-0 !w-[100%]"}`}  ></iframe>
            </div>
            <div className='w-full h-[400px] md:h-[621px]'>
              <iframe src="https://www.google.com/maps/d/embed?mid=1NMR1FbgQ8YgJapW4mXHPoI_D85zHaJun&ehbc=2E312F" className={`h-full ${windowWidth>=1024&&"!m-0 !w-[100%]"}`}  ></iframe>
            </div>
            <div className='w-full h-[400px] md:h-[621px]'>
              <iframe src="https://www.google.com/maps/d/embed?mid=1_uJ5_xNEv40FpCmePlvpgQ1ha7zWCIBq&ehbc=2E312F" className={`h-full ${windowWidth>=1024&&"!m-0 !w-[100%]"}`}  ></iframe>
            </div>
        </Carousel>
    </div>
  )
}

export default Location