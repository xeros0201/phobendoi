import { twMerge } from "tailwind-merge"
import { Link, Path, useParams } from "../../router"
import Arrow_down from "../svg/arrow_down"
import { Text } from "../text"
import { black } from "../../assets/color"
import { NavLink } from "react-router-dom"
import { useEventQuery } from "../../pages/event/api"
import { Spinner } from "@material-tailwind/react"
 


export default function Button_Arrow_Down({to,children,type="arrow",onClick,className,color = black}:{

    children: React.ReactNode | string
    onClick?: any
    to: Path | any
    className? :string
    color?: string
    type?:"no_arrow" | "arrow" | "event"
}){
    const { tab } = useParams("/event/:tab")
    const { data, isLoading} = useEventQuery(to)
            if(type === "event"){
              const handleRenderArrow = () =>{
                {if(to === ""&& tab === undefined){
                    return <Arrow_down className="mb:hidden" color={color}  ></Arrow_down>
                }}
                return   tab ===to && <Arrow_down className="mb:hidden"   color={color}  ></Arrow_down> 
              }
              const renderClassName= ()=>{
                {if(to === ""&& tab === undefined){
                  return twMerge(   " h-fit  cursor-pointer  "  ,className)
              }}
              if(to===tab){
                return  twMerge(   " h-fit  cursor-pointer  "  ,className)
              }
              return    twMerge(    " opacity-50",className)
              }
              const renderNumber = () =>{
                if( !data?.data.length){
                  return  "0"
                }
                return data?.data.length <10 ? "0"+data?.data.length :data?.data.length
              }
              return <NavLink to={{pathname:`/event/${to}` }}  onClick={onClick}  className={renderClassName()}>
                <span className=" lap:gap-2 flex mb:gap-1   ">
                 <span className=" flex flex-col">

                <span className="   lap:h-2  "></span>
                {handleRenderArrow()}
                </span>
                <Text.S_32_500 color={color} className="capitalize self-end gap-1   flex">
                {children } <Text._14_400 className=" align-top"> { isLoading ? <Spinner/> : renderNumber() }</Text._14_400>
                </Text.S_32_500>
                </span>
            </NavLink>
            }
            return <Link to={{pathname:to }}  onClick={onClick}  className={twMerge(" h-fit  cursor-pointer  ",className)}>
                <span className=" gap-2 flex mb:gap-1   ">
                <span className=" flex flex-col">

              {type=== "arrow" && <Arrow_down color={color} ></Arrow_down>}
                <span className=" h-2 mb:h-0"></span>
                </span>
                <Text._18_600 color={color} className=" mb:text-12px self-end mb:font-semibold underline-offset-1  underline">
                {children}
                </Text._18_600>
                </span>
            </Link>
         
}