import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";
import Bracket from "../text/Bracket";
import { useTranslation } from "react-i18next";
import { Text } from "../text";
import Button_Arrow_Down from "../button/Button_Arrow_Down";
import Arrow_Back_Down from "../svg/arrow_back_down";
import { Parser } from 'html-to-react'
 
export type pages =  "ABOUT_US" | "SERVICE" | "TESTIMONIAL" | "PROJECTS" | "GALLERY" | "EVENT" | "SHOP"
export default function Three_Block({className,pages ,section ,color = black, offBracket=false,offSub=false,innClassName,text=null,mb_caption="nt", brackClassName=''}:{
    className?: string
    section?:  pages
    color?: string
    offBracket?: boolean
    offSub?: boolean | pages
    innClassName?:string
    text?:any |null,
    pages?: pages,
    mb_caption?:"hidden" | "nt"
    brackClassName?: string
}){
    const { t} = useTranslation('home')

    const renderBracket=() =>{
        if(pages ==="PROJECTS" && offBracket){
            return  <span className=" mb:hidden w-[30%]"></span> 
        }
        if(offBracket){
            return <span className={twMerge(" w-[30%]",brackClassName)}></span> 
        }
      
         
        return <Bracket color={color} className={twMerge(" w-[30%] mb:w-[20%]  ",brackClassName)}>{ text?.title ||t(`${section}.title`)}</Bracket>
    }
    const renderSub = () =>{
        if(offSub){
            return null
        }   
        if(section ==="PROJECTS"){
            return   <Text.S_32_500  color={color}className=" capitalize lap:w-[200px]"> {t(`${section}.subtitle`)}</Text.S_32_500>
        }
        if(section ==="TESTIMONIAL"){
            return <Text.S_32_500  color={color}className=" capitalize lap:w-auto"> {t(`${section}.subtitle`)}</Text.S_32_500>
        }
        if(pages === "ABOUT_US"){
            return  <Text.S_32_500  color={color} className="mb:hidden capitalize tracking-wide lap:w-[300px]"> {text?.subtitle ||t(`${section}.subtitle`)}</Text.S_32_500>
        } 
        if( pages ==="PROJECTS"){
            return <Text.S_32_500  color={color}className=" mb:w-full capitalize lap:w-[295px]">{ text?.subtitle || ""} </Text.S_32_500>
        }
        return <Text.S_32_500  color={color}className=" capitalize lap:w-[295px]"> {text?.subtitle ||t(`${section}.subtitle`)}</Text.S_32_500>
    }
    const renderThirdBlock = () =>{
            if(section  ==="TESTIMONIAL" ){
                return <span className=" mb:hidden  self-center">  <Arrow_Back_Down></Arrow_Back_Down>    </span>  
            }
            if(section ==="PROJECTS")
            {
                return <div className={ offSub ? "w-full  flex justify-between items-end":" flex flex-col w-fit items-start  gap-[40px]"}>

                <Text.P_22_300  color={color} className="  lap:w-[435px]">{ t(`${section}.caption`)}</Text.P_22_300>
                </div>
            }
            if(pages ==="PROJECTS"){
               
                
             
                return  <div className={ offSub ? "w-full flex justify-between ":"  flex flex-col w-fit items-start  gap-[40px]"}>
                <Text.P_22_300 key={ Math.random() } className=" mb:w-full  lap:w-[435px]" color={color} >
                 {  Parser().parse(text?.caption)}
                </Text.P_22_300>
                  
                   
            
                </div>
            }
            if(pages ==="ABOUT_US"){
                return  <div className={ offSub ? "w-full flex justify-between items-end":" mb:w-full flex flex-col w-fit items-start mb:gap-[20px]  gap-[40px]"}>

                <Text.P_22_300  color={color} className=" mb:w-full    lap:w-[435px]">{ text?.caption?.cap1 }</Text.P_22_300>
                <Text.P_22_300  color={color} className=" mb:w-full    lap:w-[435px]">{ text?.caption?.cap2 }</Text.P_22_300>
                <Text.P_22_300  color={color} className="  mb:w-full   lap:w-[435px]">{ text?.caption?.cap3 }</Text.P_22_300>
                </div>
            }
            return  <div className={ offSub ? "w-full flex justify-between items-end":" flex flex-col w-fit items-start  gap-[40px]"}>

            <Text.P_22_300  color={color} className={` mb:${mb_caption}  lap:w-[435px]`}>{ t(`${section}.caption`)}</Text.P_22_300>
           {  <Button_Arrow_Down  color={color} to={t(`${section}.link`)} >
            {t(`${section}.button`)}
            </Button_Arrow_Down>}
            </div>
    }
      return    <div style={{
        color: color
    }} className={twMerge(" lap:w-[89%] tab:w-full mb:w-full    flex justify-between ",className)}>
        
        
      { renderBracket() }
         
        <div className={twMerge( "  w-[70%] flex mb:gap-[40px]      mb:flex-col  justify-between  ",innClassName)}>
            { renderSub() }
            {renderThirdBlock()}
        </div>
     
    </div>
    
}
 