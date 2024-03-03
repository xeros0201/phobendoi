
 

 
 

import { useParams } from "../../../router";
import { useEventQueryById } from "../../event/api";

import { useEvent } from "../../../i18n/event";
 
import Flex75 from "./Flex_75";

import { useInput } from "../../../components/Form/form";
import { Text } from "../../../lib/text";
import { useEventData } from "../eventStore";
import { iconBack } from "../../../lib/icon";
 

 const openNewTab  = (url:string) =>{
  return window.open(  url, '_blank', 'noopener,noreferrer')
 }
export const   Policy=({children}:any) => {
  return ( 
    
    <strong className=" cursor-pointer capitalize underline underline-offset-1" onClick={()=> openNewTab('https://www.facebook.com/')} >{children}</strong>
  );
} 

 
function EventStep2({ backToStep1}:any) {


  const text = useEvent()
 
  const  { id,tab} = useParams('/event-detail/:id/:tab?')
  const { data:query} = useEventQueryById(id,tab)
  const {  setEvent} = useEventData()
  const  event ={
    event:query?.data[0].attributes.event.data.attributes,
    calendar:query?.data[0].attributes
  }
 
  const { Text:createText,Number:createNumber,form:{getValues}} = useInput({mutation:{
    isLoading:false
  }})
  
 
 
 

 
  return ( 
    <>
    <div className=" h-full w-full mb:gap-[1.25rem]   flex gap-[4.375rem] flex-col">
     
          <Text._14_400>

          {text?.policy.text} <Policy>{text?.policy.link}</Policy>.
          </Text._14_400>
    
        <div className=" w-full  flex-col flex gap-[2.5rem]"> 
          <Flex75 title={text?.outlet.email}>
            {createText({name:"email",required:true,placeholder:"Email",setEvent:setEvent})}
          </Flex75>
          <Flex75 title={text?.outlet.name}>
            {createText({name:"client_name",required:true,placeholder:"Họ và tên",setEvent:setEvent})}
          </Flex75>
          <Flex75 title={text?.outlet.phone}>
            {createNumber({name:"phone",required:true,placeholder:"Số điện thoại",setEvent:setEvent})}
          </Flex75>

        </div>
    </div>
    <div>
 

    <Flex75 className={'pb-[6.25rem] mb:pb-[3.75rem] flex-row '} title={null}>
          
              <div className=" flex gap-[1.875rem] mb:gap-[1.25rem] flex-col">
                <div  onClick={()=>{ 
                     
                          backToStep1('step3')}}  className="mb:h-[3.75rem] h-[5.625rem] w-full flex items-center justify-center  
                cursor-pointer uppercase text-22px mb:text-16px font-500 text-trang bg-black rounded-[5px]
                "  
                // onClick={isCreateOrder?console.log():handleSubmit(hanleApi)} 
                > 
                  <span className=" leading-[1] uppercase text-white   border-den mb:text-12px text-18px font-600"> {text?.step3}</span>
                </div>
              </div>
    </Flex75>
    <Flex75 className={'pb-[6.25rem] mb:pb-[3.75rem] flex-row '} title={null}>
              <div className=" flex gap-[1.875rem] mb:gap-[1.25rem] flex-col">
               
                <div onClick={()=>{
          
                  backToStep1('step1')}} className=" cursor-pointer justify-center flex items-center gap-[10px]">
                  {iconBack()} <span className=" leading-[1] uppercase border-b border-black mb:text-12px text-18px font-600"> {text?.step1}</span>
                </div>

              </div>
       
    </Flex75>
    </div>
    </>
   );
   
}

export default EventStep2;