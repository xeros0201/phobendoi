import React from "react";
import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";

 
export default function _64_500({className,children, color = black}:{
    className?: string
    children: React.ReactNode | string
    color?: string
   
}){
     
      return    <span style={{
        color: color
    }} className={twMerge("lap:text-64 mb:text-28px   font-medium leading-tight tracking-tighter  ",className)}>
        {children}
    </span>
    
}