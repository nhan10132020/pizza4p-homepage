import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'
import img1 from '../assets/image/img_news1.jpeg'
import img2 from '../assets/image/img_news2.jpeg'
import img3 from '../assets/image/img_news3.jpeg'
import news1 from '../assets/image/img_02.webp'
import news2 from '../assets/image/img_03.webp'
const News = () => {
    const items = [{
        img:img1,
        name:"SOUP SELECTION FOR WINTER SOULS",
        date:"2022.12.22",
        description:"Winter days are slowly coming, what could be more wonderful than enjoying a hot dish at this moment?..."
    },
    {
      img:img2,
      name:"🎄 RING IN THE HOLIDAY WITH OUR SPECIAL X’MAS BOX",
      date:"2022.12.19",
      description:"Are you planning for a Christmas celebration this year?! If you are still wondering which dish to ch..."
    },
    {
    img:img3,
    name:"4P'S NEW SPACE AT VINCOM LONG BIEN: GASTRONOMIC DELIGHTS IN THE NORTHERN FOREST-THEMED RESTAURANT",
    date:"2022.12.18",
    description:"🌟We’re bringing 4P’s enthusiasts good news: Pizza 4P’s Vincom Long Bien is officially open and ready..."
    }
  ]
  return (
    <div className='pt-[75px] pb-[130px] md:pt-[100px] md:pb-[150px] px-[15px] md:px-[20px]' style={{
      background:`url(${news2}) no-repeat right bottom, url(${news1}) no-repeat top left `
    }}>
        <div className='max-w-[810px] mx-auto'>
          <h1 className=' text-[26px] md:text-[30px] text-center flex items-center justify-center pb-[16px] '><AiOutlineMinus className="mr-[16px] md:w-[25px] w-[16px]"/>News & Media<AiOutlineMinus className="ml-[16px] md:w-[25px] w-[16px]"/></h1>
          
          {items.map((item)=>(
            <div className='mt-[50px] md:mt-[75px]' data-aos="fade-in" data-aos-duration="1000">
              <div className='grid grid-cols-[1.6fr,3fr] gap-6 relative md:grid-cols-[1fr,3fr,1fr]'>
                <div className='pt-[100%] h-0 bg-cover bg-left' style={{backgroundImage:`url(${item.img})` }}>
                  {/* <img src={item.img} alt="news item" className='w-full object-cover object-left hover:opacity-70 transition-all duration-150 ease-linear'/> */}
                </div>
                
    
                <div className='flex flex-col items-start justify-center flex-1'>
                  <h1 className='text-[15px] md:text-[22px] pb-2 hover:text-[#9eaf3b] transition-colors duration-200 ease-linear'>{item.name}</h1>
                  <p className='text-[#b3b3b3] tracking-widest text-[12px] md:text-[14px]'>{item.date}</p>
                  <p className='hidden md:block text-[12px] pt-[14px]'>{item.description}</p>
                </div>
                <button className='hidden md:block w-full '><h1 className='text-[16px] py-3  border-[1px] border-white hover:border-[#9eaf3b] hover:text-[#9eaf3b] transition-colors duration-200 ease-linear'>Read More</h1></button>
              </div>
              
              <p className='text-[12px] pt-[15px] pb-[25px] tracking-wide md:hidden'>{item.description}</p>
              <button className='py-3 border-[1px] border-white text-center w-full md:hidden'><h1 className='text-[15px]'>Read More</h1></button>
            </div>
          ))}
        
        </div>
    </div>
  )
}

export default News