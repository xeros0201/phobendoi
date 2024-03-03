import { Text } from "../../../lib/text";

function PaymentNote({text}:any) {
  return (  
    <div className=" bg-[#F7F3EE] text-14px mb:text-12px font-400 flex flex-col gap-4  mb:p-[0.688rem]  p-[2rem]">
      <Text._14_400>

    {text.text.split("<br/>").map((str:any)=> <p>{str}</p>)}
      </Text._14_400>
  </div>
  );
}

export default PaymentNote;