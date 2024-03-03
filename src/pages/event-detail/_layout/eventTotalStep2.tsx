
import { toVND } from "../../../format_common/currency";
import { Text } from "../../../lib/text";
 

function Total2({ giftcode,total}:any) {
 
          
           
 
  return (  
  

          
       
      <div className=" text-22px mb:text-16px mb:h-[3rem] bg-trang font-300 flex items-center  h-[3.5rem] w-full rounded-[5px] ">
        <Text.P_22_300>

            {toVND(total)}
        </Text.P_22_300>
      </div>
     
     
       
 
  );
}

export default Total2;