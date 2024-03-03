 
import { useEvent } from "../../../i18n/event";
import { iconBreadcrums } from "../../../lib/icon";
 

function EventBread({step}:any) {

  const text = useEvent()
  return ( 
    <div className=" flex text-14 mb:text-[12px] items-baseline mb:gap-[0.313rem] gap-[0.625rem] font-400 uppercase">
        <span className={step==="step1"?" border-b border-den leading-[1] ":" opacity-50"}>{text?.step1}</span>
        <span>{iconBreadcrums()}</span>
        <span className={step==="step2"?" border-b border-den leading-[1] ":" opacity-50"} >{text?.step2}</span>
        <span>{iconBreadcrums()}</span>
        <span className={step==="step3"?" border-b border-den leading-[1] ":" opacity-50"} >{text?.step3}</span>
    </div>
   );
}

export default EventBread;