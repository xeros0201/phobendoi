import React from "react";
import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";

 
export default function S_96_500({className,children, color = black}:{
    className?: string
    children: React.ReactNode | string
    color?: string
   
}){
     
      return    <span style={{
        color: color
    }} className={twMerge("lap:text-96 mb:text-56px lap:font-medium tracking-tighter  ",className)}>
        {children}
    </span>
    
}