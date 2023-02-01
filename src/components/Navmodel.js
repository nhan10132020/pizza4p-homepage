import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { useContextProvider } from '../context/Provider'
const Navmodel = () => {
    // subitems [Tiêu đề,có subitem nhỏ hơn không,[mảng các items nhỏ hơn]]
    const subItems = [["About",false],["Location",false],["Menu",false],["E-invoice",false],["News",false],["Activities",true,["Sustainability Report","Workshop","Jar Return Programme","Projection mapping","Donation","All"]],["Career",false],["Online store",false],["Company Profile",false]]
    const [open,setOpen] = useState(false)
    function processOpen(){
        setOpen(!open)
    }
    const {isSubbarOpen,setIsSubbarOpen} = useContextProvider()
  return (
    <div className='bg-[rgb(2,2,2)] fixed h-[100vh] w-[100%] bottom-0 z-[1000] text-[16px]'>
        <div className='h-[57px] flex items-center justify-center relative'>
            <h1 className='text-[#7F7D7C]'>English / <span className='text-[#333333] font-century'>Vietnamese</span></h1>
            <div className='absolute right-0 top-0 h-[57px] px-4 flex items-center' onClick={()=>{setIsSubbarOpen(!isSubbarOpen)}}>
                <AiOutlineClose size="30px" color='#898989'/>
            </div>
        </div>
        <div className='mt-[57px] h-[300px] md:h-auto overflow-y-auto pt-4 px-4 text-[16px] md:mt-[0px] scrollbar-thin scrollbar-thumb-[#9EAF3B]'>
        {
            subItems.map((subitem)=>{
                return (
                <>
                <div className={`h-[57px] border-b-[1px] flex items-center justify-center relative ${subitem[1]&&open?"border-dotted border-[#414141]":"border-solid border-[#989898]"}`}>
                    <h1>{subitem[0]}</h1>
                    {subitem[1]?(
                    <div className='absolute h-[100%] right-0 px-2 flex items-center'>
                        {open?<AiOutlineClose onClick={processOpen} size="18px"/>:<AiOutlinePlus size="18px" onClick={processOpen}/>}
                    </div>
                    ):''}
                </div>
                {subitem[1]&&open?(
                <div className='py-[10px]  border-b-[1px] border-[#606060]'>
                    {subitem[2].map((ele)=>(
                        <div className='h-[51px] flex items-center justify-center text-[#BEBEBE]'>
                            <h1>{ele}</h1>
                        </div>
                    ))}
                </div>
                ):''}
                </>
                )  
            })
        }
        </div>
    </div>
  )
}

export default Navmodel