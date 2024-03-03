import { useLayoutEffect, useRef } from "react"
import { white } from "../../../assets/color"
import { useTransHome } from "../../../i18n/i18n"
import Button_Arrow_Down from "../../../lib/button/Button_Arrow_Down"
import { Text } from "../../../lib/text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export default function GalleryItem({title,link,index}:{

    title: string
    link: string
    index: number
}){
    const listElements = useRef<any>([])
    const {_t} = useTransHome("PROJECTS")
    useLayoutEffect(() => {
        gsap.set(listElements.current,{opacity:0,y:200})
        ScrollTrigger.batch(listElements.current,{
      batchMax:1,
      
      start:"-50% 70%",
      end:"+=10",
      onEnter: batch => gsap.to(batch,{ duration:0.4, y:0 ,opacity:1,stagger:{each:0.1 } }),
        
  
    
  
    })
    
      return () => {
        
      };
    }, [ ])
  
    return <div  ref={e=>(listElements.current[index]=e)} className=" ease-in-out  mb:flex-col px-8 mb:gap-[20px] flex w-full ">
            <div className=" w-[30%] flex justify-end mb:justify-start pr-[20px] mt-[40px]">
                        <Text._14_400 color={white}>
                            {index+1}/3
                        </Text._14_400>
            </div>
            <div className=" lap:w-[50%] w-full mb:flex  mb:flex-col mb:gap-[40px]  "> 
                <Text.S_96_500 className="    " color={white}>
                    {title}
                </Text.S_96_500 >
                <div className=" lap:w-[70%] mb:w-1/2 flex justify-between">
                    <Button_Arrow_Down className=" uppercase" color={white} to={link}>
                        {_t("detail")}
                    </Button_Arrow_Down>
                    <Button_Arrow_Down className=" uppercase" color={white} to={'/'} >
                    {_t("all")}
                    </Button_Arrow_Down>
                </div>
            </div>

    </div>
}