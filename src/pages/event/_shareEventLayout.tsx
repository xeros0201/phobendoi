 
import {  useLayoutEffect } from "react";
 
import { useEvent } from "../../i18n/event";
 
import Bracket from "../../lib/text/Bracket";
import { Link, useParams } from "../../router";
 
import { useEventQuery } from "./api";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text } from "../../lib/text";
import { useTranslation } from "react-i18next";
 
 
 
import { useNavbarStore } from "../../components/navbar/navbar_controller";
import { toDateStr, toHour } from "../../format_common/toDayTime";
import ImageStrapi from "../../lib/React-Lazy-Image/ImageStrapi";

export default function SharedLayout(){
    const text = useEvent()
    const { i18n:{language} } = useTranslation()
 
    const {tab } = useParams('/event/:tab')
  
    const { data,isLoading} = useEventQuery(tab)
    const {  toPrimary} =  useNavbarStore()
 
    useLayoutEffect(() => {
         
        toPrimary()
        if(!isLoading){

             setTimeout(()=>{
                ScrollTrigger.getById('footer')?.refresh();
                window.scrollTo(0,0)
            },500)
        }
        ScrollTrigger.getById('footer')?.refresh();
        
      return () => {
        
      }
    }, [isLoading])
    const renderIsPaid = (fee:any)=>{
       const item =  fee.split('(')[1] 
         
       if(item === 'paid)'){
        return text?.fee.paid
       }
       if(item === 'free)'){
        return text?.fee.free
       }
            return  text?.fee.non
    }
    const handleTab = ()=>{
        if(tab===""|| tab === undefined){
            return ""
        }
        return tab
    }
   
    return <div className=" w-full h-auto mb:pt-[40px]">
        <Bracket className=" mb:hidden">{text?.bracket}</Bracket>
        <div className=" w-full flex flex-col tab:grid tab:grid-cols-2  lap:gap-[3.431rem] mb:gap-[40px] ">
                {data?.data.map(( item)=>{
               
                
                  if(item.attributes.status)
                  return <Link to={`/event-detail/:id/:tab?`} params={{id:item.attributes.url, tab:handleTab()}} className=" w-full h-auto flex flex-col gap-[0.938rem]">
                    <div className=" w-full  h-[70vh] ">
                    <ImageStrapi className="mb:rounded-[10px] lap:rounded-[20px]  object-cover " type="medium" item={item.attributes.event.data.attributes.thumbnail}></ImageStrapi>
                    </div>
                        <div className=" flex flex-col">
                            <Text.P_22_300 className="tab:text-22 tab:font-600 mb:font-400 lap:font-medium lap:tracking-normal lap:leading-[1.1]">
                                { item.attributes.event.data.attributes.name}
                            </Text.P_22_300>
                            <Text._14_400 className=" uppercase lap:tracking-wide">
                                {toDateStr(item.attributes.start_date,language)} {toHour(item.attributes.start_date)}-{toHour(item.attributes.end_date)}, { text?.status[item.attributes.status]}, { renderIsPaid(item.attributes.fee)  }
                            </Text._14_400>
                        </div>
                   </Link>
                })}
        </div>
    </div>
}