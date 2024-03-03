import { useTranslation } from "react-i18next";
 
import { useParams } from "../../../router";
import { useEventQueryById } from "../../event/api";
import { useEvent } from "../../../i18n/event";
import { Text } from "../../../lib/text";
import { toDateStr, toHour } from "../../../format_common/toDayTime";
import { toVND } from "../../../format_common/currency";
import Para from "../../../lib/text/Para";

export default function EventInfo({}) {
    const { id ,tab } = useParams('/event-detail/:id/:tab?');
    
    const {isLoading,data} = useEventQueryById(id,tab)
    const {  i18n:{language} } = useTranslation()
    const text = useEvent()
    let nameArr:any =[]
    if(isLoading){
        return <div>
            Loading......
        </div>
    }
    if(!data){
        return <div></div>
    }
    if(data.data.length <=0) return <div></div>
    const calendar = data.data[0].attributes
   
        const event = data.data[0].attributes.end_date
    return <div className="  w-[65%] min-h-5  mb:gap-[20px]  mb:flex-col justify-between  flex uppercase ">
                <div className=" flex flex-col mb:w-full  lap:w-[170px]">
                    <Text._14_400 className="  font-semibold">
                        {text?.time}
                    </Text._14_400>
                    <Text._14_400 className=" flex flex-col ">
                       <span>{ toDateStr(calendar.start_date,language)}</span> 
                       
                        <span> { toHour(calendar.start_date)}</span>
                    </Text._14_400>
                </div>
                <div className=" flex-col tab:w-1/2 mb:w-full flex lap:w-[40%]">
                <Text._14_400 className="  font-semibold">
                {text?.address}
                </Text._14_400>
                
                    <Para className=" text-14 mb:text-12px">
                    {calendar.address.text}
                    </Para>
                 
              
                </div>
                <div className=" w-[13rem] mb:w-full flex flex-col">
                <Text._14_400 className=" font-semibold">
                    {text?.price}
                </Text._14_400>
                <Text._14_400 className=" ">
                {
                
                calendar.tickets.map((item)=>{
                     
                     
                  if(nameArr.indexOf(item.name)===-1){
                    nameArr.push(item.name)
                  return <div className="">
                      {item.name}: {toVND(item.cost)}
                  </div>
                  }
               
                  return null    
                })
               }
                </Text._14_400>
                </div>
    </div>
}