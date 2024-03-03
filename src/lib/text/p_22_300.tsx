import React from "react";
import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";
 
 
export default function P_22_300({className,children, color = black}:{
    className?: string
    children: React.ReactNode | string
    color?: string
   
}){
     
      return    <span style={{
        color: color
    }} className={twMerge("lap:text-22 mb:text-16px mb:font-light tracking-[0%] lap:font-light lap:leading-[137%]",className)}>
        
        {children}
    </span>
    
}