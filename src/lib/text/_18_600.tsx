import React from "react";
import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";

 
export default function _18_600({className,children, color = black,onClick}:{
    className?: string
    children: React.ReactNode | string
    color?: string
    onClick?: () => void
}){ 
     
      return    <span onClick={onClick} style={{
        color: color
    }} className={twMerge("lap:text-18 tracking-normal lap:font-semibold",className)}>
        {children}
    </span>
    
}