import TimeZone from "./evenTimeZone";
import Total from "./eventTotal";
import Increase from "./IncreaseInput";
import { useEvent } from "../../../i18n/event";
import { useInput } from "../../../components/Form/form";
import Flex75 from "./Flex_75";
import { toDateStr } from "../../../format_common/toDayTime";
import { Text } from "../../../lib/text";

import { useEventData } from "../eventStore";

function EventStep1({data,setStep}:any) {

  const  {   SelectObject_:createSelectObject  } =useInput({mutation:{
    isLoading:false
  }})
  const  text = useEvent()?.outlet
  const  step = useEvent()?.step2
 
  const {  event} = useEventData()
  
 

  const renderSubmit= () =>{

      if(event.quantity===0) return
      if(event.time ==='') return
      if(!event.ticket.id) return
      return (
      <Flex75 className={'pb-[9.375rem]'} title={null}>

      <div className=" h-[5.625rem] mb:text-16px mb:h-[3.75rem] w-full flex items-center justify-center first-letter:
      cursor-pointer text-22px uppercase font-500 text-white bg-black rounded-[5px]
      "  onClick={()=> setStep("step2")} >
          {step}
      </div>
      </Flex75>
      )
  }

  return (  
    <>
    <div className="  flex flex-col   w-full h-full  gap-[40px] ">
        <Flex75  title={text?.date}>
        <Text.P_22_300>
            {toDateStr(data.start_date)}
          </Text.P_22_300>
          
        </Flex75>
       <Flex75 title={text?.ticket}>
        {createSelectObject({name:"ticket",options:data.tickets, required:false})}
        </Flex75> 
      <Flex75 subClassName={"  pt-3 self-start"} title={text?.timeZone}>
          <TimeZone data={data}  name={'timeZone'}  ></TimeZone>
        </Flex75> 
         <Flex75 subClassName={"  pt-3 self-start"} title={text?.quantity}>
          <Increase  ></Increase>
        </Flex75> 
        <Flex75 title={text?.cost}>
            <Total ></Total>
        </Flex75> 
        </div>
   
        {renderSubmit() || <div className=" w-full  h-[5.625rem] pb-[9.375rem]"></div>}

    </>
  );
}

export default EventStep1;