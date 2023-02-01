import React from 'react'
import item1 from '../assets/image/img_item2.webp'
import item2 from '../assets/image/img_item1.webp'
import item3 from '../assets/image/img_item3.webp'
import item4 from '../assets/image/img_item4.webp'
const ListItem = () => {
    const items = [
        {
            img: item1,
            des:"House-made Cheese",
            BackgroundColor:"bg-[rgba(158,175,59,.7)]"
        },
        {
            img: item2,
            des:"Farm to Table",
            BackgroundColor:"bg-[#4E3F35B3]"
        },
        {
            img: item3,
            des:"Design",
            BackgroundColor:"bg-[#3A2D59B3]"
        },
        {
            img: item4,
            des:"Omotaneshi",
            BackgroundColor:"bg-[#333333B3]"
        },
    ]

  return (
    <div className='px-[15px] md:px[25px] flex flex-col md:flex-row w-full ' data-aos="fade-up">
        {
            items.map((item)=>(
                <div className='relative mb-[15px] md:mx-[5px] md:text-center w-full md:mb-0'>
                    <div className=''>
                        <img src={item.img} className='block w-full bg-cover aspect-[1/1]'/>
                    </div>
                    <div className={`${item.BackgroundColor} hover:bg-[transparent] absolute w-full h-full top-0 flex items-center justify-center text-[25px] md:text-[26px]`}>
                        <h1>{item.des}</h1>
                    </div>
                </div>
            ))
        }
        
        
    </div>
  )
}

export default ListItem