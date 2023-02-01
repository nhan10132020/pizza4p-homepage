import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import useComponentVisible from "../hooks/useComponentVisible";
import { useTransition, animated, config } from "@react-spring/web";

const Navbaritem = ({ index, item, navBarLength }) => {
  const [openSub, setOpenSub] = useState(false);
  const { ref, isComponentVisible } = useComponentVisible(false, setOpenSub);
  const transition = useTransition(isComponentVisible&&openSub,{
    from:{
      opacity:0
    },
    enter:{
      opacity:1
    },
    leave:{
      opacity:0
    },
    config: { duration: 300 }
  })
  return (
    <div ref={ref} className="h-full flex items-center align-center relative">
      <p
        className={`group lg:mx-2 xl:mx-5 ${
          index == navBarLength - 1 &&
          "border-r-[1px] lg:mx-0 xl:mx-0 lg:px-2 xl:px-5 border-[#fff]"
        }
        hover:text-[#9eaf3b] ${
          openSub && "text-[#9eaf3b]"
        } hover:cursor-pointer transition duration-300 ease-linear flex items-center gap-0.5`}
        onClick={() => {
          setOpenSub(!openSub);
        }}
      >
        {item.largeItem}

        {item.haveSub && (
          <AiOutlineDown
            size={"10px"}
            className={`translate-y-[-5px] group-hover:translate-y-[2px] ${
              openSub && "translate-y-[2px]"
            }  transition-transform duration-300 ease-linear`}
          />
        )}
      </p>

      {item.haveSub && 
        transition((style,item2)=>item2? (
        <animated.div
          style={style}
          className={` min-w-[250px] px-8 py-6 absolute top-[88px] bg-[rgb(0,0,0,0.8)] `}
        >
          {item.sub?.map((item) => (
            <p className="py-2 hover:cursor-pointer hover:opacity-50 transition-opacity">{item}</p>
          ))}
        </animated.div>):""
        )
      }
    </div>
  );
};

export default Navbaritem;
