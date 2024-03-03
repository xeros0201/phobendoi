import { useTranslation } from "react-i18next";
import { useParams } from "../../../router";
import { useEventQueryById } from "../../event/api";
import { iconCross } from "../../../lib/icon/icon";
import { useEventModal } from "../_layout/Event_Controller";
import { Text } from "../../../lib/text";
import { useEffect, useState } from "react";
import EventStep1 from "../_layout/step1Form";
import EventStep2 from "../_layout/eventStep2";
import EventSuccess from "../_layout/EventSuccess";
import EventBread from "../_layout/breadcrums";
import { useEventData, useEventStore } from "../eventStore";
import EventStep3 from "../_layout/eventStep3";



 
 

function EventCheckOut({}) {
    const { id,tab} = useParams('/event-detail/:id/:tab?')
    const { i18n:{language} } = useTranslation()
    const { data,status } = useEventQueryById(id,tab)
    const {  close} = useEventModal()
    const [step,setStep ] = useState('step1')
 
    const {   setEvent} = useEventData()
    useEffect(()=>{
      if(status ==="success"){
        setEvent("date",data.data[0].attributes.start_date)
      }
    },[status])
   

    const renderStep = () =>{

      if(step === "step1"){

      return  <EventStep1 step={step} setStep={setStep}  data={data?.data[0].attributes} ></EventStep1>
      }
      if(step === "step2"){

        return     <EventStep2  backToStep1={setStep}     step={step} ></EventStep2>
      }
      if(step === "step3"){

        return     <EventStep3  setStep={setStep}     step={step} ></EventStep3>
      }
      if(step ==="success"){

        return  <EventSuccess step={step} ></EventSuccess>
      }
     
    }
     
  return (  
    <div className=" flex z-[99] fixed h-screen w-screen ">
        <div onClick={()=>close()} className=" mb:hidden w-1/2 h-full"></div>
          <div className="  overflow-y-auto mb:w-full mb:px-20px w-1/2 flex flex-col mb:gap-40px gap-[3.75rem] h-full bg-[#E6DFD7] px-[5rem]">
              <div className=" pt-[2.813rem] mb:pt-[1.25rem] gap-[1.25rem] flex flex-col">
                  <div className="  items-baseline flex gap-[12px]">
                      <Text.S_32_500  className=" flex-grow">

                    {data?.data[0].attributes.thumbnail_title}
                      </Text.S_32_500>
               
                    <span className=" cursor-pointer"  onClick={()=>close()}>
                    {iconCross()}
                    </span>
                  </div>
                    <div className=" w-full border-b border-black"></div>
              </div>
              {/*  */}
              <div className={ step==="success"? " gap-[3rem] flex flex-col":"   gap-[3.438rem] flex flex-col"}>
                   {step==="success"? null :<EventBread step={step} ></EventBread>}
                {renderStep()}
                   
                </div>
          </div>
    </div>  
  );
}

export default EventCheckOut;