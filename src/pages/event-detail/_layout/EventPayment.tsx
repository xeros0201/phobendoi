
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
 
 
import PaymentNote from "./paymentNote";
import PaymentOnlineNote from "./PaymentOnlineNote";
import { useParams } from "../../../router";
import { useEventQueryById } from "../../event/api";
import { useEvent } from "../../../i18n/event";
import { black } from "../../../assets/color";
import { Text } from "../../../lib/text";
import { useEventData } from "../eventStore";

function Payment({}:any) {
  const  { id,tab} = useParams('/event-detail/:id/:tab?')
  const { data:query} = useEventQueryById(id,tab)
  const  event ={
    event:query?.data[0].attributes.event.data.attributes,
    calendar: query?.data[0].attributes
  }
  const { setEvent} = useEventData()
  const text = useEvent()
 
  let paymentCheck =  event?.calendar?.payment

  const [check,setCheck] = useState<any>(paymentCheck!=="online & offline"?paymentCheck:'offline')
  

  useEffect(()=>{
    setEvent("payment",check)
  },[])
  const disableCheckOnline = () =>{

    if(paymentCheck==="online & offline"){
      return false
    }
    if(paymentCheck==='online'){
      return false
    }else{
      return true
    }
  }
  const disableCheckOffline = () =>{
    if(paymentCheck==="online & offline"){
      return false
    }
    if(paymentCheck==='offline'){
      return false
    }else{
      return true
    }
  }
  return ( 
    <FormControl>
 
  <RadioGroup

    defaultValue={check}
    onChange={(e,val):any=>{ 
      setEvent("payment",val)
      setCheck(val)}
    }
    className=" flex flex-col gap-[0.938rem]"
  >
   
    <FormControlLabel disabled={disableCheckOffline()}    value="offline" control={<Radio
      defaultChecked={check}
    sx={{
      '&.Mui-checked': {
        color: black,
      },
  }}
    />} label={<Text.P_22_300  >{ text?.payment_offline.label}</Text.P_22_300>} />
    {check==='offline'?<div className=" pb-[0.625rem]">
    <PaymentNote  text={text?.payment_offline} ></PaymentNote>

    </div>:null}
    <div className=" pt-[0.625rem]  w-full border-b border-black"></div>
    <FormControlLabel disabled={disableCheckOnline()}  value="online" control={<Radio
    defaultChecked={!check}
      sx={{
        '&.Mui-checked': {
          color: black,
        },
    }}
    />} label={<Text.P_22_300  >{ text?.payment_online.label}</Text.P_22_300>} />
   {check==='online'? <div className="">

    <PaymentOnlineNote calendar={event.calendar} event={event.event} text={text?.payment_online}></PaymentOnlineNote>
    </div>:null}
  </RadioGroup>
    </FormControl>
   );
}

export default Payment;