import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";
import { Text } from "../text";
import Bracket from "../text/Bracket";
import { useTranslation } from "react-i18next";
export type pages =  "ABOUT_US" | "SERVICE" 
| "TESTIMONIAL" 
| "PROJECTS" 
| "GALLERY" 
| "EVENT" 
| "SHOP" 
| "SERVICE.stage"

export default function Caption_Bracket({className,section ,color = black,text,pages,bracket,innClassName=''}:{
    className?: string
    section?:  pages
    color?: string
    text?: any
    pages? : pages
    bracket?: string
    innClassName?: string
}){
    const { t} = useTranslation('home')
    
    const renderBracket = () =>{

        if(pages ==="PROJECTS"){
        
            return {
                title: bracket ,
                subtitle:  text
            }

        }

        return {
            title: text?.title || t(`${section}.title`),
            subtitle:  text?.subtitle || t(`${section}.subtitle`)
        }
    }

    if(section ==="ABOUT_US"){
        return    <div style={{
            color: color
        }} className={twMerge("lap:w-[89%]  mb:w-full  ",className)}>
           
                <Text._64_500 color={color}>
                <p> <Bracket color={color}  className="  ">{  renderBracket().title}</Bracket>
                    { renderBracket().subtitle }
                </p>
            </Text._64_500>
        </div>
    }
      return    <div style={{
        color: color
    }} className={twMerge("lap:w-[89%] mb:flex mb:flex-col  ",className)}>
           <Bracket color={color} className=" lap:hidden mb:pt-3  w-[20%]   ">{ renderBracket().title}</Bracket> 
            <Text._64_500 className={innClassName} color={color}>
            <p> <Bracket color={color}  className=" hidden lap:inline-block">{  renderBracket().title}</Bracket>
                { renderBracket().subtitle }
            </p>
        </Text._64_500>
    </div>
    
}
 