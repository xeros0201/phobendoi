import { useEvent } from "../../../i18n/event";
import Button_Arrow from "../../../lib/button/Button_Arrow";
import { Text } from "../../../lib/text";

 
 
const arr =['facebook:  phố bên đồi', 'hotline:  093892310338','email: info@phobendoi.art']
function EventSuccess({step}:any) {
  const text = useEvent()
  if(step==="success"){

    return ( 
      <div className=" flex flex-col mb:gap-60px gap-[5rem]">
        <Text._64_500>

      <div className=" text-64px mb:text-28px mb:pr-0 flex flex-col font-500 leading-[1.1] pr-[16%]">
       <span>{text?.success}</span> 
       <span>{text?.wait}</span> 
      </div>
        </Text._64_500>
      <div className=" text-18 mb:text-12px font-600 uppercase"> 
       <Button_Arrow >
        <Text._18_600>

        {text?.return}
        </Text._18_600>
       </Button_Arrow>

       
      </div>
      <div className="pt-[15px] border-t mb:border-none  mb:flex-col mb:gap-[0.313rem] border-den pb-[2rem] flex justify-between w-full">
          {arr.map((e)=>   <Text._14_400 key={e}>
            {e}
          </Text._14_400> )}
      </div>
      </div>
     );
  }
  return null
}

export default EventSuccess;