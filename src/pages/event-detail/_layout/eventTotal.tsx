 

import { useEffect } from "react";
import { toVND } from "../../../format_common/currency";
import { Text } from "../../../lib/text";
import { useEventData } from "../eventStore";
 
 

function Total() {

        const {event , setEvent} = useEventData()
          
   
    useEffect(()=>{
      setEvent("quantity",0)
    },[event?.ticket?.id])
    
  return (  


          
       
      <div className="mb:text-16px mb:h-[3rem] text-22px bg-white font-300 flex items-center pl-[1.688rem] h-[3.5rem] w-full rounded-[5px] ">
        <Text.P_22_300>

            {toVND(event?.quantity*event.ticket?.cost)}
        </Text.P_22_300>
      </div>
     
     
       
    
    )
  
}

export default Total;