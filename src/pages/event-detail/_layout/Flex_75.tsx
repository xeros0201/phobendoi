import { Text } from "../../../lib/text";

function Flex75({children,title,subClassName,className}:any) {
  return ( 
    <div className={" flex justify-between items-center mb:items-start mb:gap-[0.313rem] mb:flex-col " + className}>
        <div className={"w-[25%] mb:w-full   uppercase  " + subClassName}>
         <Text._14_400> {title}</Text._14_400></div>
        <div className="mb:w-full w-[72%]">
          <Text.P_22_300>
          {children}
          </Text.P_22_300>
          </div>
    </div>
   );
}

export default Flex75;