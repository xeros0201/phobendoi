 
import { useEvent } from "../../../i18n/event";
import { useEventData } from "../eventStore";
 

 
function PaymentOnlineNote({ calendar,event}:any) {


  const {event:value} = useEventData()
  
  const text = useEvent()?.payment_online
 
  return (  
    <div className=" bg-[#F7F3EE] mb:p-[0.688rem] mb:text-[12px] text-14 font-400 flex flex-col gap-4  p-[2rem]">
      <div>
        <div>
          {text?.bank_title}
        </div>
        <div>
          {text?.owner} {calendar.bank_account}
        </div>
        <div>
        {text?.bank_number} {calendar.bank_number}
        </div>
        <div>
        {text?.bank} {calendar.bank_address}
        </div>
      </div>
      <div>
        {text?.bank_content} {`"${event.name} - ${value?.client_name} - ${value?.phone} - ${value?.email}"`}
      </div>
    {text?.text.split("<br/>").map(str=> <p>{str}</p>)}
  </div>
  );
}

export default PaymentOnlineNote;