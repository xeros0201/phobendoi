 
import { twMerge } from "tailwind-merge";
 
import { Text } from ".";

 
export default function Bracket({className,children, color}:{
    className?: string
    children:   string | React.ReactNode
    color?: string | any
   
}){
   
     
      return    <Text._14_400 color={color} 
        className={twMerge("lap:pr-[2vw] uppercase",className)}>
       ({children})
    </Text._14_400>
    
}