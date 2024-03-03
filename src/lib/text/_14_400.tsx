import React from "react";
import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";

 
export default function _14_400({className,children, color = black}:{
    className?: string
    children: React.ReactNode | string
    color?: string
   
}){
     
      return    <span style={{
        color: color
    }} className={twMerge("lap:text-14 mb:text-12px tracking-normal lap:font-normal lap:leading-[137%]",className)}>
        {children}
    </span>
    
}