 
import { twMerge } from "tailwind-merge";
import { Text } from "../../../lib/text";
import Bracket from "../../../lib/text/Bracket";

 
 
 
 
function EventLayout({ children ,bracket = "loading..",className}:{
    children: React.ReactNode | string,
    bracket: string | undefined
    className?: string
}) {
 
 
  return ( 
    <div className="  mb:flex-col mb:gap-20px justify-between flex w-full">
        <Bracket>{bracket}</Bracket>
        <div className={twMerge(" w-[67%] mb:w-full  " , className)}>
            <Text.P_22_300 className={className}>
               {children}
            </Text.P_22_300>
        </div>
    </div>
   );
}

export default EventLayout;