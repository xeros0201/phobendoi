import {   useLayoutEffect } from "react";
import { Link, useParams } from "../../../router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavbarStore } from "../../../components/navbar/navbar_controller";
import {   useEventQueryById } from "../../event/api";
import BackArrow from "./_arrow";
import { Text } from "../../../lib/text";
import { useEvent } from "../../../i18n/event";
import { useTranslation } from "react-i18next";
import Spacer from "../../../lib/layouts/Spacer";
import EventInfo from "./_event_info_block";
    
import EventLayout from "../_layout/EventLayout";
 
import EventCheckOut from "./+checkout";
import { useEventModal } from "../_layout/Event_Controller";
import ImageStrapi from "../../../lib/React-Lazy-Image/ImageStrapi";
import Para from "../../../lib/text/Para";

 
export default function EventDetail(){
    const { id ,tab } = useParams('/event-detail/:id/:tab?');
    const { toPrimary } = useNavbarStore()
    const {isLoading,data } = useEventQueryById(id,tab)
    const {  i18n:{language} } = useTranslation()
    const text = useEvent()
    const { isOpen,open} = useEventModal()
    useLayoutEffect(() => {
        toPrimary()
        
        window.scrollTo(0,0)
      return () => {
      
      };
    }, [isLoading])
 
    if(isLoading){
        return <div className=" min-h-screen">
            Loading..........
        </div>
    }
    const handleRenderBackButton = ()=>{
        if(!tab){
            return text?.all
        }
        if(tab ==="coming"){
            return  text?.status.coming
        }
        
        return text?.status.opening
    }
    if(!data) return <div> Not found</div>
    if(data?.data.length <= 0) return (
        <div>
            Not found
        </div>
    )
    const calendar = data?.data[0]
    const event = data.data[0].attributes.event.data.attributes
    return <>
    
    <div onLoad={()=>ScrollTrigger.getById('footer')?.refresh() } className=" pb-[12.5rem] mb:pb-[9.375rem] min-h-screen mb:gap-[60px] w-full flex pt-[4.063rem] gap-[5.625rem]  flex-col mb:px-[0]  px-[135px]     ">
                 {/* 1 */}
              
                <div className="  w-fit">
                    <Link to={'/event/:tab'} className=" flex items-center uppercase  gap-[5px]" params={{ tab: tab || ""}}>
                            <BackArrow></BackArrow> <Text._14_400 className=" border-b border-black lap:leading-[0.8]">{text?.back} {   handleRenderBackButton()     } </Text._14_400>
                    </Link>
                </div>
                <Spacer className="mb:hidden lap:h-[25px] w-full"></Spacer>
                {/* 2 */}
                <Text._64_500 className=" w-full">
                            {calendar?.attributes.thumbnail_title}
                 </Text._64_500>
                    
               
                  {/* 3 */}
                <div className=" flex justify-between mb:flex-col mb:gap-[20px] ">
                    <EventInfo></EventInfo>
                    <span onClick={()=>open()} className="tab:w-[18.125rem]  mb:w-full mb:h-[3.75rem] mb:text-16px    border border-black rounded-[5px] flex items-center justify-center cursor-pointer w-[18.125rem] h-[5.625rem]">
                        <Text.P_22_300 className=" lap:font-medium uppercase">

                        {text?.book}
                        </Text.P_22_300>
                    </span>
                </div>
                <Spacer className=" lap:h-[100px] mb:hidden w-full"></Spacer>
                <div className=" mb:w-screen  self-center" >
                    <ImageStrapi className="rounded-[20px] mb:w-screen mb:rounded-none object-cover"  item={calendar.attributes.event.data.attributes.thumbnail}  type="large"></ImageStrapi>
                </div>
                <div>
                    <EventLayout bracket={text?.about}>
                         <Para >{calendar.attributes.event.data.attributes.about}</Para>
                    </EventLayout>
                </div>
                {event.artist.length !== 0 && <div>
                    <EventLayout className="mb:w-full flex flex-col mb:gap-[5px]  gap-[1.25rem] " bracket={text?.artist}>
                    {
                     event.artist.map((item)=>{

                            return <div className=" flex flex-col mb:gap-[5px] gap-[1.25rem]" key={item.name}>
                            <Text.P_22_300 className=" lap:font-medium">
                            {item.name}
                            </Text.P_22_300>
                            <div   className=" border-b border-black"></div>
                            </div> 
                            
                        })
                        }
                    </EventLayout>
                </div>}
    </div>
   {isOpen && <EventCheckOut></EventCheckOut>}
    </> 
 
    
}