
 

 
import Payment from "./EventPayment";
 
 
import Total2 from "./eventTotalStep2";

import { useParams } from "../../../router";
import { useEventQueryById } from "../../event/api";

import { useEvent } from "../../../i18n/event";
 
import Flex75 from "./Flex_75";

import { useInput } from "../../../components/Form/form";

import { useEventData } from "../eventStore";
import { iconBack } from "../../../lib/icon";
import { useCreateEvent } from "./api";
 

 const openNewTab  = (url:string) =>{
  return window.open(  url, '_blank', 'noopener,noreferrer')
 }
export const   Policy=({children}:any) => {
  return ( 
    
    <strong className=" cursor-pointer capitalize underline underline-offset-1" onClick={()=> openNewTab('https://www.facebook.com/')} >{children}</strong>
  );
} 

 
function EventStep3({ setStep}:any) {


  const text = useEvent()
 
  const  { id,tab} = useParams('/event-detail/:id/:tab?')
  const { data:query} = useEventQueryById(id,tab)
  
  const {event:eventData,setEvent} = useEventData()
  const  event ={
    event:query?.data[0].attributes.event.data.attributes,
    calendar:query?.data[0].attributes
  }
 
  const {  TextArea:createTextArea} = useInput({mutation:{
    isLoading:false
  }})
  const {  mutateAsync} = useCreateEvent()
  
  
 
 const handleSubmit = async  () =>{

  const  { ticket,..._event  } = eventData
   const  data:any = {
      ..._event,
      ticket_name: eventData.ticket.name,
      ticket_cost: eventData.ticket.cost,
      total:  eventData.ticket.cost*eventData.quantity,
      event_name: event.event?.name,
      address: event.calendar?.address
    }  
    console.log({data})
     await mutateAsync({data},{ onSuccess:()=>{
      setStep("success")

     }})
 }
  return ( 
    <>
    <div className=" h-full w-full mb:gap-[1.25rem]   flex gap-[4.375rem] flex-col">
     
     
        <div className=" w-full  flex-col flex gap-[2.5rem]"> 
 
          <Flex75 subClassName={"  pt-3 self-start"} title={text?.outlet.payment}>
          
              <Payment    ></Payment>
   
          </Flex75>
           {/* <Flex75   subClassName={" pt-3 self-start"} title={"giftcode"}>
            <div className=" flex gap-2 flex-col">

            <div className={ gift ==='' ? "   flex justify-between":" rounded-[5px]  px-2 py-2 border-2 border-green-600 flex justify-between"}>

            <div className={  " w-[80%]"}>{createText({name:"giftcode",required:false,placeholder:"Enter your giftcode"})} </div> 
           {submitButtonOnClick(checkGiftcode,"check",white,black,isLoading)}
            </div>
            {isError? <p className=" mb:text-12px  text-14px font-400 text-red-500">{ error?.message}</p>:null}
            {isSuccess? <p className=" uppercase mb:text-12px  text-14px font-400 text-green-600">verified</p>:null}
            </div>
            
        </Flex75>  */}
        <Flex75 title={text?.outlet.cost}>
            <Total2 giftcode={false}  total={eventData.quantity*eventData.ticket.cost}    ></Total2>
        </Flex75> 
          <Flex75 subClassName={"  pt-3 self-start"} title={text?.outlet.note}>
            {createTextArea({name:"note",placeholder:text?.note,setEvent:setEvent})}
          </Flex75>
        </div>
    </div>
    <div>
    {/* {status==="error"?<p className="  w-full flex justify-between py-2 mb:text-12px  text-14px font-400 text-red-500"> <span className=" w-[25%]"> </span> <span className=" w-75">*{createError.message}</span> </p>:null} */}

    <Flex75 className={'pb-[6.25rem] mb:pb-[3.75rem]'} title={null}>
              <div className=" flex gap-[1.875rem] mb:gap-[1.25rem] flex-col">
                <div className="mb:h-[3.75rem] h-[5.625rem] w-full flex items-center justify-center  
                cursor-pointer uppercase text-22px mb:text-16px font-500 text-white bg-black rounded-[5px]
                "  
                onClick={()=> handleSubmit()} 
                >
                    {false?<span className=" flex items-center justify-center w-8 h-8 animate-pulse rounded-full bg-gradient-to-r from-stone-100 via-neutral-100 to-yellow-400 border-2 animate-spin">
                      <span className=" w-6 h-6 rounded-full z-20 bg-black"></span>
                    </span>:text?.outlet.finish}
                </div>
            

              </div>
    </Flex75>
    
    <Flex75 className={'pb-[6.25rem] mb:pb-[3.75rem]'} title={null}>
              <div className=" flex gap-[1.875rem] mb:gap-[1.25rem] flex-col">
                
                <div onClick={()=>{
               
               setStep('step2')}} className=" cursor-pointer justify-center flex items-center gap-[10px]">
                  {iconBack()} <span className=" leading-[1] uppercase border-b border-den mb:text-12px text-18px font-600"> {text?.step2}</span>
                </div>

              </div>
    </Flex75>
    
    </div>
    </>
   );
   
}

export default EventStep3;