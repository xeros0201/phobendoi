import { twMerge } from "tailwind-merge"
import { black, checkColor } from "../../assets/color"
import Arrow_45 from "../svg/arrow_45"

export default function Button_Arrow({children, onClick,color=black,arrow =true,className}:{

    children: React.ReactNode | string
    onClick?: any
    color?: string
    arrow?: boolean,
    className?: string
}){
      
        
            return <span  onClick={onClick}  className=" cursor-pointer  flex  gap-1 items-center">
          
                <span className={ twMerge("underline-offset-1  underline  ", className) }>{children}</span>
           
            { arrow&& <Arrow_45 color={checkColor(color)}></Arrow_45>  }
            </span>
         
}